import step1 from "../../assets/CustomerSales/CSstep1.png";
import step2 from "../../assets/mybasketsteps/MBstep2.png";
import step3 from "../../assets/mybasketsteps/MBstep4.png";
import step4 from "../../assets/mybasketsteps/MBstep3.png";
import step5 from "../../assets/mybasketsteps/MBstep4.png";
import step6 from "../../assets/mybasketsteps/MBstep5.png";
import step7 from "../../assets/mybasketsteps/MBstep4.png";
import step8 from "../../assets/mybasketsteps/MBstep6.png";
import step9 from "../../assets/mybasketsteps/MBstep7.png";
import step10 from "../../assets/mybasketsteps/MBstep8.png";
import step11 from "../../assets/mybasketsteps/MBstep9.png";
import step12 from "../../assets/mybasketsteps/MBstep10.png";
import step13 from "../../assets/mybasketsteps/MBstep11.png";
import type { Step } from "../../types/step";

export const myBaskets: Step[] = [
  {
    image: step1,
    title: {
      en: "Home Page",
      hi: "होम पेज",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Profile from the Top Navigation Bar.",
      hi: "शीर्ष नेविगेशन बार से प्रोफ़ाइल पर जाएं।",
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
      en: "Profile",
      hi: "प्रोफ़ाइल",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on My Baskets",
      hi: "माई बास्केट्स पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'My Baskets'.",
      hi: "'My Baskets' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "My Baskets",
      hi: "माई बास्केट्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on the first icon on Top Right for Basket Tiers",
      hi: "बास्केट टियर्स के लिए ऊपर दाएं कोने पर पहले आइकन पर क्लिक करें",
    },
    instruction: {
      en: "Click on the first icon on Top Right for 'Basket Tiers''.",
      hi: "'Basket Tiers' के लिए ऊपर दाएं कोने पर पहले आइकन पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Basket Tiers",
      hi: "बास्केट टियर्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Purchase Range for all 4 types of Baskets",
      hi: "सभी 4 प्रकार की बास्केट के लिए खरीद सीमा चुनें",
    },
    instruction: {
      en: "Select the Purchase Range for all 4 types of Baskets\n1. Bronze\n2. Silver\n3. Gold\n4. Platinum.",
      hi: "सभी 4 प्रकार की बास्केट के लिए खरीद सीमा चुनें\n1. ब्रॉन्ज\n2. सिल्वर\n3. गोल्ड\n4. प्लेटिनम।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Add New Basket",
      hi: "नई बास्केट जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on New Basket to Add a Basket",
      hi: "बास्केट जोड़ने के लिए न्यू बास्केट पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'New Basket' to Add a Basket.",
      hi: "बास्केट जोड़ने के लिए 'New Basket' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "New Basket",
      hi: "नई बास्केट",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Add the following. Basket Name. Validity. Products to Basket",
      hi: "निम्नलिखित जोड़ें। बास्केट का नाम। वैधता। बास्केट में उत्पाद",
    },
    instruction: {
      en: "Add the following\n1. Basket Name\n2. Validity\n3. Products to Basket.",
      hi: "निम्नलिखित जोड़ें\n1. बास्केट का नाम\n2. वैधता\n3. बास्केट में उत्पाद।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Basket Added",
      hi: "बास्केट जुड़ गई",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "New Basket is Added",
      hi: "नई बास्केट जुड़ गई है",
    },
    instruction: {
      en: "New Basket is Added\n1. Click on the 'Pen' icon to Edit Basket.",
      hi: "नई बास्केट जुड़ गई है\n1. बास्केट संपादित करने के लिए 'Pen' आइकन पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Edit Basket",
      hi: "बास्केट संपादित करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on the 'Pen' icon to Edit Basket",
      hi: "बास्केट संपादित करने के लिए 'Pen' आइकन पर क्लिक करें",
    },
    instruction: {
      en: "Here you can\n1. Change Name\n2. Change Validity\n3. Add/Remove Products.",
      hi: "यहाँ आप कर सकते हैं\n1. नाम बदलें\n2. वैधता बदलें\n3. उत्पाद जोड़ें/हटाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "Billing",
      hi: "बिलिंग",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Billing in Home and Add Basket to Cart",
      hi: "होम में बिलिंग पर जाएं और बास्केट को कार्ट में जोड़ें",
    },
    instruction: {
      en: "Go to Billing in Home and Add Basket to Cart.",
      hi: "Home में Billing पर जाएं और बास्केट को कार्ट में जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Cart",
      hi: "कार्ट",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Basket is Added to the Cart",
      hi: "बास्केट कार्ट में जुड़ गई है।",
    },
    instruction: {
      en: "Basket is Added to the Cart.",
      hi: "बास्केट कार्ट में जुड़ गई है।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step11,
    title: {
      en: "Place Order",
      hi: "ऑर्डर दें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: " Select the Mode of Payment and Click on Place Order",
      hi: "भुगतान का तरीका चुनें और प्लेस ऑर्डर पर क्लिक करें",
    },
    instruction: {
      en: "1. Select the Mode of Payment\n2. Click on ' Place Order '.",
      hi: "1. भुगतान का तरीका चुनें\n2. 'Place Order' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step12,
    title: {
      en: "Order Placed ",
      hi: "ऑर्डर दर्ज हुआ",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: " Click on ' View Order Details ' to see the Details of the Order",
      hi: "ऑर्डर का विवरण देखने के लिए 'View Order Details' पर क्लिक करें",
    },
    instruction: {
      en: "1. Click on ' Print Receipt ' to get the Receipt\n2. Click on ' View Order Details ' to see the Details of the Order.",
      hi: "1. रसीद प्राप्त करने के लिए 'Print Receipt' पर क्लिक करें\n2. ऑर्डर का विवरण देखने के लिए 'View Order Details' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step13,
    title: {
      en: "Order Details",
      hi: "ऑर्डर विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Here you can see thee Basket and the items in the Basket",
      hi: "यहाँ आप बास्केट और बास्केट में मौजूद सामान देख सकते हैं",
    },
    instruction: {
      en: "Here you can see thee Basket and the items in the Basket that were ordered.",
      hi: "यहाँ आप बास्केट और बास्केट में मौजूद वे सामान देख सकते हैं जिनका ऑर्डर दिया गया था।",
    },
    durationAfterSpeech: 3000,
  },
];
