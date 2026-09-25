import step1 from "../../../assets/Opticals/OpticalsCS/OCSstep1.png";
import step2 from "../../../assets/Opticals/Opticalsbooking/OBstep1.png";
import step3 from "../../../assets/Opticals/Opticalsbooking/OBstep2.png";
import step4 from "../../../assets/Opticals/Opticalsbooking/OBstep3.png";
import step5 from "../../../assets/Opticals/Opticalsbooking/OBstep4.png";
import step6 from "../../../assets/Opticals/Opticalsbooking/OBstep5.png";
import step7 from "../../../assets/Opticals/Opticalsbooking/OBstep6.png";
import step8 from "../../../assets/Opticals/Opticalsbooking/OBstep7.png";
import step9 from "../../../assets/Opticals/Opticalsbooking/OBstep8.png";
import step10 from "../../../assets/Opticals/Opticalsbooking/OBstep9.png";
import type { Step } from "../../../types/step";

export const booking: Step[] = [
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
      en: "Go to the 'Bookings' tab",
      hi: "बुकिंग्स टैब पर जाएं",
    },
    instruction: {
      en: "1. Go to the 'Bookings' Tab from the Bottom Navigation Bar ",
      hi: "1. नीचे के नेविगेशन बार से 'Bookings' टैब पर जाएं",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step5,
    title: {
      en: "Services & Appointments",
      hi: "सेवाएं और अपॉइंटमेंट्स",
    },
    description: {
      en: "Services",
      hi: "सेवाएं",
    },
    narration: {
      en: "Go to the Services Page and Click on New Service",
      hi: "सर्विसेज पेज पर जाएं और न्यू सर्विस पर क्लिक करें",
    },
    instruction: {
      en: "1. Go to the 'Services' Page\n 2. Click on '+ New Service'.",
      hi: "1. 'Services' पेज पर जाएं\n2. '+ New Service' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step6,
    title: {
      en: "New Service",
      hi: "नई सेवा",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Name of the Service, Price, Duration and Click on Create Service",
      hi: "सेवा का नाम, मूल्य, अवधि भरें और क्रिएट सर्विस पर क्लिक करें",
    },
    instruction: {
      en: "Fill in the\n1. Name of the Service\n2. Price\n3. Duration\nClick on 'Create Service'",
      hi: "भरें\n1. सेवा का नाम\n2. मूल्य\n3. अवधि\n'Create Service' पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step7,
    title: {
      en: "Service Added",
      hi: "सेवा जुड़ गई",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "New Service has been Added, Click on the Toggle to make the Service available",
      hi: "नई सेवा जुड़ गई है, सेवा को उपलब्ध कराने के लिए टॉगल पर क्लिक करें",
    },
    instruction: {
      en: "New Service has been Added\n Click on the Toggle to make the Service available.",
      hi: "नई सेवा जुड़ गई है\nसेवा को उपलब्ध कराने के लिए टॉगल पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step2,
    title: {
      en: "Appointments",
      hi: "अपॉइंटमेंट्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Click on Book to enter a Booking",
      hi: "बुकिंग दर्ज करने के लिए बुक पर क्लिक करें",
    },
    instruction: {
      en: "On the ' Appointments ' page Click on 'Book' to enter a Booking.",
      hi: "'Appointments' पेज पर बुकिंग दर्ज करने के लिए 'Book' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step3,
    title: {
      en: "Book Appointment",
      hi: "अपॉइंटमेंट बुक करें",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Fill in the Details of the Customer",
      hi: "ग्राहक का विवरण भरें",
    },
    instruction: {
      en: "Fill in the Details\n1. Customer Name\n2. Date\n3. Service\n4. Price\n5. Time\n Click on 'Book'",
      hi: "विवरण भरें\n1. ग्राहक का नाम\n2. दिनांक\n3. सेवा\n4. मूल्य\n5. समय\n'Book' पर क्लिक करें",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step4,
    title: {
      en: "Appointments",
      hi: "अपॉइंटमेंट्स",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Appointment is Added Change the sate of the Appointment using No-show cancel complete.",
      hi: "अपॉइंटमेंट जुड़ गया है, नो-शो, कैंसिल, कम्प्लीट का उपयोग करके स्थिति बदलें।",
    },
    instruction: {
      en: "Appointment is Added\nChange the sate of the Appointment using\n1. No-show\n2. cancel\n3. complete.",
      hi: "अपॉइंटमेंट जुड़ गया है\nइनका उपयोग करके अपॉइंटमेंट की स्थिति बदलें:\n1. नो-शो\n2. रद्द करें\n3. पूर्ण।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step8,
    title: {
      en: "Memberships",
      hi: "सदस्यता",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Go to Memberships Page and Click on New Membership",
      hi: "मेंबरशिप्स पेज पर जाएं और न्यू मेंबरशिप पर क्लिक करें",
    },
    instruction: {
      en: "1.Go to Memberships Page\n2. Click on 'New Membership'.",
      hi: "1. Memberships पेज पर जाएं\n2. 'New Membership' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step9,
    title: {
      en: "New Membership",
      hi: "नई सदस्यता",
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
      en: "Fill in the details\n1. Customer Name\n2. Membership Name\n3. Sessions\n4. Price & Data\nClick on 'Sell Membership'.",
      hi: "विवरण भरें\n1. ग्राहक का नाम\n2. सदस्यता का नाम\n3. सत्र\n4. मूल्य और डेटा\n'Sell Membership' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
  {
    image: step10,
    title: {
      en: "Membership",
      hi: "सदस्यता",
    },
    description: {
      en: "",
      hi: "",
    },
    narration: {
      en: "Membership has been created Click on 'Use Session' to use the Pass",
      hi: "सदस्यता बन गई है, पास का उपयोग करने के लिए 'Use Session' पर क्लिक करें",
    },
    instruction: {
      en: "1. Membership has been created\n2. Click on 'Use Session' to use the Pass.",
      hi: "1. सदस्यता बन गई है\n2. पास का उपयोग करने के लिए 'Use Session' पर क्लिक करें।",
    },
    durationAfterSpeech: 3000,
  },
];
