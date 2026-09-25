import step1 from "../../assets/Electronics/electronicsrepairs/ERepairstep0.png"
import step2 from "../../assets/Electronics/electronicsrepairs/ERepairstep1.png"
import step3 from "../../assets/Electronics/electronicsrepairs/ERepairstep2.png"
import step4 from "../../assets/Electronics/electronicsrepairs/ERepairstep3.png"
import type { Step } from "../../types/step";

export const electronicsrepairs: Step[] = [
  {
    image: step1,
    title: {
      en: "Home",
      hi: "होम",
    },
    description: {
      en: "Repairs",
      hi: "मरम्मत",
    },
    narration: {
      en: "Swipe right to go to the 'Repairs' Page",
      hi: "'Repairs' पेज पर जाने के लिए दाएं स्वाइप करें",
    },
    instruction: {
      en: "Swipe right to go to the 'Repairs' Page.",
      hi: "'Repairs' पेज पर जाने के लिए दाएं स्वाइप करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Repairs",
      hi: "मरम्मत",
    },
    description: {
      en: "Job Cards",
      hi: "जॉब कार्ड्स",
    },
    narration: {
      en: "Click on New Job  ",
      hi: "न्यू जॉब पर क्लिक करें",
    },
    instruction: {
      en: "Click on ' + New Job ' to start a New job.",
      hi: "नया जॉब शुरू करने के लिए ' + New Job ' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "New Job card",
      hi: "नया जॉब कार्ड",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Give the above details and click on create.",
      hi: "उपरोक्त विवरण दें और क्रिएट पर क्लिक करें।",
    },
    instruction: {
      en: "1. Enter Customer Details.\n2. Select the item for repair.\n3. Enter the amount charged.\n4. Select the Date.\n5. Click on ' Create '.",
      hi: "1. ग्राहक विवरण दर्ज करें।\n2. मरम्मत के लिए सामान चुनें।\n3. लिया गया शुल्क दर्ज करें।\n4. तारीख चुनें।\n5. 'Create' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Job Created",
      hi: "जॉब बन गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Update the status of the Job here.",
      hi: "यहाँ जॉब की स्थिति अपडेट करें।",
    },
    instruction: {
      en: "New Job is Created.\nUpdate the status of the Job here.",
      hi: "नया जॉब बन गया है।\nयहाँ जॉब की स्थिति अपडेट करें।",
    },
    durationAfterSpeech: 3000,
  },
];
