import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Drift from "drift-zoom";

const productImages = [
  { src: "/images/product/product-detail-1.jpg", color: "gray" },
  { src: "/images/product/product-detail-2.jpg", color: "gray" },
  { src: "/images/product/product-detail-3.jpg", color: "gray" },
  { src: "/images/product/product-detail-4.jpg", color: "gray" },
  { src: "/images/product/product-detail-5.jpg", color: "beige" },
  { src: "/images/product/product-detail-6.jpg", color: "beige" },
];

export default function Slider8() {
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
      const driftAll = document.querySelectorAll(".tf-image-zoom-magnifier");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          inlinePane: true,
          containInline: false,
          inlinePane: 35,
          paneClass: "drift-pane",
        });
      });
    };

    // Call the function
    imageZoom();

    document.body.classList.add("zoom-magnifier-containing");
    // Optionally, clean up if necessary
    return () => {
      document.body.classList.remove("zoom-magnifier-containing");
      // Clean up logic if required
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Swiper
        className="swiper tf-product-media-main tf-product-zoom-inner"
        id="gallery-swiper-started"
        thumbs={{ swiper: swiperThumb }}
        modules={[Thumbs]}
      >
        {productImages.map((item, i) => (
          <SwiperSlide className="swiper-slide" data-color="gray">
            <a
              href={item.src}
              target="_blank"
              className="item"
              data-pswp-width="600px"
              data-pswp-height="800px"
            >
              <img
                className="tf-image-zoom-magnifier lazyload"
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
      <div className="container-swiper">
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
                direction: "horizontal",
              },
            },
          }}
        >
          {productImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide stagger-item"
              data-color={item.color}
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
      </div>
    </>
  );
}
