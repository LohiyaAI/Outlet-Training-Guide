import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step3 from "../../../assets/Opticals/Opticalsstock/OSstep1.png";
import step4 from "../../../assets/Opticals/Opticalsstock/OSstep2.png";
import step5 from "../../../assets/Opticals/Opticalsstock/OSstep3.png";
import step6 from "../../../assets/Opticals/Opticalsstock/OSstep4.png";
import step7 from "../../../assets/Opticals/Opticalsstock/OSstep5.png";
import type { Step } from "../../../types/step";

export const opticalstock: Step[] = [
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
      en: "Go to Billing from the Bottom of the Home Page",
      hi: "होम पेज के नीचे से बिलिंग पर जाएं",
    },
    instruction: {
      en: "Go to 'Billing' from the Bottom Navigation Bar.",
      hi: "नीचे के नेविगेशन बार से 'Billing' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Billing",
      hi: "बिलिंग",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Stock Page and Click on plus to Add a Product ",
      hi: "स्टॉक पेज पर जाएं और उत्पाद जोड़ने के लिए प्लस पर क्लिक करें",
    },
    instruction: {
      en: "1.Go to 'Stock' Page\n2. Click on '+' to Add a Product ",
      hi: "1. 'Stock' पेज पर जाएं\n2. उत्पाद जोड़ने के लिए '+' पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Add Product",
      hi: "उत्पाद जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Search for the Product from the Search Bar Or Add the Product Manually",
      hi: "सर्च बार से उत्पाद खोजें या उत्पाद को मैन्युअल रूप से जोड़ें",
    },
    instruction: {
      en: "1. Search for the Product from the Search Bar\n2. Or Add the Product Manually.",
      hi: "1. सर्च बार से उत्पाद खोजें\n2. या उत्पाद को मैन्युअल रूप से जोड़ें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "New Product",
      hi: "नया उत्पाद",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details and the Bar code of the Product and Click on Save Product",
      hi: "विवरण और उत्पाद का बारकोड भरें और सेव प्रोडक्ट पर क्लिक करें",
    },
    instruction: {
      en: "1. Fill in the Details and the Bar code of the Product\n2. Click on 'Save Product'.",
      hi: "1. विवरण और उत्पाद का बारकोड भरें\n2. 'Save Product' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Product Added",
      hi: "उत्पाद जुड़ गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Product has been Added to the List",
      hi: "उत्पाद सूची में जोड़ दिया गया है",
    },
    instruction: {
      en: "Product has been Added to the List.",
      hi: "उत्पाद सूची में जोड़ दिया गया है।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Search product",
      hi: "उत्पाद खोजें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "You can Search for the Product in the Search Bar now and Edit",
      hi: "अब आप सर्च बार में उत्पाद खोज सकते हैं और संपादित कर सकते हैं",
    },
    instruction: {
      en: "You can Search for the Product in the Search Bar now and Edit.",
      hi: "अब आप सर्च बार में उत्पाद खोज सकते हैं और संपादित कर सकते हैं।",
    },
    durationAfterSpeech: 3000,
  },
];
