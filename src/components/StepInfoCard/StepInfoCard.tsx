import "./StepInfoCard.css";
import { getText, type Language, type Step } from "../../types/step";

interface StepInfoProps {
  step: Step;
  language: Language;
}

export default function StepInfoCard({ step, language }: StepInfoProps) {
  const title = getText(step.title, language);
  const description = getText(step.description, language);
  const instruction = getText(step.instruction, language);

  return (
    <div className="step-card">
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p className="instruction">{instruction}</p>
    </div>
  );
}