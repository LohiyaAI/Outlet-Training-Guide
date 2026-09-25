import step1 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../../assets/mybasketsteps/MBstep2.png";
import step3 from "../../../assets/lang.png";
import type { Step } from "../../../types/step";

export const eleclanguage: Step[] = [
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
      en: "Go to Profile from the Top Navigation Bar",
      hi: "शीर्ष नेविगेशन बार से प्रोफ़ाइल पर जाएं",
    },
    instruction: {
      en: "Go to ' Profile ' from the Top Navigation Bar.",
      hi: "शीर्ष नेविगेशन बार से 'Profile' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Profile",
      hi: "प्रोफ़ाइल",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Language",
      hi: "लैंग्वेज पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Language'.",
      hi: "'Language' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Language",
      hi: "भाषा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Choose your Preffered Language from the 6 available Languages",
      hi: "उपलब्ध 6 भाषाओं में से अपनी पसंदीदा भाषा चुनें",
    },
    instruction: {
      en: "Choose your Preffered Language from the 6 available Languages.",
      hi: "उपलब्ध 6 भाषाओं में से अपनी पसंदीदा भाषा चुनें।",
    },
    durationAfterSpeech: 3000,
  },
];
