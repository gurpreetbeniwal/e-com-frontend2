import React from "react";
import CurrencySelect from "../common/CurrencySelect";
import LanguageSelect from "../common/LanguageSelect";

export default function Topbar1({ parentClass = "tf-topbar line-bt" }) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="topbar-left justify-content-xl-start h-100">
              <p className="body-small text-main-2">
                <i className="icon-headphone" /> Call us for free:{" "}
                <a
                  href="tel:+18001234567"
                  className="text-primary link-secondary fw-semibold"
                >
                  +1(800) 123 4567
                </a>
              </p>
              <p className="body-small text-main-2">
                Free Shipping on Orders{" "}
                <span className="fw-semibold text-main">$50+</span>
              </p>
            </div>
          </div>
          <div className="col-xl-6 d-none d-xl-block">
            <div className="tf-cur justify-content-end bar-lang">
              <div className="tf-cur-item tf-currencies gap-0">
                <i className="icon icon-budget " />
                <div className="tf-curs">
                  <CurrencySelect topStart />
                </div>
              </div>
              <div className="tf-cur-item tf-languages gap-0">
                <i className="icon icon-global " />
                <div className="tf-lans">
                  <LanguageSelect
                    topStart
                    parentClassName="image-select center style-default type-lan"
                  />
                </div>
              </div>
              <a
                href="#log"
                data-bs-toggle="modal"
                className="tf-cur-item link"
              >
                <i className="icon-user-3" />
                <span className="body-small">My account:</span>
                <i className="icon-arrow-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
