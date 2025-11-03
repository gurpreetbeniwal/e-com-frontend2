import BrandsSlider from "@/components/common/BrandsSlider";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Description4 from "@/components/product-detail/Description4";
import Details6 from "@/components/product-detail/Details6";
import Relatedproducts from "@/components/product-detail/Relatedproducts";
import SimilerProducts from "@/components/product-detail/SimilerProducts";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Product Details 04 || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function ProductDetailPage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header4 />
      <div className="bg-3">
        <div className="tf-sp-1">
          <div className="container">
            <ul className="breakcrumbs">
              <li>
                <Link to={`/`} className="body-small link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <i className="icon icon-arrow-right" />
              </li>
              <li>
                <Link to={`/product-grid`} className="body-small link">
                  {" "}
                  Shop{" "}
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <i className="icon icon-arrow-right" />
              </li>
              <li>
                <span className="body-small">Product Detail 4</span>
              </li>
            </ul>
          </div>
        </div>
        <Details6 />
        <Description4 />
        <SimilerProducts />
        <Relatedproducts />
        <BrandsSlider />
        <RecentProducts />{" "}
      </div>
      <Footer1 />
    </>
  );
}
