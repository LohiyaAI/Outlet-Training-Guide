import step0 from "../../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step1 from "../../../assets/Stock/stockstep8.png";
import step2 from "../../../assets/Purchases/purchasestep1.png";
import step3 from "../../../assets/Purchases/purchasestep2.png";
import step4 from "../../../assets/Purchases/purchasestep3.png";
import step5 from "../../../assets/Purchases/purchasestep4.png";
import step6 from "../../../assets/Purchases/purchasestep5.png";
import type { Step } from "../../../types/step";

export const electronicspurchase: Step[] = [
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
      en: "Go to ' Billing ' screen from the Home page",
      hi: "होम पेज से 'Billing' स्क्रीन पर जाएं",
    },
    instruction: {
      en: "Go to ' Billing ' screen from Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार से 'Billing' स्क्रीन पर जाएं।",
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
      en: "Go to the Purchase screen in Billing by swiping to Right",
      hi: "दाएं स्वाइप करके बिलिंग में परचेज स्क्रीन पर जाएं",
    },
    instruction: {
      en: "Go to the Purchase screen in Billing by swiping to the Right.",
      hi: "दाएं स्वाइप करके Billing में Purchase स्क्रीन पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Purchase",
      hi: "खरीद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add to add a New Supplier.",
      hi: "नया सप्लायर जोड़ने के लिए ऐड पर क्लिक करें।",
    },
    instruction: {
      en: "1. Here you can see the List of the Suppliers.\n2. Click on ' + Add ' to add a New Supplier.",
      hi: "1. यहाँ आप सप्लायर की सूची देख सकते हैं।\n2. नया सप्लायर जोड़ने के लिए '+ Add' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Add Supplier",
      hi: "सप्लायर जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on the Add button to add a New Supplier and enter the Details.",
      hi: "नया सप्लायर जोड़ने और विवरण दर्ज करने के लिए ऐड बटन पर क्लिक करें।",
    },
    instruction: {
      en: "1. Enter the Details of the Supplier.\n2. Click on ' Save Supplier '",
      hi: "1. सप्लायर का विवरण दर्ज करें।\n2. 'Save Supplier' पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Add Purchases",
      hi: "खरीद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add to to record a New Purchase order",
      hi: "नया खरीद ऑर्डर दर्ज करने के लिए ऐड पर क्लिक करें",
    },
    instruction: {
      en: "Click on Add to to record a New Purchase order .",
      hi: "नया खरीद ऑर्डर दर्ज करने के लिए Add पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Product",
      hi: "उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Product and it's Quantity to Add the Product",
      hi: "उत्पाद जोड़ने के लिए उत्पाद और उसकी मात्रा चुनें",
    },
    instruction: {
      en: "Select the Product and it's Quantity to Add the Purchase.",
      hi: "खरीद जोड़ने के लिए उत्पाद और उसकी मात्रा चुनें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Scan Invoice",
      hi: "चालान स्कैन करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "You can also Scan the Invoice to Add a New Purchase using the 'Scan Invoice' option",
      hi: "आप 'Scan Invoice' विकल्प का उपयोग करके नई खरीद जोड़ने के लिए चालान भी स्कैन कर सकते हैं",
    },
    instruction: {
      en: "You can also Scan the Invoice to Add a New Purchase using the 'Scan Invoice' option.",
      hi: "आप 'Scan Invoice' विकल्प का उपयोग करके नई खरीद जोड़ने के लिए चालान भी स्कैन कर सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Upload Invoice",
      hi: "चालान अपलोड करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Upload the Invoice using these options",
      hi: "इन विकल्पों का उपयोग करके चालान अपलोड करें।",
    },
    instruction: {
      en: "Upload the Invoice using these options.",
      hi: "इन विकल्पों का उपयोग करके चालान अपलोड करें।",
    },
    durationAfterSpeech: 3000,
  },
];
