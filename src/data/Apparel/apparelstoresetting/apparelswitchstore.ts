import step1 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step2 from "../../../assets/mybasketsteps/MBstep2.png";
import step3 from "../../../assets/SSstep1.png";
import type { Step } from "../../../types/step";

export const apparelswitchstore: Step[] = [
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
      en: "Go to the Profile",
      hi: "प्रोफ़ाइल पर जाएं",
    },
    instruction: {
      en: "Go to Profile from the Top Navigation Bar.",
      hi: "शीर्ष नेविगेशन बार से Profile पर जाएं।",
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
      en: "Click on Switch/add store",
      hi: "स्विच/ऐड स्टोर पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Switch/add store'.",
      hi: "'Switch/add store' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Your Stores",
      hi: "आपके स्टोर",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Store that you want to Login to",
      hi: "वह स्टोर चुनें जिसमें आप लॉगिन करना चाहते हैं",
    },
    instruction: {
      en: "Select the Store that you want to Login to.",
      hi: "वह स्टोर चुनें जिसमें आप लॉगिन करना चाहते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
