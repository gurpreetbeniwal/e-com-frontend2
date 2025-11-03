import { Link } from "react-router-dom";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AddToWishlist from "../common/AddToWishlist";
import AddToQuickview from "../common/AddToQuickview";
import AddToCompare from "../common/AddToCompare";
import { useState } from "react";
import CountdownTimer from "../common/Countdown";

const ProductCard2 = ({
  product,
  parentClass = "card-product style-border style-thums-2 p-lg-30 wow fadeInUp",
  typeClass = "",
}) => {
  const [thumbSlider, setThumbSlider] = useState(null);
  return (
    <div className={parentClass} data-wow-delay={0}>
      <div className="card-product-wrapper overflow-visible aspect-ratio-0">
        <div className={`product-thumb-slider thumbs-right ${typeClass} `}>
          <Swiper
            thumbs={{ swiper: thumbSlider }}
            className="swiper tf-product-view-main "
            modules={[Thumbs]}
          >
            {product.images.map((image, index) => (
              <SwiperSlide className="swiper-slide" key={`main-${index}`}>
                <Link
                  to={`/product-detail/${product.id}`}
                  className="d-block tf-image-view"
                >
                  <img
                    src={image}
                    alt={product.title}
                    className="lazyload"
                    width={857}
                    height={482}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="swiper tf-product-view-thumbs"
            onSwiper={setThumbSlider}
            {...{
              direction: "horizontal",
              spaceBetween: 10,
              slidesPerView: "auto",
              freeMode: true,
              watchSlidesProgress: true,
              observer: true,
              observeParents: true,
              nested: true,
              breakpoints: {
                0: {
                  direction: "horizontal",
                },
                576: {
                  direction: "vertical",
                },
              },
            }}
            modules={[FreeMode, Thumbs]}
          >
            {product.images.map((image, index) => (
              <SwiperSlide className="swiper-slide" key={`thumb-${index}`}>
                <div className="item">
                  <img
                    alt={product.title}
                    src={image}
                    width={857}
                    height={482}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {product.discount && (
          <div className="box-sale-wrap style-2 z-5">
            <p className="small-text">Save</p>
            <p className="title-sidebar-2">${product.discount.toFixed(3)}</p>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <div className="box-title gap-xl-6">
          <div className="d-flex flex-column">
            <h6 className="bg-white relative z-5">
              <Link
                to={`/product-detail/${product.id}`}
                className="name-product fw-semibold text-secondary link"
              >
                {product.title}
              </Link>
            </h6>
          </div>
          <div className="group-btn">
            <p className="price-wrap fw-medium">
              <span className="new-price h4 fw-normal text-primary mb-0">
                ${product.price.toFixed(3)}
              </span>
              {product.oldPrice && (
                <span className="old-price price-text text-main-2">
                  ${product.oldPrice.toFixed(3)}
                </span>
              )}
            </p>
            <ul className="list-product-btn flex-row">
              <li>{/* <AddToCart productId={product.id} /> */}</li>
              <li className="wishlist">
                <AddToWishlist productId={product.id} />
              </li>
              <li>
                <AddToQuickview productId={product.id} />
              </li>
              <li>
                <AddToCompare productId={product.id} />
              </li>
            </ul>
          </div>
        </div>
        {product.countdown && (
          <div className="box-infor-detail gap-xl-20">
            <div className="countdown-box">
              <div
                className="js-countdown"
                data-timer={product.countdown}
                data-labels="Days,Hours,Mins,Secs"
              >
                <CountdownTimer style={2} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard2;
