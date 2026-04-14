import React from "react";
import Cover from "./Cover";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import DressStyle from "./DressStyle";
import HappyCustomers from "../../components/Testimonials/HappyCustomers";

function Home() {
  return (
    <>
      <Cover />
      <section id="new-arrivals">
        <NewArrivals />
      </section>
      <section id="top-selling">
        <TopSelling />
      </section>
      <DressStyle />
      <HappyCustomers />
    </>
  );
}

export default Home;
