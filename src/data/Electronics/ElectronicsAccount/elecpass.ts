import step1 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../../assets/mybasketsteps/MBstep2.png";
import step4 from "../../../assets/pass2.png";
import step3 from "../../../assets/pass.png";
import type { Step } from "../../../types/step";

export const elecpass: Step[] = [
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
      en: "Go to Profile from the top Right Corner",
      hi: "ऊपर दाएं कोने से प्रोफ़ाइल पर जाएं",
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
      en: "Password & Security",
      hi: "पासवर्ड और सुरक्षा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Password & Security",
      hi: "पासवर्ड और सुरक्षा पर क्लिक करें",
    },
    instruction: {
      en: "Click on ' Password & Security '.",
      hi: "'Password & Security' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Password & Security",
      hi: "पासवर्ड और सुरक्षा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Customer Growth to generate a QR for you Customer to share",
      hi: "अपने ग्राहक के लिए साझा करने हेतु क्यूआर कोड जनरेट करने के लिए कस्टमर ग्रोथ पर क्लिक करें",
    },
    instruction: {
      en: "Create Password\n1. Enter New Password\n2. Confirm Password\n3. Click on ' Create Password '.",
      hi: "पासवर्ड बनाएं\n1. नया पासवर्ड दर्ज करें\n2. पासवर्ड की पुष्टि करें\n3. 'Create Password' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Change Password",
      hi: "पासवर्ड बदलें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Customer Growth to generate a QR for you Customer to share",
      hi: "अपने ग्राहक के लिए साझा करने हेतु क्यूआर कोड जनरेट करने के लिए कस्टमर ग्रोथ पर क्लिक करें",
    },
    instruction: {
      en: "Change Password\n1. Enter Current Password\n2. Enter New Password\n3. Confirm Password and 'Update Password'.",
      hi: "पासवर्ड बदलें\n1. वर्तमान पासवर्ड दर्ज करें\n2. नया पासवर्ड दर्ज करें\n3. पासवर्ड की पुष्टि करें और 'Update Password' करें।",
    },
    durationAfterSpeech: 3000,
  },
];
