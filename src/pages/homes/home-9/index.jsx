import BrandsSlider from "@/components/common/BrandsSlider";
import Features from "@/components/common/Features";
import Products4 from "@/components/common/Product4";
import Products5 from "@/components/common/Products5";
import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import Topbar1 from "@/components/headers/Topbar1";
import Hero from "@/components/homes/home-9/Hero";
import Products from "@/components/homes/home-9/Products";
import Products2 from "@/components/homes/home-9/Products2";
import Products3 from "@/components/homes/home-9/Products3";
import Products6 from "@/components/homes/home-9/Products6";
import Products7 from "@/components/homes/home-9/Products7";
import Products8 from "@/components/homes/home-9/Products8";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 09 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage9() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header7 />
      <Hero />
      <Features parentClass="themesFlat" />
      <Products />
      <Products2 />
      <Products4 />
      <Products3 />
      <Products6 />
      <Products7 />
      <Products8 />
      <BrandsSlider />
      <Products5 parentClass="tf-sp-2" />
      <Footer1 />
    </>
  );
}
