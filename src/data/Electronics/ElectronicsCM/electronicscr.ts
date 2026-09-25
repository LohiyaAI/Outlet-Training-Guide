import step0 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step1 from "../../../assets/CustomerGrowth/CGstep1.png";
import step2 from "../../../assets/CustomerRelations/CRstep1.png";
import step3 from "../../../assets/CustomerRelations/CRstep2.png";
import step5 from "../../../assets/CustomerRelations/CRstep4.png";
import step6 from "../../../assets/CustomerRelations/CRstep5.png";
import type { Step } from "../../../types/step";

export const electronicscr: Step[] = [
  {
    image: step0,
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
      en: "Go to ' Profile ' from the Top Navigation Bar'.",
      hi: "शीर्ष नेविगेशन बार से 'Profile' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step1,
    title: {
      en: "Profile",
      hi: "प्रोफ़ाइल",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Customer Relations",
      hi: "कस्टमर रिलेशंस पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Customer Relations'.",
      hi: "'Customer Relations' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Add New Customer",
      hi: "नया ग्राहक जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add New Customer",
      hi: "ऐड न्यू कस्टमर पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Add New Customer'.",
      hi: "'Add New Customer' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Customer Details",
      hi: "ग्राहक विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Customer",
      hi: "ग्राहक का विवरण भरें",
    },
    instruction: {
      en: "Fill in the Details of the Customer and click on 'Save Customer'.",
      hi: "ग्राहक का विवरण भरें और 'Save Customer' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Customer Details",
      hi: "ग्राहक विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Here you can Send a WhatsApp Re-engagement message",
      hi: "यहाँ आप व्हाट्सएप पुनः जुड़ाव संदेश भेज सकते हैं",
    },
    instruction: {
      en: "Here you can\n1. Edit Customer Details\n2. Send a WhatsApp Re-engagement message.",
      hi: "यहाँ आप कर सकते हैं\n1. ग्राहक विवरण संपादित करें\n2. व्हाट्सएप पुनः जुड़ाव संदेश भेजें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "WhatsApp",
      hi: "व्हाट्सएप",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "You will be redirected to Whatsapp to send the message",
      hi: "संदेश भेजने के लिए आपको व्हाट्सएप पर निर्देशित किया जाएगा",
    },
    instruction: {
      en: "You will be redirected to Whatsapp to send the message.",
      hi: "संदेश भेजने के लिए आपको व्हाट्सएप पर निर्देशित किया जाएगा।",
    },
    durationAfterSpeech: 3000,
  },
];
