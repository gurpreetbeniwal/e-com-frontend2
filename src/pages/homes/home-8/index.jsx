import Banner2 from "@/components/common/Banner2";
import BrandsSlider from "@/components/common/BrandsSlider";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Topbar1 from "@/components/headers/Topbar1";
import Hero from "@/components/homes/home-8/Hero";
import Products1 from "@/components/homes/home-8/Products1";
import Products2 from "@/components/homes/home-8/Products2";
import Products3 from "@/components/homes/home-8/Products3";
import Products4 from "@/components/homes/home-8/Products4";
import Products5 from "@/components/homes/home-8/Products5";
import Products6 from "@/components/homes/home-8/Products6";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 08 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage8() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header6 />
      <Hero />
      <Products1 />
      <Products2 />
      <Products3 />
      <Products4 />
      <Products5 />
      <Banner2 />
      <Products6 />
      <BrandsSlider />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
