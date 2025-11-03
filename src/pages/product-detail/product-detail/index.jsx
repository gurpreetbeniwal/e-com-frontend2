import BrandsSlider from "@/components/common/BrandsSlider";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Description from "@/components/product-detail/Description";
import Details1 from "@/components/product-detail/Details1";
import Relatedproducts from "@/components/product-detail/Relatedproducts";
import SimilerProducts from "@/components/product-detail/SimilerProducts";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { allProducts } from "@/data/products";
import MetaComponent from "@/components/common/MetaComponent";
import Header3 from "@/components/headers/Header3";

const metadata = {
  title: "Product Details || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function ProductDetailPage() {
  let params = useParams();
  const id = params.id;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
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
              <span className="body-small">Product Detail</span>
            </li>
          </ul>
        </div>
      </div>
      <Details1 product={product} />
      <Description />
      <SimilerProducts />
      <Relatedproducts />
      <BrandsSlider />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
