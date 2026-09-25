import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/Opticalspurchase/OPstep1.png";
import step3 from "../../../assets/Opticals/Opticalspurchase/OPstep2.png";
import step4 from "../../../assets/Opticals/Opticalspurchase/OPstep3.png";
import step5 from "../../../assets/Opticals/Opticalspurchase/OPstep4.png";
import step6 from "../../../assets/Opticals/Opticalspurchase/OPstep5.png";
import step7 from "../../../assets/Opticals/Opticalspurchase/OPstep6.png";
import type { Step } from "../../../types/step";

export const opticalpurchases: Step[] = [
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
      en: "Go to Billing from the Bottom Navigation Bar",
      hi: "नीचे के नेविगेशन बार से बिलिंग पर जाएं",
    },
    instruction: {
      en: "Go to ' Billing ' from the Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार से 'Billing' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Purchases",
      hi: "खरीद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to the 'Purchases' Page",
      hi: "परचेजेस पेज पर जाएं",
    },
    instruction: {
      en: "1. Go to the 'Purchases' Page\n2. Click on 'Add' to Add a Supplier.",
      hi: "1. 'Purchases' पेज पर जाएं\n2. सप्लायर जोड़ने के लिए 'Add' पर क्लिक करें।",
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
      en: "Add Supplier Name and Contact Select the Category of the Products you want to Order",
      hi: "सप्लायर का नाम और संपर्क जोड़ें, उन उत्पादों की श्रेणी चुनें जिन्हें आप ऑर्डर करना चाहते हैं",
    },
    instruction: {
      en: "1. Add Supplier Name and Contact\n2. Select the Category of the Products you want to Order.",
      hi: "1. सप्लायर का नाम और संपर्क जोड़ें\n2. उन उत्पादों की श्रेणी चुनें जिन्हें आप ऑर्डर करना चाहते हैं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Supplier",
      hi: "सप्लायर",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click Add in the Bottom to Record a Purchase",
      hi: "खरीद दर्ज करने के लिए नीचे ऐड पर क्लिक करें",
    },
    instruction: {
      en: "Supplier has been Added\n1. Click Add in the Bottom to Record a Purchase.",
      hi: "सप्लायर जोड़ दिया गया है\n1. खरीद दर्ज करने के लिए नीचे Add पर क्लिक करें।",
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
      en: "Enter the Details",
      hi: "विवरण दर्ज करें",
    },
    instruction: {
      en: "Enter Details\n1. Distributor Name\n2. Payment Due Date\n3. Items\n4. Click on 'Save Order'.",
      hi: "विवरण दर्ज करें\n1. वितरक का नाम\n2. भुगतान की नियत तारीख\n3. सामान\n4. 'Save Order' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Purchase recorded",
      hi: "खरीद दर्ज हुई",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Purchase has been Recorded Record 'Mark as Received' if the Product is received",
      hi: "खरीद दर्ज कर ली गई है, यदि उत्पाद प्राप्त हो गया है तो 'Mark as Received' दर्ज करें",
    },
    instruction: {
      en: "Purchase has been Recorded\nRecord 'Mark as Received' if the Product is received.",
      hi: "खरीद दर्ज कर ली गई है\nयदि उत्पाद प्राप्त हो गया है तो 'Mark as Received' दर्ज करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Khata",
      hi: "खाता",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "You can see the Transactions and Due Dates of the Supplier in Khata",
      hi: "आप खाता में सप्लायर के लेनदेन और देय तिथियां देख सकते हैं",
    },
    instruction: {
      en: "1. Go to Khata\n2. Go to Supplier Udhaar\n3. You can see the Transactions and Due Dates of the Supplier here.",
      hi: "1. खाता पर जाएं\n2. सप्लायर उधार पर जाएं\n3. आप यहाँ सप्लायर के लेनदेन और नियत तारीखें देख सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
