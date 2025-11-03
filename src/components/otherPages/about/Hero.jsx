import React from "react";

export default function Hero() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title-2">
          <div className="box-title">
            <h3 className="fw-semibold">Welcome to Onsus</h3>
            <p className="product-title">
              Blend contemporary designs with timeless elegance
            </p>
          </div>
          <div className="box-text">
            At Onsus, we offer meticulously curated collections that seamlessly
            combine modern <br className="d-none d-xl-block" />
            aesthetics with classic sophistication. With more than 15 years of
            expertise, we serve <br className="d-none d-xl-block" />
            fashion lovers who value quality, elegance, and adaptability.
          </div>
        </div>
        <div
          className="parallaxie parallax-style"
          style={{ background: 'url("/images/section/parallax-3.jpg")' }}
        />
      </div>
    </section>
  );
}
