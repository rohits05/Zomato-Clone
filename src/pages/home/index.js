import React, { useState } from "react";
import Footer from "../../Components/Common/footer";
import Header from "../../Components/Common/header";
import TabOptions from "../../Components/Common/tabOptions";
import Delivery from "../../Components/delivery";
import DiningOut from "../../Components/diningOut";
import Nightlife from "../../Components/nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return {Delivery}

    case "Dining Out":
      return {DiningOut}

    case "Nightlife":
      return {Nightlife}

    default:
      return {Delivery}
  }
};
export default HomePage;