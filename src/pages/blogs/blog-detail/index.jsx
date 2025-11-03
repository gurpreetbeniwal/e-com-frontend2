import BlogDetails from "@/components/blogs/BlogDetails";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import { Link } from "react-router-dom";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blog Details || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};

export default function BlogDetailPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header4 />
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
              <span className="body-small">Blog Details</span>
            </li>
          </ul>
        </div>
      </div>
      <BlogDetails />
      <RecentProducts />

      <Footer1 />
    </>
  );
}
