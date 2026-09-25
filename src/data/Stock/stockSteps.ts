import step0 from "../../assets/CustomerSales/CSstep1.png";
import step1 from "../../assets/Stock/stockstep8.png";
import step3 from "../../assets/Stock/stockstep2.png";
import step4 from "../../assets/Stock/stockstep3.png";
import step5 from "../../assets/Stock/stockstep4.png";
import step6 from "../../assets/Stock/stockstep5.png";
import step7 from "../../assets/Stock/stockstep6.png";
import step8 from "../../assets/Stock/stockstep7.png";
import step9 from "../../assets/Stock/stockstep9.png";
import step10 from "../../assets/Stock/stockstep10.png";
import type { Step } from "../../types/step";

export const stockSteps: Step[] = [
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
      en: "Go to Billing tab from the bottom navigation bar",
      hi: "नीचे के नेविगेशन बार से बिलिंग टैब पर जाएं",
    },
    instruction: {
      en: "Go to the ' Billing ' tab from Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार से 'Billing' टैब पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step1,
    title: {
      en: "Billing",
      hi: "बिलिंग",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to the Stocks screen on the Billing tab",
      hi: "बिलिंग टैब पर स्टॉक्स स्क्रीन पर जाएं",
    },
    instruction: {
      en: "Go to the ' Stocks ' page on the ' Billing ' tab.",
      hi: "'Billing' टैब पर 'Stocks' पेज पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Product Search",
      hi: "उत्पाद खोज",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "search for the Product in the Search bar",
      hi: "सर्च बार में उत्पाद खोजें",
    },
    instruction: {
      en: "1. Search for the Product in the Search bar.\n2. Click on the Product to go to Edit Product",
      hi: "1. सर्च बार में उत्पाद खोजें।\n2. उत्पाद संपादित करने के लिए उत्पाद पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Edit Product",
      hi: "उत्पाद संपादित करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Edit the stock Quantity and Price and Click on Save Changes",
      hi: "स्टॉक मात्रा और मूल्य संपादित करें और सेव चेंजेज पर क्लिक करें",
    },
    instruction: {
      en: "1. Edit the stock Quantity and Price\n2. Click on ' Save Changes '.",
      hi: "1. स्टॉक मात्रा और मूल्य संपादित करें\n2. 'Save Changes' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Add Product",
      hi: "उत्पाद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "If the Product is Not Found. Add it from the catalog Manually or using Barcode Scanner.",
      hi: "यदि उत्पाद नहीं मिलता है, तो इसे कैटलॉग से मैन्युअल रूप से या बारकोड स्कैनर का उपयोग करके जोड़ें।",
    },
    instruction: {
      en: "If the Product is Not Found. Add it from the catalog Manually or using Barcode Scanner.",
      hi: "यदि उत्पाद नहीं मिलता है, तो इसे कैटलॉग से मैन्युअल रूप से या बारकोड स्कैनर का उपयोग करके जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Add Product using BarCode ",
      hi: "बारकोड से उत्पाद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on the Scanner in Add Product and Scan the BarCode.",
      hi: "ऐड प्रोडक्ट में स्कैनर पर क्लिक करें और बारकोड स्कैन करें।",
    },
    instruction: {
      en: "Click on the Scanner in Add Product and Scan the BarCode.",
      hi: "Add Product में स्कैनर पर क्लिक करें और बारकोड स्कैन करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Select Product",
      hi: "उत्पाद चुनें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Product for Example: WaterBottles",
      hi: "उत्पाद चुनें, उदाहरण के लिए: पानी की बोतलें",
    },
    instruction: {
      en: "Select the Product\nExample: WaterBottles.",
      hi: "उत्पाद चुनें\nउदाहरण: पानी की बोतलें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Save Product",
      hi: "उत्पाद सहेजें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the Selling Price and Quantity of the Product",
      hi: "उत्पाद का विक्रय मूल्य और मात्रा दर्ज करें",
    },
    instruction: {
      en: "1. Enter the Selling Price and Quantity of the Product\n2. Click on ' Save Product '.",
      hi: "1. उत्पाद का विक्रय मूल्य और मात्रा दर्ज करें\n2. 'Save Product' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Add Product Manually",
      hi: "मैन्युअल रूप से उत्पाद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add Manually",
      hi: "ऐड मैन्युअली पर क्लिक करें",
    },
    instruction: {
      en: "1. Click on ' Add Manually '.",
      hi: "1. 'Add Manually' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "New Product",
      hi: "नया उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the Product Details and Click on ' Save Product '",
      hi: "उत्पाद विवरण दर्ज करें और 'Save Product' पर क्लिक करें",
    },
    instruction: {
      en: "1. Enter the Product Details\n2. Click on ' Save Product '.",
      hi: "1. उत्पाद विवरण दर्ज करें\n2. 'Save Product' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Product Added",
      hi: "उत्पाद जुड़ गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Product Added to Stock.",
      hi: "उत्पाद स्टॉक में जुड़ गया।",
    },
    instruction: {
      en: "Product Added to Stock.",
      hi: "उत्पाद स्टॉक में जुड़ गया।",
    },
    durationAfterSpeech: 3000,
  },
];
