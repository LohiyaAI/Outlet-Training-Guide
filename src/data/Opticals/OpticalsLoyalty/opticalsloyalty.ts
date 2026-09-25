import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/mybasketsteps/MBstep2.png";
import step3 from "../../../assets/loyaltyoffers/LOstep1.png";
import step4 from "../../../assets/loyaltyoffers/LOstep2.png";
import step5 from "../../../assets/loyaltyoffers/LOstep3.png";
import step6 from "../../../assets/loyaltyoffers/LOstep4.png";
import type { Step } from "../../../types/step";

export const opticalsloyalty: Step[] = [
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
      en: "Go to Profile",
      hi: "प्रोफ़ाइल पर जाएं",
    },
    instruction: {
      en: "Go to ' Profile ' from Top Navigation Bar.",
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
      en: "Click on Loyalty & Offers",
      hi: "लॉयल्टी और ऑफर्स पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Loyalty & Offers'.",
      hi: "'Loyalty & Offers' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Loyalty & Offers",
      hi: "लॉयल्टी और ऑफ़र",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Manage Discount Coupons'",
      hi: "मैनेज डिस्काउंट कूपन पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Manage Discount Coupons'.",
      hi: "'Manage Discount Coupons' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Discount Coupons",
      hi: "छूट कूपन",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on New Coupon",
      hi: "न्यू कूपन पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'New Coupon'.",
      hi: "'New Coupon' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "New Coupon",
      hi: "नया कूपन",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the above details",
      hi: "उपरोक्त विवरण दर्ज करें",
    },
    instruction: {
      en: "Enter\n 1. Coupon Name\n2. Offer %\n3. Minimum Order\n4. Maximum Discount\n5. Usage limit\n Click on 'Create Coupon'.",
      hi: "दर्ज करें\n1. कूपन का नाम\n2. ऑफ़र %\n3. न्यूनतम ऑर्डर\n4. अधिकतम छूट\n5. उपयोग सीमा\n'Create Coupon' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "New Coupon",
      hi: "नया कूपन",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "New Discount Coupon Created",
      hi: "नया डिस्काउंट कूपन बन गया।",
    },
    instruction: {
      en: "New Discount Coupon Created .",
      hi: "नया डिस्काउंट कूपन बन गया।",
    },
    durationAfterSpeech: 3000,
  },
];
