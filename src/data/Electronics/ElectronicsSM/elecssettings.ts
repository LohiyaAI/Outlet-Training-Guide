import step1 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../../assets/mybasketsteps/MBstep2.png";
import step3 from "../../../assets/storesettings/SSetstep1.png";
import step4 from "../../../assets/storesettings/SSetstep2.png";
import type { Step } from "../../../types/step";

export const elecssettings: Step[] = [
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
      en: "Click on 'Store Settings'",
      hi: "'Store Settings' पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Store Settings'.",
      hi: "'Store Settings' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Store Settings",
      hi: "स्टोर सेटिंग्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Here you can Edit the Basic Information Related to your Store",
      hi: "यहाँ आप अपने स्टोर से संबंधित बुनियादी जानकारी संपादित कर सकते हैं",
    },
    instruction: {
      en: "Here you can Edit the Basic Information\n1. Store Name\n2. Store Type\n3. Average Footfall\n4. Daily Expense.",
      hi: "यहाँ आप बुनियादी जानकारी संपादित कर सकते हैं\n1. स्टोर का नाम\n2. स्टोर का प्रकार\n3. औसत ग्राहक संख्या\n4. दैनिक खर्च।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Store Settings",
      hi: "स्टोर सेटिंग्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Edit Location Details",
      hi: "स्थान विवरण संपादित करें",
    },
    instruction: {
      en: "Edit Location Details here and click on ' Save '.",
      hi: "यहाँ स्थान विवरण संपादित करें और 'Save' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
];
