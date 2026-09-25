import step1 from "../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../assets/Electronics/electronicscs/EelectronicCSstep1.png"
import step3 from "../../assets/Electronics/electronicscs/EelectronicCSstep2.png"
import step4 from "../../assets/Electronics/electronicscs/EelectronicCSstep3.png"
import step5 from "../../assets/Electronics/electronicscs/EelectronicCSstep4.png"
import step6 from "../../assets/Electronics/electronicscs/EelectronicCSstep5.png"
import step7 from "../../assets/Electronics/electronicscs/EelectronicCSstep6.png"
import step8 from "../../assets/Electronics/electronicscs/EelectronicCSstep7.png"
import step9 from "../../assets/Electronics/electronicscs/EelectronicCSstep8.png"
import step10 from "../../assets/Electronics/electronicscs/EelectronicCSstep9.png"
import type { Step } from "../../types/step";

export const electronicscustomersales: Step[] = [
  {
    image: step1,
    title: {
      en: "Home",
      hi: "होम",
    },
    description: {
      en: "New Sale",
      hi: "नई बिक्री",
    },
    narration: {
      en: "Click on New Sale to start a Sale",
      hi: "बिक्री शुरू करने के लिए न्यू सेल पर क्लिक करें",
    },
    instruction: {
      en: "Click on New Sale to start a Sale and it will redirect you to 'Billing' Page.",
      hi: "बिक्री शुरू करने के लिए New Sale पर क्लिक करें और यह आपको 'Billing' पेज पर ले जाएगा।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Sales",
      hi: "बिक्री",
    },
    description: {
      en: "Search Product",
      hi: "उत्पाद खोजें",
    },
    narration: {
      en: "Use the 'Search' Bar to Add the Product to Cart",
      hi: "कार्ट में उत्पाद जोड़ने के लिए 'Search' बार का उपयोग करें",
    },
    instruction: {
      en: "Use the 'Search' Bar to Add the Product to Cart.",
      hi: "कार्ट में उत्पाद जोड़ने के लिए 'Search' बार का उपयोग करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Product",
      hi: "उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on ' + ' to Add the Product",
      hi: "उत्पाद जोड़ने के लिए ' + ' पर क्लिक करें",
    },
    instruction: {
      en: "Click on ' + ' to Add the Product.",
      hi: "उत्पाद जोड़ने के लिए ' + ' पर क्लिक करें।",
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
      en: "Select the Variant of the added product",
      hi: "जोड़े गए उत्पाद का संस्करण चुनें",
    },
    instruction: {
      en: "Select the Variant of the added product.",
      hi: "जोड़े गए उत्पाद का संस्करण चुनें।",
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
      en: "Add a Customer by clicking on 'Add Customer'",
      hi: "'Add Customer' पर क्लिक करके ग्राहक जोड़ें",
    },
    instruction: {
      en: "Add a Customer by clicking on 'Add Customer'.",
      hi: "'Add Customer' पर क्लिक करके ग्राहक जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Select Customer",
      hi: "ग्राहक चुनें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select a Customer from the list Or add a New Customer by clicking on New",
      hi: "सूची में से ग्राहक चुनें या New पर क्लिक करके नया ग्राहक जोड़ें",
    },
    instruction: {
      en: "1. Select a Customer from the list\n2. Or add a New Customer by clicking on ' + New '.",
      hi: "1. सूची में से ग्राहक चुनें\n2. या ' + New ' पर क्लिक करके नया ग्राहक जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Payment Method",
      hi: "भुगतान का तरीका",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Select mode of Payment",
      hi: "भुगतान का तरीका चुनें",
    },
    instruction: {
      en: "1. Select the amount of Discount if any.\n2. Select mode of Payment.",
      hi: "1. यदि कोई छूट हो तो छूट की राशि चुनें।\n2. भुगतान का तरीका चुनें।",
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
      en: "Click on Udhaar and select the Amount to be added to Udhaar and click on Place Order",
      hi: "Udhaar पर क्लिक करें और उधार में जोड़ी जाने वाली राशि चुनें और Place Order पर क्लिक करें",
    },
    instruction: {
      en: "Click on Udhaar\n1. Select the Amount to be added to Udhaar.\n2. Select Payment Due date.\n 3. Click on PLace Order.",
      hi: "Udhaar पर क्लिक करें\n1. उधार में जोड़ी जाने वाली राशि चुनें।\n2. भुगतान की नियत तारीख चुनें।\n3. Place Order पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "Customer Consent",
      hi: "ग्राहक सहमति",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Record the consent of the Customer before adding Amount to Udhaar",
      hi: "उधार में राशि जोड़ने से पहले ग्राहक की सहमति रिकॉर्ड करें",
    },
    instruction: {
      en: "Record the consent of the Customer before adding the Amount to Udhaar by clicking on the microphone.",
      hi: "माइक्रोफ़ोन पर क्लिक करके उधार में राशि जोड़ने से पहले ग्राहक की सहमति रिकॉर्ड करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Order PLaced",
      hi: "ऑर्डर दर्ज हुआ",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on 'View Order Details' to see the Details",
      hi: "विवरण देखने के लिए 'View Order Details' पर क्लिक करें",
    },
    instruction: {
      en: "Your order is Placed.\nClick on 'View Order Details' to see the Details.",
      hi: "आपका ऑर्डर दर्ज हो गया है।\nविवरण देखने के लिए 'View Order Details' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
];
