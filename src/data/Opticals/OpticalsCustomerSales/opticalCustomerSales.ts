import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/OpticalsCS/OCSstep2.png";
import step3 from "../../../assets/Opticals/OpticalsCS/OCSstep3.png";
import step4 from "../../../assets/Opticals/OpticalsCS/OCSstep4.png";
import step5 from "../../../assets/Opticals/OpticalsCS/OCSstep5.png";
import step6 from "../../../assets/Opticals/OpticalsCS/OCSstep6.png";
import step7 from "../../../assets/Opticals/OpticalsCS/OCSstep7.png";
import step8 from "../../../assets/Opticals/OpticalsCS/OCSstep8.png";
import step9 from "../../../assets/Opticals/OpticalsCS/OCSstep9.png";
import step10 from "../../../assets/Opticals/OpticalsCS/OCSstep10.png";
import type { Step } from "../../../types/step";

export const opticalcustomersales: Step[] = [
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
      en: "Click on New Sale to start a Sale",
      hi: "बिक्री शुरू करने के लिए न्यू सेल पर क्लिक करें",
    },
    instruction: {
      en: "1. Click on 'New Sale' to start a Sale\n2. Or go to 'Billing' from the Bottom Navigation Bar.",
      hi: "1. बिक्री शुरू करने के लिए 'New Sale' पर क्लिक करें\n2. या नीचे के नेविगेशन बार से 'Billing' पर जाएं।",
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
      en: "Go to Billings Tab to start the Sale",
      hi: "बिक्री शुरू करने के लिए बिलिंग टैब पर जाएं",
    },
    instruction: {
      en: "Go to Billings Tab to start the Sale.",
      hi: "बिक्री शुरू करने के लिए Billing टैब पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Search Product",
      hi: "उत्पाद खोजें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Search for the Product in the Search Bar and click on '+' to Add the Product to Cart",
      hi: "सर्च बार में उत्पाद खोजें और उत्पाद को कार्ट में जोड़ने के लिए '+' पर क्लिक करें",
    },
    instruction: {
      en: "1.Search for the Product in the Search Bar\n2. Click on '+' to Add the Product to Cart.",
      hi: "1. सर्च बार में उत्पाद खोजें\n2. उत्पाद को कार्ट में जोड़ने के लिए '+' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Product Variant",
      hi: "उत्पाद संस्करण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Variant of the Product",
      hi: "उत्पाद का संस्करण चुनें",
    },
    instruction: {
      en: "Select the Variant of the Product.",
      hi: "उत्पाद का संस्करण (Variant) चुनें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Customer",
      hi: "ग्राहक",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Customer to Sell the Product",
      hi: "उत्पाद बेचने के लिए ग्राहक चुनें",
    },
    instruction: {
      en: "1. Select the Customer to Sell\n2. Click on '+New' to Add a New Customer .",
      hi: "1. बेचने के लिए ग्राहक चुनें\n2. नया ग्राहक जोड़ने के लिए '+New' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Place Order",
      hi: "ऑर्डर दें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Place Order",
      hi: "प्लेस ऑर्डर पर क्लिक करें",
    },
    instruction: {
      en: "Click on 'Place Order' to place the order.",
      hi: "ऑर्डर देने के लिए 'Place Order' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Order Confirmation",
      hi: "ऑर्डर पुष्टि",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select the Mode of Payment and Place order",
      hi: "भुगतान का तरीका चुनें और ऑर्डर दें",
    },
    instruction: {
      en: "Select the Mode of Payment\n1. Cash\n2. Udhaar\n3. Click on the Toggle to print reciept\n4. Click on Place order",
      hi: "भुगतान का तरीका चुनें\n1. नकद\n2. उधार\n3. रसीद प्रिंट करने के लिए टॉगल पर क्लिक करें\n4. प्लेस ऑर्डर पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Udhaar",
      hi: "उधार",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: " Select Mode of Payment as Udhaar if the Customer has Consent",
      hi: "यदि ग्राहक की सहमति है तो भुगतान का तरीका उधार चुनें",
    },
    instruction: {
      en: "Select Mode of Payment as Udhaar with the Customers Consent.",
      hi: "ग्राहक की सहमति से भुगतान के तरीके के रूप में उधार चुनें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "Consent",
      hi: "सहमति",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "If Udhaar is selected Record Customer Content using the below Microphone",
      hi: "यदि उधार चुना गया है तो नीचे दिए गए माइक्रोफ़ोन का उपयोग करके ग्राहक की सहमति रिकॉर्ड करें",
    },
    instruction: {
      en: "If Udhaar is selected Record Customer Content using the below Microphone.",
      hi: "यदि उधार चुना गया है तो नीचे दिए गए माइक्रोफ़ोन का उपयोग करके ग्राहक की सहमति रिकॉर्ड करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Order Placed",
      hi: "ऑर्डर दर्ज हुआ",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on New Sale to start a Sale",
      hi: "बिक्री शुरू करने के लिए न्यू सेल पर क्लिक करें",
    },
    instruction: {
      en: "Order has been Placed and you can view the details by clicking on 'View Order Details'.",
      hi: "ऑर्डर दर्ज हो गया है और आप 'View Order Details' पर क्लिक करके विवरण देख सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
