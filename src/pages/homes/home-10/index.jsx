import Banner2 from "@/components/common/Banner2";
import BrandsSlider from "@/components/common/BrandsSlider";
import Products4 from "@/components/common/Product4";
import Products from "@/components/common/Products";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header8 from "@/components/headers/Header8";
import Topbar1 from "@/components/headers/Topbar1";
import Categories from "@/components/homes/home-10/Categories";
import Hero from "@/components/homes/home-10/Hero";
import Products1 from "@/components/homes/home-10/Products1";
import Products2 from "@/components/homes/home-10/Products2";
import Products3 from "@/components/homes/home-10/Products3";
import Products5 from "@/components/homes/home-10/Products5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 10 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage10() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header8 />
      <Hero />
      <div className="main-page">
        <Categories />
        <Products1 />
        <Products2 />
        <Products4 />
        <Products3 />
        <Products5 />
        <BrandsSlider />
        <Banner2 />
        <Products parentClass="tf-sp-2 sm-pt--30 pb-0" />
        <RecentProducts parentClass="tf-sp-2" />
      </div>
      <Footer1 />
    </>
  );
}
