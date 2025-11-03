import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Privacy || Onsus - Multipurpose Reactjs eCommerce Template",
  description: "Onsus - Multipurpose Reactjs eCommerce Template",
};
export default function PrivacyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header4 />
      <div className="tf-sp-1 pb-0">
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
              <span className="body-small">Privacy</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="tf-sp-2">
        <div className="container">
          <div className="privary-wrap">
            <div className="entry-privary">
              <div className="wrap">
                <h4 className="fw-semibold">Who we are</h4>
                <p className="title-sidebar-2 text-main-2">
                  <span className="fw-medium">Suggested text:</span> Our website
                  address is: http://example.com
                </p>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">Comments (If Applicable)</h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      When visitors leave comments on the site, we collect the
                      data shown in the comments form, and also the visitor's IP
                      address and browser user agent string to help spam
                      detection.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      An anonymized string created from your email address (also
                      called a hash) may be provided to the Gravatar service to
                      see if you are using it. The Gravatar service privacy
                      policy is available here:
                      <Link
                        to={`/privacy`}
                        className="link text-secondary fw-semibold"
                        target="_blank"
                      >
                        Privacy
                      </Link>
                      .
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      After approval of your comment, your profile picture is
                      visible to the public in the context of your comment.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Please note that customer reviews may be used for
                      promotional purposes, without disclosing personal
                      information.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">Media (Product Images)</h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you upload product images to the website, you should
                      avoid uploading images with embedded location data (EXIF
                      GPS) included. Visitors to the website can download and
                      extract any location data from images on the website.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Customers' product images could be used for warranty
                      purposes, or for dealing with product-related issues.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">Cookies</h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you leave a comment on our site, you may opt-in to
                      saving your name, email address, and website in cookies.
                      These are for your convenience so that you do not have to
                      fill in your details again when you leave another comment.
                      These cookies will last for one year.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you visit our login page, we will set a temporary
                      cookie to determine if your browser accepts cookies. This
                      cookie contains no personal data and is discarded when you
                      close your browser.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      When you log in, we will also set up several cookies to
                      save your login information and your screen display
                      choices. Login cookies last for two days, and screen
                      options cookies last for a year. If you select "Remember
                      Me", your login will persist for two weeks. If you log out
                      of your account, the login cookies will be removed.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you edit or publish an article, an additional cookie
                      will be saved in your browser. This cookie includes no
                      personal data and simply indicates the post ID of the
                      article you just edited. It expires after 1 day.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      This electronic store website uses cookies to save the
                      customer's shopping cart information and to store what
                      products a client has viewed, to recommend related
                      products.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">
                  Embedded Content From Other Websites
                </h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Articles on this site may include embedded content (e.g.,
                      videos, images, articles, etc.). Embedded content from
                      other websites behaves in the exact same way as if the
                      visitor has visited the other website.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      These websites may collect data about you, use cookies,
                      embed additional third-party tracking, and monitor your
                      interaction with that embedded content, including tracking
                      your interaction with the embedded content if you have an
                      account and are logged in to that website.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">Who We Share Your Data With</h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you request a password reset, your IP address will be
                      included in the reset email.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Customer information will be shared with shipping services
                      in order to deliver products.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Customer information could be shared with product
                      suppliers in order to support warranties.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Information could be shared with payment processors in
                      order to process transactions.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">How Long We Retain Your Data</h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you leave a comment, the comment and its metadata are
                      retained indefinitely. This is so we can recognize and
                      approve any follow-up comments automatically instead of
                      holding them in a moderation queue.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      For users that register on our website (if any), we also
                      store the personal information they provide in their user
                      profile. All users can see, edit, or delete their personal
                      information at any time (except they cannot change their
                      username). Website administrators can also see and edit
                      that information.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Purchase information is retained to support warranties and
                      customer support.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">
                  What Rights You Have Over Your Data
                </h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If you have an account on this site, or have left
                      comments, you can request to receive an exported file of
                      the personal data we hold about you, including any data
                      you have provided to us.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      You can also request that we erase any personal data we
                      hold about you. This does not include any data we are
                      obliged to keep for administrative, legal, or security
                      purposes.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h4 className="fw-semibold">
                  Additional Notes for an Electronics Store
                </h4>
                <ul className="text-list">
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Customer information is used for warranty and technical
                      support purposes to ensure proper service and assistance.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      If necessary, we may collect computer or laptop
                      configuration details to provide accurate support
                      services.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      Customer information may be used for marketing purposes,
                      such as promotional emails and product recommendations.
                      Customers have the option to opt out at any time.
                    </p>
                  </li>
                  <li>
                    <p className="title-sidebar-2 text-main-2">
                      We implement security measures, including data encryption,
                      to protect customer information and ensure privacy.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer1 />
    </>
  );
}
