import step0 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step1 from "../../../assets/profile.png";
import step2 from "../../../assets/stockRackSteps/SRstep1.png";
import step3 from "../../../assets/stockRackSteps/SRstep2.png";
import step4 from "../../../assets/stockRackSteps/SRstep3.png";
import step5 from "../../../assets/stockRackSteps/SRstep4.png";
import step6 from "../../../assets/stockRackSteps/SRstep5.png"
import type { Step } from "../../../types/step";

export const apparelstockrack: Step[] = [
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
      en: "Go to ' Profile ' from the Top Navigation Bar",
      hi: "शीर्ष नेविगेशन बार से 'Profile' पर जाएं",
    },
    instruction: {
      en: "Go to ' Profile ' from the Top Navigation Bar.",
      hi: "शीर्ष नेविगेशन बार से 'Profile' पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step1,
    title: {
      en: "Profile",
      hi: "प्रोफ़ाइल",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Profile and Click on Stock Racks",
      hi: "प्रोफ़ाइल पर जाएं और स्टॉक रैक पर क्लिक करें",
    },
    instruction: {
      en: "1. Go to Profile\n2. Click on 'Stock Racks'.",
      hi: "1. Profile पर जाएं\n2. 'Stock Racks' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Stock Racks",
      hi: "स्टॉक रैक",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to the Purchase screen in Billing",
      hi: "बिलिंग में खरीद स्क्रीन पर जाएं",
    },
    instruction: {
      en: "Click on ' Place Stock ' to put a Product in Rack.",
      hi: "रैक में उत्पाद रखने के लिए 'Place Stock' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Product Details",
      hi: "उत्पाद विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Add the Product.Mention which Rack the product should go into. Mention Quantity",
      hi: "उत्पाद जोड़ें। बताएं कि उत्पाद किस रैक में जाना चाहिए। मात्रा बताएं",
    },
    instruction: {
      en: "1. Add the Product\n2.Mention which Rack the product should go into\n3. Mention Quantity.",
      hi: "1. उत्पाद जोड़ें\n2. बताएं कि उत्पाद किस रैक में जाना चाहिए\n3. मात्रा बताएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Product Added to Rack",
      hi: "उत्पाद रैक में जुड़ गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Product is Added to the Rack",
      hi: "उत्पाद रैक में जोड़ दिया गया है",
    },
    instruction: {
      en: "Product is Added to the Rack.",
      hi: "उत्पाद रैक में जोड़ दिया गया है।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Edit Product",
      hi: "उत्पाद संपादित करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Edit by clicking on the Product.\n1.",
      hi: "उत्पाद पर क्लिक करके संपादित करें।\n1.",
    },
    instruction: {
      en: "Edit by clicking on the Product.\n1. Change the Quantity\n2. Move to another Rack\n3. Delete Product.",
      hi: "उत्पाद पर क्लिक करके संपादित करें।\n1. मात्रा बदलें\n2. दूसरे रैक में ले जाएं\n3. उत्पाद हटाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Find Product",
      hi: "उत्पाद खोजें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Stock in Billing",
      hi: "बिलिंग में स्टॉक पर जाएं",
    },
    instruction: {
      en: "1. Go to ' Stock ' page in ' Billing ' to see if the Product is placed in the Rack or not.",
      hi: "1. यह देखने के लिए कि उत्पाद रैक में रखा गया है या नहीं, 'Billing' में 'Stock' पेज पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
];
