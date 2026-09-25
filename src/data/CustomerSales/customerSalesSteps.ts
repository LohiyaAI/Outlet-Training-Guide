import step1 from "../../assets/CustomerSales/CSstep1.png";
import step2 from "../../assets/CustomerSales/CSstep2.png";
import step3 from "../../assets/CustomerSales/CSstep3.png";
import step4 from "../../assets/CustomerSales/CSstep4.png";
import step6 from "../../assets/CustomerSales/CSstep6.png";
import step7 from "../../assets/CustomerSales/CSstep7.png";
import step8 from "../../assets/CustomerSales/CSstep8.png";
import step9 from "../../assets/CustomerSales/CSstep9.png";
import step10 from "../../assets/CustomerSales/CSstep10.png";
import step12 from "../../assets/Opticals/OpticalsCS/OCSstep9.png";
import step14 from "../../assets/CustomerSales/CSstep14.png"
import step15 from "../../assets/CustomerSales/CSstep15.png"
import step16 from "../../assets/CustomerSales/CSstep16.png"
import step17 from "../../assets/CustomerSales/CSstep17.png"
import step18 from "../../assets/CustomerSales/CSstep18.png"
import type { Step } from "../../types/step";

export const customerSalesSteps: Step[] = [
  {
    image: step1,
    title: {
      en: "Home",
      hi: "होम",
    },
    description: {
      en: "Create New Sale",
      hi: "नई बिक्री बनाएं",
    },
    narration: {
      en: "Click on New Sale to start a Sale",
      hi: "बिक्री शुरू करने के लिए न्यू सेल पर क्लिक करें",
    },
    instruction: {
      en: "Click on ' New Sale ' to start a Sale.",
      hi: "बिक्री शुरू करने के लिए 'New Sale' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Product",
      hi: "उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Search for your product in the Search bar.",
      hi: "सर्च बार में अपना उत्पाद खोजें।",
    },
    instruction: {
      en: "Search for the product in the Search bar.",
      hi: "सर्च बार में उत्पाद खोजें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Add Product to Cart",
      hi: "उत्पाद कार्ट में जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Add the Product to Cart by clicking on the plus button.",
      hi: "प्लस बटन पर क्लिक करके उत्पाद को कार्ट में जोड़ें।",
    },
    instruction: {
      en: "Add the Product to Cart by clicking on the + button.",
      hi: "+ बटन पर क्लिक करके उत्पाद को कार्ट में जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Product",
      hi: "उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "you can also Click on ' Scan ' to scan the Product",
      hi: "आप उत्पाद को स्कैन करने के लिए 'Scan' पर भी क्लिक कर सकते हैं",
    },
    instruction: {
      en: " You can also add the product using ' Scan ' or ' Voice ' or ' Write '.",
      hi: "आप 'Scan' या 'Voice' या 'Write' का उपयोग करके भी उत्पाद जोड़ सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step14,
    title: {
      en: "Scan Product",
      hi: "उत्पाद स्कैन करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Now your Product is Added to cart for the Order.",
      hi: "अब आपका उत्पाद ऑर्डर के लिए कार्ट में जोड़ दिया गया है।",
    },
    instruction: {
      en: "1. Scan the Bar Code of the Product.\n2. Add the Quantity and click on ' Add to Cart' .",
      hi: "1. उत्पाद का बारकोड स्कैन करें।\n2. मात्रा जोड़ें और 'Add to Cart' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step15,
    title: {
      en: "Voice Order",
      hi: "वॉयस ऑर्डर",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Speak in any Indian Language to Order using Voice.",
      hi: "वॉयस का उपयोग करके ऑर्डर करने के लिए किसी भी भारतीय भाषा में बोलें।",
    },
    instruction: {
      en: "Speak in any Indian Language to Order using microphone about the Product.\nExample :-\n1. Water Bottles - 2Litres\n2. Ice Cream - 2packs",
      hi: "माइक्रोफ़ोन का उपयोग करके उत्पाद के बारे में किसी भी भारतीय भाषा में बोलकर ऑर्डर करें।\nउदाहरण :-\n1. पानी की बोतलें - 2 लीटर\n2. आइसक्रीम - 2 पैक",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step16,
    title: {
      en: "Write Order",
      hi: "लिखकर ऑर्डर करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Write Items in any Language and Click on Detect Items.",
      hi: "किसी भी भाषा में सामान लिखें और डिटेक्ट आइटम्स पर क्लिक करें।",
    },
    instruction: {
      en: "1. Write Items in any Language.\n2. Click on ' Detect Items '.",
      hi: "1. किसी भी भाषा में सामान लिखें।\n2. 'Detect Items' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step17,
    title: {
      en: "Write Order",
      hi: "लिखकर ऑर्डर करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Check the Item and click on Add to Cart .",
      hi: "सामान की जाँच करें और ऐड टू कार्ट पर क्लिक करें।",
    },
    instruction: {
      en: "Check the Items and click on ' Add to Cart '.",
      hi: "सामान की जाँच करें और 'Add to Cart' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Add Customer",
      hi: "ग्राहक जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Add Customer to select a Customer.",
      hi: "ग्राहक चुनने के लिए ऐड कस्टमर पर क्लिक करें।",
    },
    instruction: {
      en: "Click on Add Customer Bar to select a Customer.",
      hi: "ग्राहक चुनने के लिए Add Customer बार पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Customer",
      hi: "ग्राहक",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select a Customer for the Sale",
      hi: "बिक्री के लिए ग्राहक चुनें",
    },
    instruction: {
      en: "Select a Customer for the Sale.",
      hi: "बिक्री के लिए एक ग्राहक चुनें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step18,
    title: {
      en: "Customer",
      hi: "ग्राहक",
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
      en: "Customer Added\nClick on ' Place Order '.",
      hi: "ग्राहक जुड़ गया\n'Place Order' पर क्लिक करें।",
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
      en: "Select the Mode of Payment Cash",
      hi: "भुगतान का तरीका नकद चुनें",
    },
    instruction: {
      en: "Select the Mode of Payment Cash .",
      hi: "भुगतान का तरीका नकद (Cash) चुनें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Change of Mode of Payment",
      hi: "भुगतान का तरीका बदलें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "If the Customer wants to take Udhaar Click on the Udhaar and select the amount",
      hi: "यदि ग्राहक उधार लेना चाहता है तो उधार पर क्लिक करें और राशि चुनें",
    },
    instruction: {
      en: "If the Customer wants to take Udhaar Click on the Udhaar and select the amount and Click Place Order.",
      hi: "यदि ग्राहक उधार लेना चाहता है तो Udhaar पर क्लिक करें, राशि चुनें और Place Order पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step12,
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
    image: step9,
    title: {
      en: "Order Placed",
      hi: "ऑर्डर दर्ज हुआ",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Your Order is Placed now, Click on View Order Details to see the details.",
      hi: "आपका ऑर्डर दर्ज हो गया है, विवरण देखने के लिए व्यू ऑर्डर डिटेल्स पर क्लिक करें।",
    },
    instruction: {
      en: "Your Order is Placed now, Click on View Order Details to see the details.",
      hi: "आपका ऑर्डर अब दर्ज हो गया है, विवरण देखने के लिए View Order Details पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Order Details",
      hi: "ऑर्डर विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "You can see the Items and Order Summary here.",
      hi: "आप यहाँ सामान और ऑर्डर सारांश देख सकते हैं।",
    },
    instruction: {
      en: "You can see the Items and Order Summary here.",
      hi: "आप यहाँ सामान और ऑर्डर सारांश देख सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
