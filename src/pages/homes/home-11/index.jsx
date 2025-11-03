import Features from "@/components/common/Features";
import Products4 from "@/components/common/Product4";
import Products6 from "@/components/common/Products6";
import Footer1 from "@/components/footers/Footer1";
import Header9 from "@/components/headers/Header9";
import Topbar2 from "@/components/headers/Topbar2";
import Banner from "@/components/homes/home-11/Banner";
import Blogs from "@/components/homes/home-11/Blogs";
import Categories from "@/components/homes/home-11/Categories";
import Hero from "@/components/homes/home-11/Hero";
import Products1 from "@/components/homes/home-11/Products1";
import Products2 from "@/components/homes/home-11/Products2";
import Products3 from "@/components/homes/home-11/Products3";
import Products5 from "@/components/homes/home-11/Products5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 11 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage11() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 parentClass="tf-topbar bg-gray line-bt-2" />
      <Header9 />
      <Hero />
      <Categories />
      <Products6 parentClass="tf-sp-2 pt-0" />
      <Products4 />
      <Products1 />
      <Banner />
      <Products2 />
      <Products3 />
      <Products5 />
      <Blogs />
      <Features parentClass="tf-sp-2 pt-0" />
      <Footer1 />
    </>
  );
}
