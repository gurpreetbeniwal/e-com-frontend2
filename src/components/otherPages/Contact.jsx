import React from "react";

export default function Contact() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="wg-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11678.740279919208!2d-75.53672684990242!3d39.167930537914174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c77b533177974f%3A0xd017ee22f8759803!2sWesley%20College%20%2F%20DSU!5e0!3m2!1sen!2s!4v1741056536407!5m2!1sen!2s"
            height={585}
            style={{ borderRadius: 8, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="bottom">
            <div className="contact-wrap">
              <div className="box-title">
                <h5 className="fw-semibold">Get A Quote</h5>
                <p className="body-text-3">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
              </div>
              <form action="#" className="form-contact def">
                <fieldset>
                  <label>Name</label>
                  <input type="text" required="" />
                </fieldset>
                <fieldset>
                  <label>Subject</label>
                  <input type="text" required="" />
                </fieldset>
                <fieldset className="d-flex flex-column">
                  <label>Your message</label>
                  <textarea
                    style={{ height: 170 }}
                    required=""
                    defaultValue={""}
                  />
                </fieldset>
                <div className="box-btn-submit">
                  <button type="submit" className="tf-btn text-white w-100">
                    Send message
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <h5 className="fw-semibold">Contact Infomation</h5>
              <ul className="info-list">
                <li>
                  <span className="icon">
                    <i className="icon-location" />
                  </span>
                  <a
                    href="https://www.google.com/maps?q=8500%20Lorem%20StreetChicago"
                    className="link"
                    target="_blank"
                  >
                    8500 Lorem Street Chicago, <br />
                    IL 55030 Dolor sit amet
                  </a>
                </li>
                <li>
                  <span className="icon">
                    <i className="icon-phone" />
                  </span>
                  <a
                    href="tel:1234567"
                    className="product-title fw-semibold link"
                  >
                    <span>+8(800) 123 4567</span>
                  </a>
                </li>
                <li>
                  <span className="icon">
                    <i className="icon-direction" />
                  </span>
                  <a href="mailto:onsus@support.com" className="link">
                    <span>onsus@support.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
