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
import{apparelorders} from "./data/Apparel/apparelorders/apparelorders"
import{apparelarticles} from "./data/Apparel/apparelarticles/apparelarticles"
import{apparelpurchases} from "./data/Apparel/apparelpurchases/apparelpurchases"
import{apparelkhata} from "./data/Apparel/apparelkhata/apparelkhata"
import{apparelstoresetting} from "./data/Apparel/apparelstoresetting/apparelstoresetting"
import{apparelvisionai} from "./data/Apparel/apparelvisionai/apparelvisionai"
import{electronicscustomersales} from "./data/Electronics/electronicscustomersales"
import{electronicsrepairs} from "./data/Electronics/electronicsrepairs"
import{electronicsstock} from "./data/Electronics/electronicsstock"
import{electronicspurchases} from "./data/Electronics/electronicspurchases"
import{electronicskhata} from "./data/Electronics/electronicskhata"
import{Ejobcards} from "./data/Electronics/electronicsOperations/Ejobcards"
import{Ewarranty} from "./data/Electronics/electronicsOperations/Ewarranty"

const kiranaPageSteps: Record<string, any> = {

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
  "Login": phoneLoginSteps,
  "Login with Phone Number": phoneLoginSteps,
  "Login with Username": usernameLoginSteps,
  "Customer Sales": opticalcustomersales,
  "Booking": booking,
  "Stock": opticalstock,
  "Purchases": opticalpurchases,
  "Khata": Khata,
  "Customer Growth": customerGrowthSteps,
  "Customer Relations": customerRelationsSteps,
  "Staff": staffSteps,
  "Estimates & Return": estimateSteps,
  "Stock Racks": stockRackSteps,
  "Job Cards": jobcards,
  "Warranty & Serials": warranty,
  "Loyalty Offers": loyaltyOffers,
  "Switch/Add Store": switchStore,
  "Store Setting":opticalstore,
  "Language": language,
  "Password & Security":password,
  "Vision AI": visionSteps,

};

const apparelPageSteps: Record<string,any>={
  "Login": phoneLoginSteps,
  "Login with Phone Number": phoneLoginSteps,
  "Login with Username": usernameLoginSteps,
  "Customer Sales": apparelcustomersales,
  "Orders": apparelorders,
  "Articles": apparelarticles,
  "Purchases": apparelpurchases,
  "Khata": apparelkhata,
  "Customer Growth": customerGrowthSteps,
  "Customer Relations": customerRelationsSteps,
  "Staff": staffSteps,
  "Estimates & Return": estimateSteps,
  "Stock Racks": stockRackSteps,
  "Job Cards": jobcards,
  "Loyalty Offers": loyaltyOffers,
  "Switch/Add Store": switchStore,
  "Store Setting": apparelstoresetting,
  "Language": language,
  "Password & Security":password,
  "Vision AI": apparelvisionai,

}

const electronicsPageSteps: Record<string,any>={
  "Login": phoneLoginSteps,
  "Login with Phone Number": phoneLoginSteps,
  "Login with Username": usernameLoginSteps,
  "Customer Sales": electronicscustomersales,
  "Repairs": electronicsrepairs,
  "Stock": electronicsstock,
  "Purchases": electronicspurchases,
  "Khata": electronicskhata,
  "Customer Growth": customerGrowthSteps,
  "Customer Relations": customerRelationsSteps,
  "Staff": staffSteps,
  "Estimates & Return": estimateSteps,
  "Stock Racks": stockRackSteps,
  "Job Cards": Ejobcards,
  "Warranty & Sales": Ewarranty,
  "Loyalty Offers": loyaltyOffers,
  "Switch/Add Store": switchStore,
  "Store Setting": apparelstoresetting,
  "Language": language,
  "Password & Security":password,
  "Vision AI": apparelvisionai,

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