import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

function ProductsPage() {
  return (
    <>
      <Hero />
        <LeftSection
            imageURL=" /assets/kite.png "
            ProductName="Kite"
            productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            trydemo=""
            learnmore=""
            googleplay=""
            appstore=""
        />
        <LeftSection
            imageURL=" /assets/kite.png "
            ProductName="Coin"
            productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
            trydemo=""
            learnmore=""
            googleplay=""
            appstore=""
        />
        <LeftSection
            imageURL=" /assets/varsity.png "
            ProductName="Varsity mobile"
            productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            trydemo=""
            learnmore=""
            googleplay=""
            appstore=""
        />

      <RightSection />
      <Universe />
      <OpenAccount />
    </>
  );
}

export default ProductsPage;
