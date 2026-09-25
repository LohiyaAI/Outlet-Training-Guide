import step1 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step2 from "../../../assets/khata/kstep1.png";
import step3 from "../../../assets/khata/kstep2.png";
import step4 from "../../../assets/khata/kstep3.png";
import step5 from "../../../assets/khata/kstep4.png";
import step6 from "../../../assets/khata/kstep5.png";
import step7 from "../../../assets/khata/kstep6.png";
import type { Step } from "../../../types/step";

export const apparelkhata: Step[] = [
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
      en: "Go to Khata from the Bottom Navigation Bar",
      hi: "नीचे के नेविगेशन बार से खाता पर जाएं",
    },
    instruction: {
      en: "Go to Khata from the Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार से Khata पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Khata Cashflow",
      hi: "खाता कैशफ़्लो",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Here you can see Daily Sales, Monthly Sales and Udhaar",
      hi: "यहाँ आप दैनिक बिक्री, मासिक बिक्री और उधार देख सकते हैं",
    },
    instruction: {
      en: "Here you can see\n1. Daily Sales\n2. Monthly Sales\n3. Udhaar.",
      hi: "यहाँ आप देख सकते हैं\n1. दैनिक बिक्री\n2. मासिक बिक्री\n3. उधार।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Customer Udhaar",
      hi: "ग्राहक उधार",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on 'New Udhaar' to Add a Customer",
      hi: "ग्राहक जोड़ने के लिए 'New Udhaar' पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'New Udhaar' to Add a Customer.",
      hi: "ग्राहक जोड़ने के लिए 'New Udhaar' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Add New Udhaar",
      hi: "नया उधार जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the Details Customer Name, Phone Number, Amount, Payment Due Date.",
      hi: "विवरण दर्ज करें: ग्राहक का नाम, फ़ोन नंबर, राशि, भुगतान की नियत तारीख।",
    },
    instruction: {
      en: "Enter\n1. Customer Name\n2. Phone Number\n3. Amount\n4. Payment Due Date.",
      hi: "दर्ज करें\n1. ग्राहक का नाम\n2. फ़ोन नंबर\n3. राशि\n4. भुगतान की नियत तारीख।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Customer Added",
      hi: "ग्राहक जुड़ गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Set Reminder for Udhaar and Record Payment.",
      hi: "उधार के लिए रिमाइंडर सेट करें और भुगतान रिकॉर्ड करें।",
    },
    instruction: {
      en: "Click on the Customer to\n1. Set Reminder for Udhaar ( A WhatsApp message will be sent to the Customer )\n2. Record Payment.",
      hi: "ग्राहक पर क्लिक करें\n1. उधार के लिए रिमाइंडर सेट करने के लिए (ग्राहक को एक व्हाट्सएप संदेश भेजा जाएगा)\n2. भुगतान रिकॉर्ड करने के लिए।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Recover Payment",
      hi: "भुगतान वसूलें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Recover Payment and Add the Amount & Confirm Recovery",
      hi: "रिकवर पेमेंट पर क्लिक करें और राशि जोड़कर रिकवरी की पुष्टि करें",
    },
    instruction: {
      en: "Click on 'Recover Payment'\n Add the Amount & 'Confirm Recovery'.",
      hi: "'Recover Payment' पर क्लिक करें\nराशि जोड़ें और 'Confirm Recovery' करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Settled Payment",
      hi: "सुलझाया गया भुगतान",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Recovered Payment Updates will be shown in Settled",
      hi: "वसूले गए भुगतान के अपडेट सेटल्ड में दिखाए जाएंगे",
    },
    instruction: {
      en: "Recovered Payment Updates will be shown in 'Settled' .",
      hi: "वसूले गए भुगतान के अपडेट 'Settled' में दिखाए जाएंगे।",
    },
    durationAfterSpeech: 3000,
  },
];
