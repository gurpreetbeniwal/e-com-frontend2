import Header5 from "@/components/headers/Header5";
import Topbar1 from "@/components/headers/Topbar1";
import Categories from "@/components/common/Categories";
import Hero from "@/components/homes/home-6/Hero";
import React from "react";
import Collections from "@/components/homes/home-6/Collections";
import Products1 from "@/components/homes/home-6/Products1";
import Products2 from "@/components/homes/home-6/Products2";
import Products3 from "@/components/homes/home-6/Products3";
import BrandsSlider from "@/components/common/BrandsSlider";
import Products4 from "@/components/common/Products2";
import Products5 from "@/components/common/Products5";
import Footer1 from "@/components/footers/Footer1";
import Features2 from "@/components/common/Features2";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 06 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header5 />
      <Hero />
      <Categories parentClass="tf-sp-7" />
      <Collections />
      <Products1 />
      <Products2 />
      <Products3 />
      <BrandsSlider />
      <Products4 parentClass="tf-sp-2" />
      <Products5 />
      <Features2 />
      <Footer1 />
    </>
  );
}
