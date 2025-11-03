import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Banner4() {
  return (
    <section>
      <div className="container">
        <Swiper
          className="swiper tf-sw-categories overflow-xxl-visible"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd44",
          }}
        >
          <SwiperSlide className="swiper-slide">
            <Link
              to={`/shop-default`}
              className="banner-image-product-2 style-2 type-sp-2 hover-img d-block"
            >
              <div className="item-image img-style overflow-visible position3">
                <img
                  src="/images/item/camera-1.png"
                  alt=""
                  className="lazyload"
                  width={231}
                  height={230}
                />
              </div>
              <div
                className="item-banner has-bg-img ps-xxl-3"
                style={{ backgroundImage: "url(/images/banner/banner-24.jpg)" }}
              >
                <div className="inner">
                  <div className="box-sale-wrap box-price type-3 relative ps-0">
                    <p className="small-text sub-price">From</p>
                    <p className="main-title-2 num-price">$1.399</p>
                  </div>
                  <h4 className="name fw-normal text-white lh-lg-38 text-xxl-center text-line-clamp-2">
                    ThinkPad X1
                    <span className="fw-xxl-bold">Carbon</span>
                    <br className="" />
                    <span className="fw-bold d-xxxl-none">
                      4K HDR-Core i7 32GB
                    </span>
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          {/* item 2 */}
          <SwiperSlide className="swiper-slide">
            <Link
              to={`/shop-default`}
              className="banner-image-product-2 type-sp-2 hover-img d-block"
            >
              <div className="item-image img-style overflow-visible position2">
                <img
                  src="/images/item/laptop.png"
                  alt=""
                  className="lazyload"
                  width={239}
                  height={227}
                />
              </div>
              <div
                className="item-banner has-bg-img"
                style={{ backgroundImage: "url(/images/banner/banner-3.jpg)" }}
              >
                <div className="inner justify-content-xl-end">
                  <div className="box-sale-wrap type-3 relative">
                    <p className="small-text">From</p>
                    <p className="main-title-2">$399</p>
                  </div>
                  <h4 className="name fw-normal text-white lh-lg-38 text-xl-end">
                    Lenovo ThinkBook
                    <br />
                    <span className="fw-bold"> 8GB/MX450 2GB </span>
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <div className="sw-dot-default sw-pagination-categories justify-content-center spd44" />
        </Swiper>
      </div>
    </section>
  );
}
