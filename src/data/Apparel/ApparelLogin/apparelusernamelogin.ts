import step1 from "../../../assets/login/step1.png";
import step2 from "../../../assets/login/step2.png";
import step3 from "../../../assets/usernamelogin/usernamestep1.png";
import step5 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import type { Step } from "../../../types/step";

export const apparelusernamelogin: Step[] = [
  {
    image: step1,
    title: {
      en: "Step 1",
      hi: "चरण 1",
    },
    description: {
      en: "Choose a Language",
      hi: "भाषा चुनें",
    },
    narration: {
      en: "Start by selecting your preferred language from the list",
      hi: "सूची में से अपनी पसंदीदा भाषा चुनकर शुरुआत करें",
    },
    instruction: {
      en: "Start by selecting your preferred language from the list.",
      hi: "सूची में से अपनी पसंदीदा भाषा चुनकर शुरुआत करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step2,
    title: {
      en: "Step 2",
      hi: "चरण 2",
    },
    description: {
      en: "Click on Get Started",
      hi: "गेट स्टार्टेड पर क्लिक करें",
    },
    narration: {
      en: "Now tap the Get Started button to continue with the registration process",
      hi: "अब पंजीकरण प्रक्रिया जारी रखने के लिए गेट स्टार्टेड बटन पर टैप करें",
    },
    instruction: {
      en: "Click Get Started to move to the next step..",
      hi: "अगले चरण पर जाने के लिए गेट स्टार्टेड पर क्लिक करें..",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step3,
    title: {
      en: "Step 3",
      hi: "चरण 3",
    },
    description: {
      en: "Details",
      hi: "विवरण",
    },
    narration: {
      en: "Enter your Username & Password",
      hi: "अपना यूज़रनेम और पासवर्ड दर्ज करें",
    },
    instruction: {
      en: "Enter Username & Password.",
      hi: "यूज़रनेम और पासवर्ड दर्ज करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step5,
    title: {
      en: "Step 4",
      hi: "चरण 4",
    },
    description: {
      en: "Home",
      hi: "होम",
    },
    narration: {
      en: "Welcome to Home Page",
      hi: "होम पेज में आपका स्वागत है",
    },
    instruction: {
      en: "Welcome to Home Page.",
      hi: "होम पेज में आपका स्वागत है।",
    },
    durationAfterSpeech: 2000,
  },
];
