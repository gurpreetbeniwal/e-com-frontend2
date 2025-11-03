import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Faqs from "@/components/otherPages/Faqs";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Faq || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function FaqPage() {
  return (
    <>
      <MetaComponent meta={metadata} /> <Header4 />
      <div className="tf-sp-3">
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
              <span className="body-small">Faqs</span>
            </li>
          </ul>
        </div>
      </div>
      <Faqs />
      <Footer1 />
    </>
  );
}
