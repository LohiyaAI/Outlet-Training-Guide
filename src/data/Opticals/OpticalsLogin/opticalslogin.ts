import step1 from "../../../assets/login/step1.png";
import step2 from "../../../assets/login/step2.png";
import step from "../../../assets/phonenumberlogin/phonenumberstep3.png";
import step4 from "../../../assets/login/step4.png";
import step5 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import type { Step } from "../../../types/step";

export const opticalslogin: Step[] = [
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
      en: "Start by selecting your preferred language from the list.",
      hi: "सूची में से अपनी पसंदीदा भाषा चुनकर शुरुआत करें।",
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
      en: "Now tap the Get Started button to continue with the registration process.",
      hi: "अब पंजीकरण प्रक्रिया जारी रखने के लिए गेट स्टार्टेड बटन पर टैप करें।",
    },
    instruction: {
      en: "Click Get Started to move to the next step.",
      hi: "अगले चरण पर जाने के लिए गेट स्टार्टेड पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step,
    title: {
      en: "Step 3",
      hi: "चरण 3",
    },
    description: {
      en: "Phone Number",
      hi: "फ़ोन नंबर",
    },
    narration: {
      en: "Enter your Phone Number to Verify",
      hi: "सत्यापित करने के लिए अपना फ़ोन नंबर दर्ज करें",
    },
    instruction: {
      en: "Enter your Phone Number to Verify.",
      hi: "सत्यापित करने के लिए अपना फ़ोन नंबर दर्ज करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step4,
    title: {
      en: "Step 4",
      hi: "चरण 4",
    },
    description: {
      en: "OTP Verification",
      hi: "ओटीपी सत्यापन",
    },
    narration: {
      en: "Enter the OTP sent to your registered mobile number.",
      hi: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया ओटीपी दर्ज करें।",
    },
    instruction: {
      en: "Enter the OTP sent to your registered mobile number.",
      hi: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया ओटीपी दर्ज करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step5,
    title: {
      en: "Home",
      hi: "होम",
    },
    description: {
      en: "",
      hi: "",
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
