import { blogItems } from "@/data/blogs";
import { products18 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products2() {
  return (
    <section className="box-btn-slide-item">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <h5 className="fw-semibold">Weekly products</h5>
        <div className="box-btn-slide relative">
          <div className="swiper-button-prev nav-swiper nav-prev-products snbp48">
            <i className="icon-arrow-left-lg" />
          </div>
          <div className="swiper-button-next nav-swiper nav-next-products snbn48">
            <i className="icon-arrow-right-lg" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp48",
          nextEl: ".snbn48",
        }}
        className="swiper tf-sw-products"
        spaceBetween={30}
      >
        {/* item 1 */}
        <SwiperSlide className="swiper-slide">
          <ul className="product-list-wrap wow fadeInUp" data-wow-delay="0s">
            {blogItems.map((item) => (
              <li key={`blog-${item.id}`}>
                <div className="news-item hover-img gap-10">
                  <Link to={`/blog-detail`} className="entry_image img-style">
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="lazyload"
                      width={item.width}
                      height={item.height}
                    />
                  </Link>
                  <div className="content gap-0">
                    <p className="caption text-main-2">{item.date}</p>
                    <Link
                      to={`/blog-detail`}
                      className="link fw-semibold body-md-2"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </li>
            ))}

            {/* Product Items */}
            {products18.map((product) => (
              <li key={`product-${product.id}`}>
                <div className="card-product style-row row-small-2">
                  <div className="card-product-wrapper img-small">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={product.imgSrc}
                        alt="image-product"
                        width={product.width}
                        height={product.height}
                      />
                      <img
                        className="img-hover lazyload"
                        src={product.imgHover}
                        alt="image-product"
                        width={product.width}
                        height={product.height}
                      />
                    </Link>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <div className="bg-white relative z-5">
                        <Link
                          to={`/product-detail/${product.id}`}
                          className="name-product body-text-3 link"
                        >
                          {product.title}
                        </Link>
                      </div>
                      <div className="group-btn">
                        <p className="price-wrap fw-semibold">
                          <span className="new-price">
                            ${product.price.toFixed(3)}
                          </span>
                        </p>
                        <ul className="list-product-btn style-2 flex-row">
                          <li>
                            <AddToCart productId={product.id} />
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <AddToWishlist productId={product.id} />
                          </li>
                          <li>
                            <AddToQuickview productId={product.id} />
                          </li>
                          <li className="d-none d-sm-block">
                            <AddToCompare productId={product.id} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
        {/* item 2 */}
        <SwiperSlide className="swiper-slide">
          <ul className="product-list-wrap">
            {blogItems.map((item) => (
              <li key={`blog-${item.id}`}>
                <div className="news-item hover-img gap-10">
                  <Link to={`/blog-detail`} className="entry_image img-style">
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="lazyload"
                      width={item.width}
                      height={item.height}
                    />
                  </Link>
                  <div className="content gap-0">
                    <p className="caption text-main-2">{item.date}</p>
                    <Link
                      to={`/blog-detail`}
                      className="link fw-semibold body-md-2"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </li>
            ))}

            {/* Product Items */}
            {products18.map((product) => (
              <li key={`product-${product.id}`}>
                <div className="card-product style-row row-small-2">
                  <div className="card-product-wrapper img-small">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={product.imgSrc}
                        alt="image-product"
                        width={product.width}
                        height={product.height}
                      />
                      <img
                        className="img-hover lazyload"
                        src={product.imgHover}
                        alt="image-product"
                        width={product.width}
                        height={product.height}
                      />
                    </Link>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <div className="bg-white relative z-5">
                        <Link
                          to={`/product-detail/${product.id}`}
                          className="name-product body-text-3 link"
                        >
                          {product.title}
                        </Link>
                      </div>
                      <div className="group-btn">
                        <p className="price-wrap fw-semibold">
                          <span className="new-price">
                            ${product.price.toFixed(3)}
                          </span>
                        </p>
                        <ul className="list-product-btn style-2 flex-row">
                          <li>
                            <AddToCart productId={product.id} />
                          </li>
                          <li className="d-none d-sm-block wishlist">
                            <AddToWishlist productId={product.id} />
                          </li>
                          <li>
                            <AddToQuickview productId={product.id} />
                          </li>
                          <li className="d-none d-sm-block">
                            <AddToCompare productId={product.id} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
