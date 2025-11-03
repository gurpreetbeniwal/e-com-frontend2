import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Contact from "@/components/otherPages/Contact";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
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
              <span className="body-small">Contact</span>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
      <RecentProducts parentClass="tf-sp-2 pt-0" />
      <Footer1 />
    </>
  );
}
