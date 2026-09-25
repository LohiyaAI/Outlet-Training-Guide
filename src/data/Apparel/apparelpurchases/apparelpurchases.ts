import step1 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step2 from "../../../assets/Apparel/apparelPR/ApprPRstep1.png"
import step3 from "../../../assets/Apparel/apparelPR/ApprPRstep2.png"
import step4 from "../../../assets/Apparel/apparelPR/ApprPRstep3.png"
import step5 from "../../../assets/Apparel/apparelPR/ApprPRstep4.png"
import step6 from "../../../assets/Apparel/apparelPR/ApprPRstep5.png"
import step7 from "../../../assets/Apparel/apparelPR/ApprPRstep6.png"
import step8 from "../../../assets/Apparel/apparelPR/ApprPRstep7.png"
import step9 from "../../../assets/Apparel/apparelPR/ApprPRstep8.png"
import step10 from "../../../assets/Apparel/apparelPR/ApprPRstep9.png"
import type { Step } from "../../../types/step";

export const apparelpurchases: Step[] = [
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
      en: "Go to the 'Billing' Page ",
      hi: "बिलिंग पेज पर जाएं",
    },
    instruction: {
      en: "Go to the 'Billing' Page from the Bottom Navigation bar. ",
      hi: "नीचे के नेविगेशन बार से 'Billing' पेज पर जाएं।",
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
      en: "Go to 'Purchase' page and Click on  Add to add a new Supplier",
      hi: "परचेज पेज पर जाएं और नया सप्लायर जोड़ने के लिए ऐड पर क्लिक करें",
    },
    instruction: {
      en: "1. Go to 'Purchase' on the 'Billing' page.\n2. Click on '+ Add' to add a new Supplier ",
      hi: "1. 'Billing' पेज पर 'Purchase' पर जाएं।\n2. नया सप्लायर जोड़ने के लिए '+ Add' पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "New Supplier",
      hi: "नया सप्लायर",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Supplier and Click on Save Supplier ",
      hi: "सप्लायर का विवरण भरें और सेव सप्लायर पर क्लिक करें",
    },
    instruction: {
      en: "1. Fill in the Details of the Supplier.\n2. Click on Save Supplier ",
      hi: "1. सप्लायर का विवरण भरें।\n2. Save Supplier पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Add Purchase",
      hi: "खरीद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add beside Recent Purchases to add a Purchase. ",
      hi: "खरीद जोड़ने के लिए रीसेंट परचेजेस के बगल में ऐड पर क्लिक करें।",
    },
    instruction: {
      en: "Click on '+ Add' beside Recent Purchases to add a Purchase. ",
      hi: "खरीद जोड़ने के लिए Recent Purchases के बगल में '+ Add' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "New Purchase Order",
      hi: "नया खरीद ऑर्डर",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Distributor and Click on '+ Add Item' ",
      hi: "वितरक का विवरण भरें और '+ Add Item' पर क्लिक करें",
    },
    instruction: {
      en: "1. Fill in the Details of the Distributor\n2. Click on '+ Add Item'. ",
      hi: "1. वितरक का विवरण भरें\n2. '+ Add Item' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Add Item",
      hi: "सामान जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Search for the Required Product in the 'Search' Bar ",
      hi: "सर्च बार में आवश्यक उत्पाद खोजें",
    },
    instruction: {
      en: "Search for the Required Product in the 'Search' Bar. ",
      hi: "'Search' बार में आवश्यक उत्पाद खोजें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Add Quantity",
      hi: "मात्रा जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Add the Quantity of the Product ",
      hi: "उत्पाद की मात्रा जोड़ें",
    },
    instruction: {
      en: "Add the Quantity of the Product. ",
      hi: "उत्पाद की मात्रा जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Save Order",
      hi: "ऑर्डर सहेजें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Save Order to Save the order ",
      hi: "ऑर्डर सहेजने के लिए सेव ऑर्डर पर क्लिक करें",
    },
    instruction: {
      en: "Click on ' Save Order ' to Save the order. ",
      hi: "ऑर्डर सहेजने के लिए 'Save Order' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "Purchase Added",
      hi: "खरीद जुड़ गई",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Purchase Added for the Supplier ",
      hi: "सप्लायर के लिए खरीद जुड़ गई।",
    },
    instruction: {
      en: "Purchase Added for the Supplier. ",
      hi: "सप्लायर के लिए खरीद जुड़ गई।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Supplier Udhaar",
      hi: "सप्लायर उधार",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Got to Supplir Udhaar in Khata to see the Amount to be paid",
      hi: "भुगतान की जाने वाली राशि देखने के लिए खाता में सप्लायर उधार पर जाएं",
    },
    instruction: {
      en: "Got to ' Supplir Udhaar ' in Khata to see the Amount to be paid. ",
      hi: "भुगतान की जाने वाली राशि देखने के लिए Khata में 'Supplir Udhaar' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
];
