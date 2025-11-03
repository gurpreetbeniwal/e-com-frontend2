import Features from "@/components/common/Features";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Banner from "@/components/homes/home-5/Banner";
import Banner2 from "@/components/homes/home-5/Banner2";
import Banner3 from "@/components/homes/home-5/Banner3";
import Banner4 from "@/components/homes/home-5/Banner4";
import Blogs from "@/components/homes/home-5/Blogs";
import Brands from "@/components/homes/home-5/Brands";
import Categories from "@/components/homes/home-5/Categories";
import Collections from "@/components/homes/home-5/Collections";
import Products from "@/components/homes/home-5/Products";
import Products2 from "@/components/homes/home-5/Products2";
import Products3 from "@/components/homes/home-5/Products3";
import Products4 from "@/components/homes/home-5/Products4";
import Products5 from "@/components/homes/home-5/Products5";
import Products6 from "@/components/homes/home-5/Products6";
import Products7 from "@/components/homes/home-5/Products7";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home 05 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function HomePage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 parentClass="tf-topbar" />
      <Header1 />
      <div className="tf-sp-7">
        <div className="container">
          <div className="container-wrap">
            <div className="container-sidebar d-none">
              <Categories />
              <Products />
              <Banner />
              <Products2 />
              <Banner2 />
              <Brands />
              <Blogs />
            </div>
            <div className="container-main">
              <Collections />
              <Features hacontainer={false} />
              <Products3 />
              <Banner3 />
              <Products4 />
              <Products5 />
              <Banner4 />
              <Products6 />
              <Products7 />
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
