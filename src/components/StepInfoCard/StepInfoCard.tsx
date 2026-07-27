import "./StepInfoCard.css";

interface StepInfoProps {
  step: {
    image: string;
    title: string;
    description: string;
    narration: string;
    instruction: string;
    durationAfterSpeech: number;
  };
}

export default function StepInfoCard({ step }: StepInfoProps) {
  return (
    <div className="step-card">
      <h2>{step.title}</h2>
      <h3>{step.description}</h3>
      
      <p className="instruction">
        {step.instruction}
      </p>
    </div>
  );
}