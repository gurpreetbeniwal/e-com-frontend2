import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Compare from "@/components/shop-cart/Compare";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Compare || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function ComparePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header4 />
      <div className="tf-sp-3 pb-0">
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
              <span className="body-small"> Compare</span>
            </li>
          </ul>
        </div>
      </div>
      <Compare />
      <Footer1 />
    </>
  );
}
