import Header3 from "@/components/headers/Header3";
import Banner2 from "@/components/common/Banner2";
import Categories from "@/components/common/Categories";
import Hero from "@/components/homes/home-3/Hero";
import Products1 from "@/components/homes/home-3/Products1";
import Products2 from "@/components/homes/home-3/Products2";
import Products3 from "@/components/common/Product4";
import Products4 from "@/components/homes/home-3/Products4";
import Products5 from "@/components/homes/home-3/Products5";
import Products6 from "@/components/homes/home-3/Products6";
import React from "react";
import Products from "@/components/common/Products";
import RecentProducts from "@/components/common/RecentProducts";
import Features2 from "@/components/common/Features2";
import Footer1 from "@/components/footers/Footer1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 03 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
      <Hero />
      <Products1 />
      <Categories />
      <Products2 />
      {/* <Products3 />
      <Products4 />
      <Products5 /> */}
      {/* <Products6 /> */}
      <Banner2 />
      {/* <Products parentClass="tf-sp-2 pb-0" /> */}
      {/* <RecentProducts /> */}
      <Features2 />
      <Footer1 />
    </>
  );
}
