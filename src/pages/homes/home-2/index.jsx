import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-2/Hero";
import React from "react";
import Categories from "@/components/homes/home-2/Categories";
import Products1 from "@/components/common/Products6";
import Banner from "@/components/homes/home-2/Banner";
import Products2 from "@/components/homes/home-2/Products2";
import Products3 from "@/components/homes/home-2/Products3";
import Banner2 from "@/components/homes/home-2/Banner2";
import Products4 from "@/components/homes/home-2/Products4";
import Products5 from "@/components/common/Products2";
import Collections from "@/components/homes/home-2/Collections";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 02 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header2 />
      <Hero />
      <Features parentClass="tf-sp-2" />
      <Categories />
      <Products1 />
      <Banner />
      <Products2 />
      <Products3 />
      <Banner2 />
      <Products4 />
      <Products5 />
      <Collections />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
