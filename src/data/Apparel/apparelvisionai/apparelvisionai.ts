import step1 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step2 from "../../../assets/Apparel/apparelVS/ApprVSstep1.png"
import type { Step } from "../../../types/step";

export const apparelvisionai: Step[] = [
  {
    image: step1,
    title: {
      en: "Home",
      hi: "होम",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Vision on the Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार पर विज़न पर क्लिक करें।",
    },
    instruction: {
      en: "Click on ' Vision ' on the Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार पर 'Vision' पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step2,
    title: {
      en: "Vision",
      hi: "विज़न",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Vision AI is coming to your Store soon.",
      hi: "विज़न एआई जल्द ही आपके स्टोर में आ रहा है।",
    },
    instruction: {
      en: "Vision AI is coming to your Store soon.",
      hi: "Vision AI जल्द ही आपके स्टोर में आ रहा है।",
    },
    durationAfterSpeech: 2000,
  },
];
