import React, { useState } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import TabOptions from '../common/TabOptions'
import Delivery from '../DeliveryComponents/Delivery'
import DinigOut from '../DeliveryComponents/DinigOut'
import NightLife from '../DeliveryComponents/NightLife'

const Layout = () => {

  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DinigOut />;

    case "Nightlife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};


export default Layout
