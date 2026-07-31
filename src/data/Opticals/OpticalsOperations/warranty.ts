import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/Jobcards/OJCstep2.png";
import step3 from "../../../assets/Opticals/Warranty/OWSstep1.png";
import step4 from "../../../assets/Opticals/Warranty/OWSstep2.png";
import step5 from "../../../assets/Opticals/Warranty/OWSstep3.png";
import step6 from "../../../assets/Opticals/Warranty/OWSstep4.png";
import step7 from "../../../assets/Opticals/Warranty/OWSstep5.png";
import step8 from "../../../assets/Opticals/Warranty/OWSstep6.png";

export const warranty=[
    {
    image: step1,
    title: "Home",
    description: "",
    instruction:
      "Go to 'Profile' from Top Navigation Bar.",
    narration:
      "Go to Profile from Top Navigation Bar.",
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: "Profile",
    description: "",
    instruction:
      "1. Click on 'Warranty & Serials'.",
    narration:
      "Click on Warranty & Serials.",
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: "Warranty & Serials",
    description: "Warranty & Serials are to record the Product and it's Warranty",
    instruction:
      "1. Swipe Right to 'Serials'\n2. Click on 'New Serial'.",
    narration:
      "Swipe Right to Serials and Click on New Serial.",
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: "Serials",
    description: "",
    instruction:
      "Fill in the Details of the Product\n1. Product Name\n2. IMEI Number.",
    narration:
      "Fill in the Details of the Product, Product Name and IMEI Number.",
    durationAfterSpeech: 3000,
  },{
    image: step5,
    title: "Seials",
    description: "",
    instruction:
      "Product Added with IMEI Number.",
    narration:
      "Product Added with IMEI Number.",
    durationAfterSpeech: 3000,
  },{
    image: step6,
    title: "Claims",
    description: "",
    instruction:
      "1. Swipe Left to 'Claims' Tab\n2. Click on 'New Claim'.",
    narration:
      "Swipe Left to Claims Tab and Click on New Claim.",
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: "New Claim",
    description: "",
    instruction:
      "Enter Product IMEI Number and Issue of the Product.",
    narration:
      "1. Enter Product IMEI Number and Issue of the Product\n2. Click on 'Create Claim'.",
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: "Claims",
    description: "",
    instruction:
      "1. Claim created\n2. Update the State of the Claim 'open' or 'resolved' or 'rejected'.",
    narration:
      "Claim created Update the State of the Claim open or resolved or rejected.",
    durationAfterSpeech: 3000,
  },
];