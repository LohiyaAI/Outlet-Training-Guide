import step0 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step1 from "../../../assets/profile.png";
import step2 from "../../../assets/estimateSteps/ESstep1.png";
import step3 from "../../../assets/estimateSteps/ESstep2.png";
import step4 from "../../../assets/estimateSteps/ESstep3.png";
import step5 from "../../../assets/estimateSteps/ESstep4.png";
import type { Step } from "../../../types/step";

export const opticalsreturns: Step[] = [
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
      en: "Go to ' Profile ' from the Top Navigation Bar",
      hi: "शीर्ष नेविगेशन बार से 'Profile' पर जाएं",
    },
    instruction: {
      en: "Go to ' Profile ' from the Top Navigation Bar.",
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
      en: "Go to Profile and Click Returns",
      hi: "प्रोफ़ाइल पर जाएं और रिटर्न्स पर क्लिक करें",
    },
    instruction: {
      en: "Go to Profile and Click 'Returns'.",
      hi: "Profile पर जाएं और 'Returns' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Returns",
      hi: "वापसी",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to the Estimates Page and Click on New Estimate",
      hi: "एस्टिमेट्स पेज पर जाएं और न्यू एस्टिमेट पर क्लिक करें",
    },
    instruction: {
      en: "1. Go to the Return Page\n2. Click on 'Log return'.",
      hi: "1. Return पेज पर जाएं\n2. 'Log return' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Order Return",
      hi: "ऑर्डर वापसी",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the order Number and Select the Order to be Returned",
      hi: "ऑर्डर नंबर दर्ज करें और वापस किए जाने वाले ऑर्डर का चयन करें",
    },
    instruction: {
      en: "Enter the order Number and Select the Order to be Returned.",
      hi: "ऑर्डर नंबर दर्ज करें और वापस किए जाने वाले ऑर्डर का चयन करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Order Quantity",
      hi: "ऑर्डर मात्रा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Choose the Quantity to be Returned and Record Return.",
      hi: "वापस की जाने वाली मात्रा चुनें और रिटर्न दर्ज करें।",
    },
    instruction: {
      en: "1. Choose the Quantity to be Returned\n2. Click on ' Record Return '.",
      hi: "1. वापस की जाने वाली मात्रा चुनें\n2. 'Record Return' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Return Logged",
      hi: "वापसी दर्ज हुई",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Return has been recorded and Product is back to Shelf",
      hi: "वापसी दर्ज कर ली गई है और उत्पाद शेल्फ पर वापस आ गया है",
    },
    instruction: {
      en: "Return has been recorded and Product is back to Shelf .",
      hi: "वापसी दर्ज कर ली गई है और उत्पाद शेल्फ पर वापस आ गया है।",
    },
    durationAfterSpeech: 3000,
  },
];
