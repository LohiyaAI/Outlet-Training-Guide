import { useState, useEffect, useRef } from "react";
import "./TrainingPlayer.css";
import MobileMock from "../MobileMock/MobileMock";
import StepInfoCard from "../StepInfoCard/StepInfoCard";
import { getText, type Language, type Step } from "../../types/step";

import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const SPEECH_RATES: Record<Language, number> = {
  en: 1.5,
  hi: 1.0,
};

// ── Voice-selection helpers ────────────────────────────────────────────────

/**
 * Helper to identify whether a voice is female.
 * Evaluates explicit markers, negative male indicators, and known voice names.
 */
function isFemaleVoice(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase();

  // 1. Explicit negative male indicators
  if (
    name.includes(" male") ||
    name.startsWith("male") ||
    name.includes(" man") ||
    name.startsWith("man") ||
    /\b(david|george|mark|ravi|madhav|prabhat|guy|james|richard|stefan|pavel)\b/i.test(name)
  ) {
    return false;
  }

  // 2. Explicit positive female indicators
  if (name.includes("female") || name.includes("woman")) {
    return true;
  }

  // 3. Known female voice names across Windows, macOS, Android, Chrome, Edge
  const femaleNames = [
    "swara", "kalpana", "lekha", "aditi", "heera", "raveena", "veena",
    "zira", "susan", "hazel", "karen", "moira", "tessa", "samantha",
    "victoria", "allison", "ava", "serena", "fiona", "emily", "joanna",
    "salli", "kendra", "kimberly", "ivy", "aria", "jenny", "natasha",
    "neerja", "ananya", "priya", "sunita", "shruti"
  ];
  if (femaleNames.some((n) => name.includes(n))) {
    return true;
  }

  // 4. Vendor defaults: Google voices and Microsoft natural voices without male markers
  if (name.startsWith("google") || name.includes("natural")) {
    return true;
  }

  return false;
}

/**
 * Selects the best English voice from the available list, preferring:
 * 1. en-IN female
 * 2. Any English female
 * 3. en-IN any
 * 4. Any English
 * Never returns a Hindi/non-English voice.
 */
function selectEnglishVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | undefined {
  const englishVoices = voices.filter((v) =>
    v.lang.toLowerCase().startsWith("en")
  );

  const isEnIn = (v: SpeechSynthesisVoice) =>
    v.lang.toLowerCase() === "en-in" ||
    v.lang.toLowerCase() === "en_in";

  return (
    englishVoices.find((v) => isEnIn(v) && isFemaleVoice(v)) ||
    englishVoices.find((v) => isFemaleVoice(v)) ||
    englishVoices.find((v) => isEnIn(v)) ||
    englishVoices[0]
  );
}

/**
 * Selects the best Hindi voice from the available list, preferring:
 * 1. hi-IN female
 * 2. Any Hindi female
 * 3. Any Hindi
 * Returns undefined if no Hindi voice is available (never fallback to English).
 */
function selectHindiVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | undefined {
  const hindiVoices = voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith("hi") ||
      v.name.toLowerCase().includes("hindi")
  );

  const isHiIn = (v: SpeechSynthesisVoice) =>
    v.lang.toLowerCase() === "hi-in" ||
    v.lang.toLowerCase() === "hi_in";

  return (
    hindiVoices.find((v) => isHiIn(v) && isFemaleVoice(v)) ||
    hindiVoices.find((v) => isFemaleVoice(v)) ||
    hindiVoices[0]
  );
}

// ──────────────────────────────────────────────────────────────────────────

interface TrainingPlayerProps {
  steps: Step[];
  language: Language;
}

export default function TrainingPlayer({ steps, language }: TrainingPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<number | null>(null);

  // Load and reactively store available voices
  useEffect(() => {
    const updateVoices = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const available = window.speechSynthesis.getVoices();
        if (available.length > 0) {
          setVoices(available);
        }
      }
    };

    updateVoices();

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Reset player when module (steps) changes
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(true);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [steps]);

  // Current step
  const current = steps[currentStep] ?? steps[0];

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
    if (!isPlaying || !current) return;

    timerRef.current = window.setTimeout(() => {
      const narrationText = getText(current.narration, language);

      const scheduleNext = () => {
        timerRef.current = window.setTimeout(() => {
          setCurrentStep((prev) => {
            if (prev < steps.length - 1) {
              return prev + 1;
            }
            return prev;
          });
        }, current.durationAfterSpeech);
      };

      if (!isMuted && narrationText.trim()) {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
          scheduleNext();
          return;
        }

        const availableVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
        const speech = new SpeechSynthesisUtterance(narrationText);
        speech.pitch = 1;
        speech.volume = 1;

        if (language === "hi") {
          speech.lang = "hi-IN";
          speech.rate = SPEECH_RATES.hi;

          const hindiVoice = selectHindiVoice(availableVoices);
          if (hindiVoice) {
            speech.voice = hindiVoice;
          } else {
            // Never force an English voice to speak Hindi text
            // Still auto-advance so player does not get stuck
            console.info("No Hindi voice available; skipping speech audio and advancing timer.");
            scheduleNext();
            return;
          }
        } else {
          speech.lang = "en-IN";
          speech.rate = SPEECH_RATES.en;

          const englishVoice = selectEnglishVoice(availableVoices);
          if (englishVoice) {
            speech.voice = englishVoice;
          }
        }

        speechRef.current = speech;

        speech.onend = () => {
          scheduleNext();
        };

        speech.onerror = (event) => {
          console.warn("Speech synthesis error:", event);
          scheduleNext();
        };

        window.speechSynthesis.speak(speech);
      } else {
        scheduleNext();
      }
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentStep, isPlaying, isMuted, current, steps, language, voices]);

  // Prevent rendering if there are no steps
  if (steps.length === 0 || !current) {
    return (
      <div className="training-player">
        <h2>No training steps available.</h2>
      </div>
    );
  }

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

                  if (typeof window !== "undefined" && "speechSynthesis" in window) {
                    window.speechSynthesis.cancel();
                  }
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
          <StepInfoCard step={current} language={language} />
        </div>
      </div>
    </div>
  );
}
