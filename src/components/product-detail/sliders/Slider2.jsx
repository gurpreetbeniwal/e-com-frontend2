import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Drift from "drift-zoom";

const productImages = [
  { src: "/images/product/product-detail-7.jpg", color: "gray" },
  { src: "/images/product/product-detail-8.jpg", color: "gray" },
  { src: "/images/product/product-detail-9.jpg", color: "gray" },
  { src: "/images/product/product-detail-10.jpg", color: "gray" },
  { src: "/images/product/product-detail-11.jpg", color: "beige" },
  { src: "/images/product/product-detail-12.jpg", color: "beige" },
];

export default function Slider2() {
  const [swiperThumb, setSwiperThumb] = useState(null);
  const lightboxRef = useRef(null);
  useEffect(() => {
    // Initialize PhotoSwipeLightbox
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    // Store the lightbox instance in the ref for later use
    lightboxRef.current = lightbox;

    // Cleanup: destroy the lightbox when the component unmounts
    return () => {
      lightbox.destroy();
    };
  }, []);
  useEffect(() => {
    // Function to initialize Drift
    // Function to check window width
    const checkWindowSize = () => window.innerWidth >= 1200;

    // Only proceed if window is wide enough
    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only once on mount
  return (
    <>
      {" "}
      <Swiper
        className="swiper tf-product-media-main"
        id="gallery-swiper-started"
        thumbs={{ swiper: swiperThumb }}
        modules={[Thumbs]}
      >
        {productImages.map((item, i) => (
          <SwiperSlide key={i} className="swiper-slide" data-color="gray">
            <a
              href={item.src}
              target="_blank"
              className="item"
              data-pswp-width="600px"
              data-pswp-height="800px"
            >
              <img
                className="tf-image-zoom lazyload"
                src={item.src}
                data-zoom={item.src}
                alt=""
                width={652}
                height={652}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="swiper tf-product-media-thumbs other-image-zoom"
        modules={[Navigation, Thumbs]}
        onSwiper={setSwiperThumb}
        {...{
          spaceBetween: 10,
          slidesPerView: "auto",
          freeMode: true,
          watchSlidesProgress: true,
          observer: true,
          observeParents: true,
          direction: "horizontal",
          navigation: {
            nextEl: ".thumbs-next",
            prevEl: ".thumbs-prev",
          },

          breakpoints: {
            0: {
              direction: "horizontal",
            },
            1200: {
              direction: "vertical",
            },
          },
        }}
      >
        {productImages.map((item, i) => (
          <SwiperSlide
            key={i}
            className="swiper-slide stagger-item"
            data-color="gray"
          >
            <div className="item">
              <img
                className="lazyload"
                data-src={item.src}
                alt=""
                src={item.src}
                width={652}
                height={652}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
