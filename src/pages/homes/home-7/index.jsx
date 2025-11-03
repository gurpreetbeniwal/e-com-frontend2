import BrandsSlider from "@/components/common/BrandsSlider";
import Header3 from "@/components/headers/Header3";
import Hero from "@/components/homes/home-7/Hero";
import Products1 from "@/components/homes/home-7/Products1";
import Products2 from "@/components/homes/home-7/Products2";
import Products3 from "@/components/homes/home-7/Products3";
import Products4 from "@/components/common/Products2";
import Products5 from "@/components/common/Products";
import React from "react";
import Banner2 from "@/components/common/Banner2";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 07 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage7() {
  return (
    <>
      <MetaComponent meta={metadata} /> <Header3 />
      <Hero />
      <Products1 />
      <BrandsSlider />
      <Products2 />
      <Products3 />
      <Products4 title="Smartphones" parentClass="tf-sp-2" />
      <Banner2 />
      <Products5 />
      <RecentProducts parentClass="tf-sp-2 pt-0" />
      <Footer1 />
    </>
  );
}
