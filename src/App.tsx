import { useState,useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import TrainingPlayer from "./components/TrainingPlayer/TrainingPlayer";
import Navbar from "./components/Navbar/Navbar";
import type { Vertical } from "./types/vertical";
import { kiranaSidebar } from "./config/kiranaSidebar";
import { opticalSidebar } from "./config/opticalSidebar";
import { apparelSidebar } from "./config/apparelSidebar";
import { electronicsSidebar } from "./config/electronicsSidebar";
import {phoneSigninSteps} from "./data/Signin/phoneSigninsteps"
import { phoneLoginSteps } from "./data/Login/phoneLoginSteps";
import { usernameLoginSteps } from "./data/Login/usernameLoginSteps";
import { Khata } from "./data/Khata/Khata";
import { visionSteps } from "./data/visionSteps";
import { customerSalesSteps } from "./data/CustomerSales/customerSalesSteps";
import { stockSteps } from "./data/Stock/stockSteps";
import {purchaseSteps} from "./data/Purchases/purchaseSteps";
import { customerGrowthSteps } from "./data/CustomerManagement/customerGrowthSteps";
import { customerRelationsSteps } from "./data/CustomerManagement/customerRelationsSteps";
import{staffSteps} from "./data/Operations/staffSteps";
import{estimateSteps} from "./data/Operations/estimateSteps";
import{stockRackSteps} from "./data/Operations/stockRackSteps";
import{ myBaskets } from "./data/SalesMarketing/myBaskets";
import{ loyaltyOffers } from "./data/SalesMarketing/loyaltyOffers";
import{storeSettings} from "./data/StoreManagement/storeSettings"
import{switchStore} from "./data/StoreManagement/switchStore"
import{language} from "./data/Account/language"
import{password} from "./data/Account/password"
import{opticalcustomersales} from "./data/Opticals/OpticalsCustomerSales/opticalCustomerSales"
import{booking} from "./data/Opticals/OpticalsBooking/booking"
import{opticalstock} from "./data/Opticals/OpticalsStock/opticalStock"
import{opticalpurchases} from "./data/Opticals/OpticalsPurchases/opticalPurchases"
import{jobcards} from "./data/Opticals/OpticalsOperations/jobCards"
import{warranty} from "./data/Opticals/OpticalsOperations/warranty"
import{opticalstore} from "./data/Opticals/OpticalsStoreManagement/opticalStoreSettings"
import{apparelcustomersales} from "./data/Apparel/apparelcustomersales/apparelcustomersales"
import{opticalskhata} from "./data/Opticals/OpticalsKhata/opticalskhata"
import{apparelpurchases} from "./data/Apparel/apparelpurchases/apparelpurchases"
import{apparelstoresetting} from "./data/Apparel/apparelstoresetting/apparelstoresetting"
import{apparelswitchstore} from "./data/Apparel/apparelstoresetting/apparelswitchstore"
import{apparelvisionai} from "./data/Apparel/apparelvisionai/apparelvisionai"
import{apparelsignin} from "./data/Apparel/ApparelSignin/apparelsignin"
import{apparellogin} from "./data/Apparel/ApparelLogin/apparellogin"
import{apparelusernamelogin} from "./data/Apparel/ApparelLogin/apparelusernamelogin"
import{apparelkhata} from "./data/Apparel/ApparelKhata/apparelkhata"
import{apparelcustomergrowth} from "./data/Apparel/ApparelCustomerManagement/apparelcustomergrowth"
import{apparelcustomerrelations} from "./data/Apparel/ApparelCustomerManagement/apparelcustomerrelations"
import{appareljobcards} from "./data/Apparel/ApparelOperations/appareljobcards"
import{apparelreturn} from "./data/Apparel/ApparelOperations/apparelreturn"
import{apparelstaff} from "./data/Apparel/ApparelOperations/apparelstaff"
import{apparelstockrack} from "./data/Apparel/ApparelOperations/apparelstockrack"
import{apparelloyalty} from "./data/Apparel/ApparelLoyalty/apparelloyalty"
import{apparellanguage} from "./data/Apparel/ApparelAccount/apparellanguage"
import{apparelpass} from "./data/Apparel/ApparelAccount/apparelpass"
import{electronicscustomersales} from "./data/Electronics/electronicscustomersales"
import{electronicsrepairs} from "./data/Electronics/electronicsrepairs"
import{electronicsstock} from "./data/Electronics/electronicsstock"
import{electronicslogin} from "./data/Electronics/ElectronicsLogin/electronicslogin"
import{electronicsusername} from "./data/Electronics/ElectronicsLogin/electronicsusername"
import{electronicssignin} from "./data/Electronics/ElectronicsSignin/electronicssignin"
import{electronicspurchase} from "./data/Electronics/ElectronicsPurchases/electronicspurchase"
import{electronicskhata} from "./data/Electronics/ElectronicsKhata/electronicskhata"
import{electronicscg} from "./data/Electronics/ElectronicsCM/electronicscg"
import{electronicscr} from "./data/Electronics/ElectronicsCM/electronicscr"
import{elecstaff} from "./data/Electronics/ElectronicsOperations/elecstaff"
import{elecreturns} from "./data/Electronics/ElectronicsOperations/elecreturns"
import{elecwarranty} from "./data/Electronics/ElectronicsOperations/elecwarranty"
import{elecstockracks} from "./data/Electronics/ElectronicsOperations/elecstockracks"
import{elecloyalty} from "./data/Electronics/elecloyalty"
import{elecssettings} from "./data/Electronics/ElectronicsSM/elecssettings"
import{eleclanguage} from "./data/Electronics/ElectronicsAccount/eleclanguage"
import{elecpass} from "./data/Electronics/ElectronicsAccount/elecpass"
import{elecswitch} from "./data/Electronics/ElectronicsSM/elecswitch"
import{electronicsvision} from "./data/Electronics/electronicsvision"
import{opticalslogin} from "./data/Opticals/OpticalsLogin/opticalslogin"
import{usernameopticallogin} from "./data/Opticals/OpticalsLogin/usernameopticallogin"
import {opticalssignin} from "./data/Opticals/OpticalsSignin/opticalssignin"
import {opticalscustomergrowth} from "./data/Opticals/OpticalsCustomerGrowth/opticalscustomergrowth"
import {opticalscustomerrelations} from "./data/Opticals/OpticalsCustomerRelations/opticalscustomerrelations"
import {opticalsstaff} from "./data/Opticals/OpticalsOperations/opticalsstaff"
import {opticalsreturns} from "./data/Opticals/OpticalsOperations/opticalsreturns"
import {opticalsstockracks} from "./data/Opticals/OpticalsOperations/opticalsstockracks"
import {opticalsloyalty} from "./data/Opticals/OpticalsLoyalty/opticalsloyalty"
import {opticalswitchstore} from "./data/Opticals/OpticalsStoreManagement/opticalswitchstore"
import {opticalslanguage} from "./data/Opticals/OpticalsAccount/opticalslanguage"
import {opticalspass} from "./data/Opticals/OpticalsAccount/opticalspass"
import {opticalsvision} from "./data/Opticals/OpticalsVision/opticalsvision"

const kiranaPageSteps: Record<string, any> = {

  "SignUp":phoneSigninSteps,
  "SignUp with Phone Number": phoneSigninSteps,
  "Login": phoneLoginSteps,
  "Login with Phone Number": phoneLoginSteps,
  "Login with Username": usernameLoginSteps,
  "Customer Sales": customerSalesSteps, 
  "Stock": stockSteps,         
  "Purchases": purchaseSteps,  
  "Customer Growth": customerGrowthSteps,
  "Customer Relations": customerRelationsSteps,
  "Staff":staffSteps,
  "Estimates & Return": estimateSteps,
  "Stock Racks": stockRackSteps,
  "My Baskets": myBaskets,
  "Loyalty Offers": loyaltyOffers,
  "Switch/Add Store": switchStore,
  "Store Setting": storeSettings,
  "Khata": Khata,
  "Language": language,
  "Password & Security": password,
  "Vision AI": visionSteps,
};

const opticalPageSteps: Record<string, any> = {
  "SignUp":opticalssignin,
  "SignUp with Phone Number": opticalssignin,
  "Login": opticalslogin,
  "Login with Phone Number": opticalslogin,
  "Login with Username": usernameopticallogin,
  "Customer Sales": opticalcustomersales,
  "Booking": booking,
  "Stock": opticalstock,
  "Purchases": opticalpurchases,
  "Khata": opticalskhata,
  "Customer Growth": opticalscustomergrowth,
  "Customer Relations": opticalscustomerrelations,
  "Staff": opticalsstaff,
  "Estimates & Return": opticalsreturns,
  "Stock Racks": opticalsstockracks,
  "Job Cards": jobcards,
  "Warranty & Serials": warranty,
  "Loyalty Offers": opticalsloyalty,
  "Switch/Add Store": opticalswitchstore,
  "Store Setting":opticalstore,
  "Language": opticalslanguage,
  "Password & Security":opticalspass,
  "Vision AI": opticalsvision,

};

const apparelPageSteps: Record<string,any>={
  "SignUp":apparelsignin,
  "SignUp with Phone Number": apparelsignin,
  "Login": apparellogin,
  "Login with Phone Number": apparellogin,
  "Login with Username": apparelusernamelogin,
  "Orders / Articles": apparelcustomersales,
  "Purchases": apparelpurchases,
  "Khata": apparelkhata,
  "Customer Growth": apparelcustomergrowth,
  "Customer Relations": apparelcustomerrelations,
  "Staff": apparelstaff,
  "Estimates & Return": apparelreturn,
  "Stock Racks": apparelstockrack,
  "Job Cards": appareljobcards,
  "Loyalty Offers": apparelloyalty,
  "Switch/Add Store": apparelswitchstore,
  "Store Setting": apparelstoresetting,
  "Language": apparellanguage,
  "Password & Security":apparelpass,
  "Vision AI": apparelvisionai,

}

const electronicsPageSteps: Record<string,any>={
  "SignUp":electronicssignin,
  "SignUp with Phone Number": electronicssignin,
  "Login": electronicslogin,
  "Login with Phone Number": electronicslogin,
  "Login with Username": electronicsusername,
  "Customer Sales": electronicscustomersales,
  "Repairs": electronicsrepairs,
  "Stock": electronicsstock,
  "Purchases": electronicspurchase,
  "Khata": electronicskhata,
  "Customer Growth": electronicscg,
  "Customer Relations": electronicscr,
  "Staff": elecstaff,
  "Estimates & Return": elecreturns,
  "Stock Racks": elecstockracks,
  "Warranty & Serials": elecwarranty,
  "Loyalty Offers": elecloyalty,
  "Switch/Add Store": elecswitch,
  "Store Setting": elecssettings,
  "Language": eleclanguage,
  "Password & Security":elecpass,
  "Vision AI": electronicsvision,

}

function App() {
  const [selectedPage, setSelectedPage] = useState(
    "Login with Phone Number"
  );
  
  const [selectedVertical, setSelectedVertical] =
    useState<Vertical>("Kirana");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebars = {
    Kirana: kiranaSidebar,
    Opticals: opticalSidebar,
    Apparel: apparelSidebar,
    Electronics: electronicsSidebar,
  };

  const currentSidebar = sidebars[selectedVertical];
  const currentPageSteps ={
    Kirana: kiranaPageSteps,
    Opticals: opticalPageSteps,
    Apparel: apparelPageSteps,
    Electronics: electronicsPageSteps,
  };
  const currentSteps =
    currentPageSteps[selectedVertical][selectedPage] ?? phoneLoginSteps;

  useEffect(() => {
    setSelectedPage("Login with Phone Number");
  }, [selectedVertical]);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="app">
      <Navbar
        selectedVertical={selectedVertical}
        setSelectedVertical={setSelectedVertical}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="main-layout">
        <Sidebar
          menu={currentSidebar}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {sidebarOpen && (
          <div
              className="sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
          />
        )}
        <main className="app-body">
          <TrainingPlayer
            key={selectedPage}
            steps={currentSteps}
          />
        </main>
      </div>
    </div>
  );
}

export default App;