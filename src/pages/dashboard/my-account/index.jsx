import MyAccount from "@/components/dashboard/MyAccount";
import Sidebar from "@/components/dashboard/Sidebar";
import Footer1 from "@/components/footers/Footer1";
// import Header4 from "@/components/headers/Header4";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { toast } from "react-toastify";
import Header3 from "@/components/headers/Header3";

const metadata = {
  title: "My Account || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};

export default function MyAccountPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('🔐 Please log in to access your account', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
      <div className="tf-sp-1 pb-0">
        <div className="container">
          <ul className="breakcrumbs">
            <li>
              <Link to={`/`} className="body-small link">
                Home
              </Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="icon icon-arrow-right" />
            </li>
            <li>
              <span className="body-small">Account</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="tf-sp-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="wrap-sidebar-account">
                <ul className="my-account-nav content-append">
                  <Sidebar />
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <MyAccount />
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}
