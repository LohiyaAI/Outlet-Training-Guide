import { useState, useEffect, useRef } from "react";
import "./TrainingPlayer.css";
import MobileMock from "../MobileMock/MobileMock";
import StepInfoCard from "../StepInfoCard/StepInfoCard";

import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

interface Step {
  image: string;
  title: string;
  description: string;
  instruction: string;
  narration: string;
  durationAfterSpeech: number;
  autoScroll?: boolean;
}

interface TrainingPlayerProps {
  steps: Step[];
}

export default function TrainingPlayer({ steps }: TrainingPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<number | null>(null);

  // Load voices once
  useEffect(() => {
    const loadVoices = () => {
      console.log(window.speechSynthesis.getVoices());
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Prevent rendering if there are no steps
  if (steps.length === 0) {
    return (
      <div className="training-player">
        <h2>No training steps available.</h2>
      </div>
    );
  }

  // Current step
  const current = steps[currentStep] ?? steps[0];

  // Reset player when module changes
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(true);

    window.speechSynthesis.cancel();

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [steps]);

  const nextStep = () => {
    setCurrentStep((prev) =>
      prev < steps.length - 1 ? prev + 1 : prev
    );
  };

  const previousStep = () => {
    setCurrentStep((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = window.setTimeout(() => {

      if (!isMuted) {

        const speech = new SpeechSynthesisUtterance(
          current.narration
        );

        // Get all available voices
        const voices = window.speechSynthesis.getVoices();

        // Try to use a female voice
        const femaleVoice =
          voices.find(v => v.name.includes("Heera")) ||
          voices.find(v => v.name.includes("Google UK English Female")) ||
          voices.find(v => v.name.includes("Zira"));
        console.log("Selected voice:", femaleVoice);

        if (femaleVoice) {
          speech.voice = femaleVoice;
        }

        speech.rate = 1.5;
        speech.pitch = 1;
        speech.volume = 1;

        speechRef.current = speech;

        speech.onend = () => {
          timerRef.current = window.setTimeout(() => {
            setCurrentStep((prev) => {
              if (prev < steps.length - 1) {
                return prev + 1;
              }
              return prev;
            });
          }, current.durationAfterSpeech);
        };

        window.speechSynthesis.speak(speech);

      } else {

        timerRef.current = window.setTimeout(() => {
          setCurrentStep((prev) => {
            if (prev < steps.length - 1) {
              return prev + 1;
            }
            return prev;
          });
        }, current.durationAfterSpeech);

      }

    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      window.speechSynthesis.cancel();
    };

  }, [currentStep, isPlaying, isMuted, current, steps]);

  return (
    <div className="training-player">
      <div className="training-layout">

        {/* Phone Section */}
<div className="player-section">

  <div className="phone-section">

    <button
      className="arrow-btn"
      onClick={previousStep}
    >
      &#10094;
    </button>

    <MobileMock
      image={current.image}
      autoScroll={current.autoScroll}
    />

    <button
      className="arrow-btn"
      onClick={nextStep}
    >
      &#10095;
    </button>

  </div>

  <div className="progress-section">

    <div className="dots">
      {steps.map((_, index) => (
        <span
          key={index}
          className={currentStep === index ? "dot active" : "dot"}
        />
      ))}
    </div>

    <p className="step-text">
      Step {currentStep + 1} of {steps.length}
    </p>

  </div>

  <div className="controls">

    <button
      className="control-btn"
      onClick={() => {
        if (isPlaying) {
          setIsPlaying(false);

          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }

          window.speechSynthesis.cancel();

        } else {
          setIsPlaying(true);
        }
      }}
      title={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>

    <button
      className="control-btn"
      onClick={() => setIsMuted(!isMuted)}
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
    </button>

  </div>

</div>

{/* Step Card */}
<div className="left-panel">
  <StepInfoCard step={current} />
</div>

      </div>
    </div>
  );
}