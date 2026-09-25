import step1 from "../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../assets/Electronics/electronicsstock/EStockstep1.png"
import step3 from "../../assets/Electronics/electronicsstock/EStockstep2.png"
import step4 from "../../assets/Electronics/electronicsstock/EStockstep3.png"
import step5 from "../../assets/Electronics/electronicsstock/EStockstep4.png"
import type { Step } from "../../types/step";

export const electronicsstock: Step[] = [
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
      en: "Click on the Billing page ",
      hi: "बिलिंग पेज पर क्लिक करें",
    },
    instruction: {
      en: "Click on the ' Billing ' page in the bottom of the Home page",
      hi: "होम पेज के नीचे 'Billing' पेज पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Billing",
      hi: "बिलिंग",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Swipe Right to go to the Stocks Page",
      hi: "स्टॉक्स पेज पर जाने के लिए दाएं स्वाइप करें",
    },
    instruction: {
      en: "Swipe Right to go to the ' Stocks ' Page.",
      hi: "'Stocks' पेज पर जाने के लिए दाएं स्वाइप करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Stocks",
      hi: "स्टॉक",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Use the Search Bar or Scanner to add the Existing Products Or click on the plus icon to Add a New Product",
      hi: "मौजूदा उत्पाद जोड़ने के लिए सर्च बार या स्कैनर का उपयोग करें या नया उत्पाद जोड़ने के लिए प्लस आइकन पर क्लिक करें",
    },
    instruction: {
      en: "1. Use the ' Search ' Bar or ' Scanner ' to add the Existing Products.\n2. Or click on the ' + ' icon to Add a New Product.",
      hi: "1. मौजूदा उत्पाद जोड़ने के लिए 'Search' बार या 'Scanner' का उपयोग करें।\n2. या नया उत्पाद जोड़ने के लिए ' + ' आइकन पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "New Product",
      hi: "नया उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Required details of the Product and click on save product",
      hi: "उत्पाद का आवश्यक विवरण भरें और सेव प्रोडक्ट पर क्लिक करें",
    },
    instruction: {
      en: "1. Fill in the Required details of the Product\n2. Enter the Barcode or use the ' Scanner '.\n3. Click on Save Product.",
      hi: "1. उत्पाद का आवश्यक विवरण भरें\n2. बारकोड दर्ज करें या 'Scanner' का उपयोग करें।\n3. Save Product पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Product Saved",
      hi: "उत्पाद सहेजा गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go back and search for the Product using the ' Search ' Bar",
      hi: "वापस जाएं और 'Search' बार का उपयोग करके उत्पाद खोजें",
    },
    instruction: {
      en: "Go back and search for the Product using the ' Search ' Bar.",
      hi: "वापस जाएं और 'Search' बार का उपयोग करके उत्पाद खोजें।",
    },
    durationAfterSpeech: 3000,
  },
];
