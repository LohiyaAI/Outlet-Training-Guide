import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/Opticalsettings/Osetstep1.png";
import step3 from "../../../assets/Opticals/Opticalsettings/Osetstep2.png";
import step4 from "../../../assets/Opticals/Opticalsettings/Osetstep3.png";
import type { Step } from "../../../types/step";

export const opticalstore: Step[] = [
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
      en: "Go to Profile from the Top Right Corner.",
      hi: "ऊपर दाएं कोने से प्रोफ़ाइल पर जाएं।",
    },
    instruction: {
      en: "1. Go to ' Profile ' from Top Navigation Bar.",
      hi: "1. शीर्ष नेविगेशन बार से 'Profile' पर जाएं।",
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
      en: "Click on Store Settings.",
      hi: "स्टोर सेटिंग्स पर क्लिक करें।",
    },
    instruction: {
      en: "1. On the Profile Page\n2. Click on 'Store Settings'.",
      hi: "1. प्रोफ़ाइल पेज पर\n2. 'Store Settings' पर क्लिक करें।",
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
      en: "Fill in the Basic Information.",
      hi: "बुनियादी जानकारी भरें।",
    },
    instruction: {
      en: "Fill in the Basic Information\n1. Store Name\n2. Store Type\n3. Daily Footfall\n4. Monthly Budget.",
      hi: "बुनियादी जानकारी भरें\n1. स्टोर का नाम\n2. स्टोर का प्रकार\n3. दैनिक ग्राहक संख्या\n4. मासिक बजट।",
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
      en: "Go to Profile and Click on Staff.",
      hi: "प्रोफ़ाइल पर जाएं और स्टाफ पर क्लिक करें।",
    },
    instruction: {
      en: "Scroll Down to fill\n1. Location Details of the Store.\n2. Click on 'Save' to save the Changes.",
      hi: "भरने के लिए नीचे स्क्रॉल करें\n1. स्टोर के स्थान का विवरण।\n2. बदलाव सहेजने के लिए 'Save' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
];
