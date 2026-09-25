import step1 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../../assets/Opticals/Jobcards/OJCstep2.png";
import step3 from "../../../assets/Opticals/Warranty/OWSstep1.png";
import step4 from "../../../assets/Opticals/Warranty/OWSstep2.png";
import step5 from "../../../assets/Opticals/Warranty/OWSstep3.png";
import step6 from "../../../assets/Opticals/Warranty/OWSstep4.png";
import step7 from "../../../assets/Opticals/Warranty/OWSstep5.png";
import step8 from "../../../assets/Opticals/Warranty/OWSstep6.png";
import type { Step } from "../../../types/step";

export const elecwarranty: Step[] = [
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
      en: "Go to Profile from Top Navigation Bar.",
      hi: "शीर्ष नेविगेशन बार से प्रोफ़ाइल पर जाएं।",
    },
    instruction: {
      en: "Go to 'Profile' from Top Navigation Bar.",
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
      en: "Click on Warranty & Serials.",
      hi: "वारंटी और सीरियल्स पर क्लिक करें।",
    },
    instruction: {
      en: "1. Click on 'Warranty & Serials'.",
      hi: "1. 'Warranty & Serials' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Warranty & Serials",
      hi: "वारंटी और सीरियल्स",
    },
    description: {
      en: "Warranty & Serials are to record the Product and it's Warranty",
      hi: "वारंटी और सीरियल्स उत्पाद और उसकी वारंटी रिकॉर्ड करने के लिए हैं",
    },
    narration: {
      en: "Swipe Right to Serials and Click on New Serial.",
      hi: "सीरियल्स पर दाएं स्वाइप करें और न्यू सीरियल पर क्लिक करें।",
    },
    instruction: {
      en: "1. Swipe Right to 'Serials'\n2. Click on 'New Serial'.",
      hi: "1. 'Serials' पर दाएं स्वाइप करें\n2. 'New Serial' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Serials",
      hi: "सीरियल्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Product, Product Name and IMEI Number.",
      hi: "उत्पाद का विवरण, उत्पाद का नाम और आईएमईआई नंबर भरें।",
    },
    instruction: {
      en: "Fill in the Details of the Product\n1. Product Name\n2. IMEI Number.",
      hi: "उत्पाद का विवरण भरें\n1. उत्पाद का नाम\n2. आईएमईआई नंबर।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Seials",
      hi: "सीरियल्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Product Added with IMEI Number.",
      hi: "आईएमईआई नंबर के साथ उत्पाद जोड़ा गया।",
    },
    instruction: {
      en: "Product Added with IMEI Number.",
      hi: "आईएमईआई नंबर के साथ उत्पाद जोड़ा गया।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Claims",
      hi: "दावे",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Swipe Left to Claims Tab and Click on New Claim.",
      hi: "क्लेम्स टैब पर बाएं स्वाइप करें और न्यू क्लेम पर क्लिक करें।",
    },
    instruction: {
      en: "1. Swipe Left to 'Claims' Tab\n2. Click on 'New Claim'.",
      hi: "1. 'Claims' टैब पर बाएं स्वाइप करें\n2. 'New Claim' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "New Claim",
      hi: "नया दावा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "1. Enter Product IMEI Number and Issue of the Product\n2. Click on 'Create Claim'.",
      hi: "1. उत्पाद का आईएमईआई नंबर और उत्पाद की समस्या दर्ज करें\n2. 'Create Claim' पर क्लिक करें।",
    },
    instruction: {
      en: "Enter Product IMEI Number and Issue of the Product.",
      hi: "उत्पाद का आईएमईआई नंबर और उत्पाद की समस्या दर्ज करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Claims",
      hi: "दावे",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Claim created Update the State of the Claim open or resolved or rejected.",
      hi: "दावा बनाया गया, दावे की स्थिति ओपन, रिज़ॉल्व्ड या रिजेक्टेड के रूप में अपडेट करें।",
    },
    instruction: {
      en: "1. Claim created\n2. Update the State of the Claim 'open' or 'resolved' or 'rejected'.",
      hi: "1. दावा बनाया गया\n2. दावे की स्थिति को 'open' या 'resolved' या 'rejected' के रूप में अपडेट करें।",
    },
    durationAfterSpeech: 3000,
  },
];
