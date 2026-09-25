import step1 from "../../assets/login/step1.png";
import step2 from "../../assets/login/step2.png";
import step from "../../assets/phonenumberlogin/phonenumberstep3.png";
import step4 from "../../assets/login/step4.png";
import step5 from "../../assets/login/step5.png";
import step6 from "../../assets/login/step6.png";
import step7 from "../../assets/login/step7.png";
import step8 from "../../assets/login/step8.png";
import step9 from "../../assets/login/step9.png";
import step10 from "../../assets/login/step10.png";
import step11 from "../../assets/login/step11.png";
import step12 from "../../assets/CustomerSales/CSstep1.png";
import type { Step } from "../../types/step";

export const phoneSigninSteps: Step[] = [
  {
    image: step1,
    title: {
      en: "Step 1",
      hi: "चरण 1",
    },
    description: {
      en: "Choose a Language",
      hi: "भाषा चुनें",
    },
    narration: {
      en: "Start by selecting your preferred language from the list.",
      hi: "सूची में से अपनी पसंदीदा भाषा चुनकर शुरुआत करें।",
    },
    instruction: {
      en: "Start by selecting your preferred language from the list.",
      hi: "सूची में से अपनी पसंदीदा भाषा चुनकर शुरुआत करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step2,
    title: {
      en: "Step 2",
      hi: "चरण 2",
    },
    description: {
      en: "Click on Get Started",
      hi: "गेट स्टार्टेड पर क्लिक करें",
    },
    narration: {
      en: "Now tap the Get Started button to continue with the registration process.",
      hi: "अब पंजीकरण प्रक्रिया जारी रखने के लिए गेट स्टार्टेड बटन पर टैप करें।",
    },
    instruction: {
      en: "Click Get Started to move to the next step.",
      hi: "अगले चरण पर जाने के लिए गेट स्टार्टेड पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step,
    title: {
      en: "Step 3",
      hi: "चरण 3",
    },
    description: {
      en: "Phone Number",
      hi: "फ़ोन नंबर",
    },
    narration: {
      en: "Enter your Phone Number to Verify",
      hi: "सत्यापित करने के लिए अपना फ़ोन नंबर दर्ज करें",
    },
    instruction: {
      en: "Enter your Phone Number to Verify.",
      hi: "सत्यापित करने के लिए अपना फ़ोन नंबर दर्ज करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step4,
    title: {
      en: "Step 4",
      hi: "चरण 4",
    },
    description: {
      en: "OTP Verification",
      hi: "ओटीपी सत्यापन",
    },
    narration: {
      en: "Enter the OTP sent to your registered mobile number.",
      hi: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया ओटीपी दर्ज करें।",
    },
    instruction: {
      en: "Enter the OTP sent to your registered mobile number.",
      hi: "अपने पंजीकृत मोबाइल नंबर पर भेजा गया ओटीपी दर्ज करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step5,
    title: {
      en: "Step 5",
      hi: "चरण 5",
    },
    description: {
      en: "Choose Username",
      hi: "यूज़रनेम चुनें",
    },
    narration: {
      en: "Choose a username for your Store",
      hi: "अपने स्टोर के लिए एक यूज़रनेम चुनें",
    },
    instruction: {
      en: "Choose a username for your Store.",
      hi: "अपने स्टोर के लिए एक यूज़रनेम चुनें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step6,
    title: {
      en: "Step 6",
      hi: "चरण 6",
    },
    description: {
      en: "Store Details",
      hi: "स्टोर विवरण",
    },
    narration: {
      en: "Enter your store details and proceed to the next step.",
      hi: "अपने स्टोर का विवरण दर्ज करें और अगले चरण पर आगे बढ़ें।",
    },
    instruction: {
      en: "Enter your store details and click on Continue.",
      hi: "अपने स्टोर का विवरण दर्ज करें और कंटिन्यू पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step7,
    title: {
      en: "Step 7",
      hi: "चरण 7",
    },
    description: {
      en: "Store Details",
      hi: "स्टोर विवरण",
    },
    narration: {
      en: "Allow the app to detect store location.",
      hi: "ऐप को स्टोर की लोकेशन का पता लगाने की अनुमति दें।",
    },
    instruction: {
      en: "1. Click on ' Detect My Location ' to Allow the app detect your store location.\n2. Or enter address manually.\n3. Click on ' Continue '",
      hi: "1. ऐप को अपने स्टोर का स्थान खोजने की अनुमति देने के लिए 'Detect My Location' पर क्लिक करें।\n2. या मैन्युअल रूप से पता दर्ज करें।\n3. 'Continue' पर क्लिक करें",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step8,
    title: {
      en: "Step 8",
      hi: "चरण 8",
    },
    description: {
      en: "Terms & Conditions",
      hi: "नियम और शर्तें",
    },
    narration: {
      en: "Review the Terms & Conditions and Privacy Policy.",
      hi: "नियम और शर्तों तथा गोपनीयता नीति की समीक्षा करें।",
    },
    instruction: {
      en: "1. Read the Terms & Conditions and Privacy Policy. Tick the required checkboxes.\n2. Click on ' Complete Setup '.",
      hi: "1. नियम और शर्तें तथा गोपनीयता नीति पढ़ें। आवश्यक चेकबॉक्स पर टिक करें।\n2. 'Complete Setup' पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step9,
    title: {
      en: "Step 9",
      hi: "चरण 9",
    },
    description: {
      en: "Refferal Code",
      hi: "रेफ़रल कोड",
    },
    narration: {
      en: "",
      hi: "",
    },
    instruction: {
      en: "If you are invited by any Distributor or Partner\n1. Enter their code.\n2. Click on ' Continue ' .",
      hi: "यदि आपको किसी वितरक या पार्टनर द्वारा आमंत्रित किया गया है\n1. उनका कोड दर्ज करें।\n2. 'Continue' पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step10,
    title: {
      en: "Step 10",
      hi: "चरण 10",
    },
    description: {
      en: "Choose a Plan",
      hi: "प्लान चुनें",
    },
    narration: {
      en: "Select your preferred subscription plan",
      hi: "अपना पसंदीदा सब्सक्रिप्शन प्लान चुनें",
    },
    instruction: {
      en: "Select your preferred subscription plan and Request Trial.",
      hi: "अपना पसंदीदा सब्सक्रिप्शन प्लान चुनें और रिक्वेस्ट ट्रायल करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step11,
    title: {
      en: "Step 11",
      hi: "चरण 11",
    },
    description: {
      en: "Trail",
      hi: "ट्रायल",
    },
    narration: {
      en: "Trail Request has been recieved.",
      hi: "ट्रायल का अनुरोध प्राप्त हो गया है।",
    },
    instruction: {
      en: "Trail Request has been recieved.\nClick on ' Check Statues ' to refresh.",
      hi: "ट्रायल का अनुरोध प्राप्त हो गया है।\nरिफ्रेश करने के लिए 'Check Statues' पर क्लिक करें।",
    },
    durationAfterSpeech: 2000,
  },
  {
    image: step12,
    title: {
      en: "Step 11",
      hi: "चरण 11",
    },
    description: {
      en: "Home",
      hi: "होम",
    },
    narration: {
      en: "Welcome to Home Page.",
      hi: "होम पेज में आपका स्वागत है।",
    },
    instruction: {
      en: "Welcome to Home Page.",
      hi: "होम पेज में आपका स्वागत है।",
    },
    durationAfterSpeech: 2000,
  },
];
