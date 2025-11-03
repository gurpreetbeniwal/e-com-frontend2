import React from "react";

export default function Faqs() {
  return (
    <>
      {/* Search Faq */}
      <section className="s-search-faq">
        <div className="wrap">
          <div className="container">
            <div className="content">
              <div className="box-title text-center">
                <h2 className="title fw-semibold text-white">
                  Frequently asked questions
                </h2>
                <p className="text-white">
                  Please check this FAQ first before contacting us.
                </p>
              </div>
              <form action="#" className="form-search-3">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Enter your question or keyword"
                    required=""
                  />
                </fieldset>
                <button type="submit" className="button-submit">
                  <i className="icon-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="parallax-image">
          <img
            src="/images/section/parallax-2.jpg"
            alt=""
            className="lazyload effect-paralax"
            width={1920}
            height={700}
          />
        </div>
      </section>
      {/* /Search Faq */}
      {/* Faq */}
      <section className="tf-sp-2">
        <div className="container">
          <div className="s-faq flat-animate-tab">
            <div className="flat-title-tab-faq">
              <div className="tf-title">
                <h5 className="fw-bold">Hot Topics</h5>
              </div>
              <ul className="menu-tab-line" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#my-account"
                    className="tab-link link active"
                    data-bs-toggle="tab"
                  >
                    My account
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#ordering"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Ordering
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab1"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Pellentesque nec erat sed ex
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab2"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Nulla facilisi
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab3"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Sed venenatis ullamcorper odio non tincidunt
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab4"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Morbi fringilla diam turpis
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab5"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Non fermentum metus tempor
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab6"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Pellentesque erat odio
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab7"
                    className="tab-link link"
                    data-bs-toggle="tab"
                  >
                    Et blandit mauris
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="my-account"
                  role="tabpanel"
                >
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">My Account</h5>
                    <div className="faq-wrap" id="accordionMyAcc">
                      <div className="widget-accordion" id="headingOne">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-One"
                          aria-expanded="true"
                          aria-controls="collapseMyAcc-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Two"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree1">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Three"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree1"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour1">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Four"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour1"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Five"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Six"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Seven"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseMyAcc-Eight"
                          aria-expanded="false"
                          aria-controls="collapseMyAcc-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseMyAcc-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight"
                          data-bs-parent="#accordionMyAcc"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="ordering" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">Ordering</h5>
                    <div className="faq-wrap" id="accordionOrdering">
                      <div className="widget-accordion" id="headingOne1">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne1"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo1">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo1"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight2"
                          data-bs-parent="#accordionOrdering"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab1" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">
                      Pellentesque nec erat sed ex
                    </h5>
                    <div className="faq-wrap" id="accordionTab1">
                      <div className="widget-accordion" id="headingOne2">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-One"
                          aria-expanded="true"
                          aria-controls="collapseTab1-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne2"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo2">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo2"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab1-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab1-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab1-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight3"
                          data-bs-parent="#accordionTab1"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab2" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">Nulla facilisi</h5>
                    <div className="faq-wrap" id="accordionTab2">
                      <div className="widget-accordion" id="headingOne4">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-One"
                          aria-expanded="true"
                          aria-controls="collapseTab2-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo3">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo3"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab2-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab2-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab2-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight4"
                          data-bs-parent="#accordionTab2"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab3" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">
                      Sed venenatis ullamcorper odio non tincidunt
                    </h5>
                    <div className="faq-wrap" id="accordionTab3">
                      <div className="widget-accordion" id="headingOne5">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-One"
                          aria-expanded="true"
                          aria-controls="collapseTab3-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo4">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo4"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab3-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab3-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab3-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight5"
                          data-bs-parent="#accordionTab3"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab4" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">
                      Morbi fringilla diam turpis
                    </h5>
                    <div className="faq-wrap" id="accordionTab4">
                      <div className="widget-accordion" id="headingOne6">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-One"
                          aria-expanded="true"
                          aria-controls="collapseTab4-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo5">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo5"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab4-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab4-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab4-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight6"
                          data-bs-parent="#accordionTab4"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab5" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">
                      Non fermentum metus tempor
                    </h5>
                    <div className="faq-wrap" id="accordionTab5">
                      <div className="widget-accordion" id="headingOne7">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-One"
                          aria-expanded="true"
                          aria-controls="collapseTab5-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo6">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo6"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab5-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab5-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab5-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight7"
                          data-bs-parent="#accordionTab5"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab6" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">Pellentesque erat odio</h5>
                    <div className="faq-wrap" id="accordionTab6">
                      <div className="widget-accordion" id="headingOne8">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-One"
                          aria-expanded="true"
                          aria-controls="collapseTab6-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo7">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo7"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight8">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab6-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab6-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab6-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight8"
                          data-bs-parent="#accordionTab6"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab7" role="tabpanel">
                  <div className="faq-item">
                    <h5 className="name-faq fw-bold">Et blandit mauris</h5>
                    <div className="faq-wrap" id="accordionTab7">
                      <div className="widget-accordion" id="headingOne9">
                        <div
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-One"
                          aria-expanded="true"
                          aria-controls="collapseTab7-One"
                          role="button"
                        >
                          <span className="title-sidebar">
                            1. What canIdo ifIforgot my password?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-One"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-desc">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingTwo9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Two"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Two"
                          role="button"
                        >
                          <span className="title-sidebar">
                            2. Why cannotIreceive the SMS verification code?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Two"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <span className="icon">
                              <i className="icon-quote" />
                            </span>
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingThree">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Three"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Three"
                          role="button"
                        >
                          <span className="title-sidebar">
                            3. When willIreceive my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Three"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFour9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Four"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Four"
                          role="button"
                        >
                          <span className="title-sidebar">
                            4. How canIregister an account
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Four"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingFive9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Five"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Five"
                          role="button"
                        >
                          <span className="title-sidebar">
                            5. What can I do if my account was deactivated?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Five"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSix9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Six"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Six"
                          role="button"
                        >
                          <span className="title-sidebar">
                            6. How do I add the inspection service to my Trade
                            Assurance order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Six"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingSeven9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Seven"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Seven"
                          role="button"
                        >
                          <span className="title-sidebar">
                            7. How doIdelete verification phone number?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Seven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="widget-accordion" id="headingEight9">
                        <div
                          className="accordion-title collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTab7-Eight"
                          aria-expanded="false"
                          aria-controls="collapseTab7-Eight"
                          role="button"
                        >
                          <span className="title-sidebar">
                            8. How doIleave feedback for my order?
                          </span>
                          <span className="icon" />
                        </div>
                        <div
                          id="collapseTab7-Eight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight9"
                          data-bs-parent="#accordionTab7"
                        >
                          <div className="accordion-body widget-material">
                            <i className="icon-quote" />
                            <p className="text-main">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Curabitur ac tortor sit amet est egestas
                              lacinia vitae sit amet sem. Aliquam fringilla ex
                              at lorem faucibus auctor. Duis sollicitudin nec
                              nunc vitae interdum. Maecenas a tempus quam.
                              Suspendisse sit amet erat vehicula, fermentum
                              ipsum sit amet, tincidunt sapien. Duis scelerisque
                              quis ligula et fermentum. Donec id finibus neque,
                              in commodo diam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq */}
    </>
  );
}
