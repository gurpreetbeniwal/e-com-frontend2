// src/pages/account/OrderDetailsPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import Features2 from "@/components/common/Features2";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import MetaComponent from "@/components/common/MetaComponent";
import OrderDetails from "@/components/shop-cart/OrderDetails";
import Header3 from "@/components/headers/Header3";

const metadata = {
  title: "Order Details || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};

export default function OrderDetailsPage() {
  const { orderId } = useParams();
 

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
      <div className="tf-sp-3 pb-0">
        <div className="container">
          <ul className="breakcrumbs">
            <li>
              <Link to="/" className="body-small link">
                Home
              </Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="icon icon-arrow-right" />
            </li>
            <li>
              <span className="body-small">Order Detail</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pass orderId prop */}
      <OrderDetails orderId={orderId} />

      {/* <RecentProducts /> */}
      <Features2 />
      <Footer1 />
    </>
  );
}
