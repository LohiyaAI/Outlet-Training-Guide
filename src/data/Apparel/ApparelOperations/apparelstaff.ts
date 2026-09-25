import step0 from "../../../assets/Apparel/apparelCS/ApprCSstep1.png";
import step1 from "../../../assets/profile.png";
import step2 from "../../../assets/staffSteps/staffStep1.png";
import step3 from "../../../assets/staffSteps/staffStep2.png";
import step4 from "../../../assets/staffSteps/staffStep3.png";
import step5 from "../../../assets/staffSteps/staffStep4.png";
import step6 from "../../../assets/staffSteps/staffStep5.png";
import type { Step } from "../../../types/step";

export const apparelstaff: Step[] = [
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
      en: "Go to Profile and Click on Staff.",
      hi: "प्रोफ़ाइल पर जाएं और स्टाफ पर क्लिक करें।",
    },
    instruction: {
      en: "1. Go to Profile from Home Page\n2. Click on 'Staff'.",
      hi: "1. होम पेज से Profile पर जाएं\n2. 'Staff' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Team & Attendance",
      hi: "टीम और उपस्थिति",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Team & Attendance and Click on Add Staff",
      hi: "टीम और उपस्थिति पर जाएं और ऐड स्टाफ पर क्लिक करें",
    },
    instruction: {
      en: "1. Go to Team & Attendance\n2. Click on 'Add Staff'.",
      hi: "1. Team & Attendance पर जाएं\n2. 'Add Staff' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Details",
      hi: "विवरण",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Enter the Details of the Staff and Click on Save",
      hi: "स्टाफ का विवरण दर्ज करें और सेव पर क्लिक करें",
    },
    instruction: {
      en: "1. Enter the Details of the Staff\n2. Click on 'Save'.",
      hi: "1. स्टाफ का विवरण दर्ज करें\n2. 'Save' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Staff Added",
      hi: "स्टाफ जुड़ गया",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Staff Member has been Added",
      hi: "स्टाफ सदस्य जोड़ दिया गया है",
    },
    instruction: {
      en: "Staff Member has been Added.",
      hi: "स्टाफ सदस्य जोड़ दिया गया है।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Tasks",
      hi: "कार्य",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to the Tasks Page to add a Task",
      hi: "कार्य जोड़ने के लिए टास्क पेज पर जाएं",
    },
    instruction: {
      en: "Go to the Tasks Page to add a Task.",
      hi: "कार्य जोड़ने के लिए Tasks पेज पर जाएं।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "Add Task",
      hi: "कार्य जोड़ें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Add Task here and Assign to staff",
      hi: "यहाँ कार्य जोड़ें और स्टाफ को सौंपें",
    },
    instruction: {
      en: "1. Add Task here and Assign to staff\n2. Click 'Save' to save the Task.",
      hi: "1. यहाँ कार्य जोड़ें और स्टाफ को सौंपें\n2. कार्य सहेजने के लिए 'Save' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
];
