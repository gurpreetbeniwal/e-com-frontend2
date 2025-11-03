import React from "react";

export default function OrderTraking() {
  return (
    <section className="s-track-order tf-sp-2">
      <div className="container">
        <div className="position-relative">
          <div className="parallax-image">
            <img
              src="/images/section/parallax-3.jpg"
              alt=""
              className="lazyload effect-paralax"
              width={1490}
              height={700}
            />
          </div>
          <div className="wrap">
            <div className="box-title">
              <h5 className="fw-semibold">Track your order</h5>
              <p className="body-text-3">
                To track your order, please enter your order ID in the box below
                and press the "Track" button. The ID has been sent to you on
                your receipt and in the confirmation email you received.
              </p>
            </div>
            <form action="#" className="form-trackorder def">
              <fieldset>
                <label>Oder ID</label>
                <input
                  className="def"
                  type="text"
                  placeholder="Found in your order confirmation email"
                  required=""
                />
              </fieldset>
              <fieldset>
                <label>Order email</label>
                <input
                  className="def"
                  type="text"
                  placeholder="Email you used during checkout"
                  required=""
                />
              </fieldset>
              <div className="box-btn">
                <button type="submit" className="tf-btn w-100">
                  <span className="text-white">Track</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
