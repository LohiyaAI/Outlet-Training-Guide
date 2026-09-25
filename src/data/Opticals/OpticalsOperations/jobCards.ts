import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/Jobcards/OJCstep2.png";
import step3 from "../../../assets/Opticals/Jobcards/OJCstep3.png";
import step4 from "../../../assets/Opticals/Jobcards/OJCstep4.png";
import step5 from "../../../assets/Opticals/Jobcards/OJCstep5.png";
import type { Step } from "../../../types/step";

export const jobcards: Step[] = [
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
      en: "1. Go to 'Profile' from Top Navigation Bar.",
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
      en: "Click on 'Job Cards'",
      hi: "जॉब कार्ड्स पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Job Cards'.",
      hi: "'Job Cards' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Job Cards",
      hi: "जॉब कार्ड्स",
    },
    description: {
      en: "Job Cards for Tracking your Alterations and Repairs.",
      hi: "आपके बदलाव और मरम्मत को ट्रैक करने के लिए जॉब कार्ड्स।",
    },
    narration: {
      en: "Click on New Job Card.",
      hi: "न्यू जॉब कार्ड पर क्लिक करें।",
    },
    instruction: {
      en: "Click on 'New Job Card'.",
      hi: "'New Job Card' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "New Job Card",
      hi: "नया जॉब कार्ड",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Product and  Set a Remainder for Delivery of the Product ",
      hi: "उत्पाद का विवरण भरें और उत्पाद की डिलीवरी के लिए रिमाइंडर सेट करें",
    },
    instruction: {
      en: "1. Fill in the Details of the Product\n2. Set a Remainder for Delivery of the Product.",
      hi: "1. उत्पाद का विवरण भरें\n2. उत्पाद की डिलीवरी के लिए रिमाइंडर सेट करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Job Added",
      hi: "जॉब जुड़ गया",
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
      en: "1. New Job is Added\n2. Here you can Update the State of the job 'Received' or 'In Progress' or 'Cancelled'.",
      hi: "1. नया जॉब जुड़ गया है\n2. यहाँ आप जॉब की स्थिति को 'Received' या 'In Progress' या 'Cancelled' के रूप में अपडेट कर सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
