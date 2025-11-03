import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Drift from "drift-zoom";

export default function Slider3({ media = [], serverUrl, productName }) {
  const [swiperThumb, setSwiperThumb] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const lightboxRef = useRef(null);

  console.log("📸 Slider3 received media:", media);

  // ✅ Process media data to handle both images and videos
  const processedMedia = media.map((item, index) => {
    // Handle different data formats
    let mediaUrl, mediaType, thumbnailUrl;

    if (typeof item === 'string') {
      // Simple string format (like thumbImages)
      mediaUrl = item.startsWith('http') ? item : `${serverUrl}${item}`;
      mediaType = item.toLowerCase().includes('.mp4') || item.toLowerCase().includes('.webm') ? 'video' : 'image';
      thumbnailUrl = mediaUrl;
    } else if (typeof item === 'object') {
      // Object format with url, type, etc.
      mediaUrl = item.url ? (item.url.startsWith('http') ? item.url : `${serverUrl}${item.url}`) : 
                 item.src ? (item.src.startsWith('http') ? item.src : `${serverUrl}${item.src}`) : '';
      mediaType = item.type || (item.media_type) || 'image';
      thumbnailUrl = item.thumbnail || item.thumb || mediaUrl;
    }

    // Determine if it's a video based on URL or type
    if (mediaType === 'image' && (mediaUrl.includes('.mp4') || mediaUrl.includes('.webm') || mediaUrl.includes('.mov'))) {
      mediaType = 'video';
    }

    return {
      id: index,
      url: mediaUrl,
      type: mediaType,
      thumbnail: thumbnailUrl,
      alt: `${productName} - ${mediaType} ${index + 1}`
    };
  });

  // ✅ Fallback if no media provided
  const defaultMedia = [
    {
      id: 0,
      url: "/images/product/default-product.jpg",
      type: "image",
      thumbnail: "/images/product/default-product.jpg",
      alt: `${productName} - Default image`
    }
  ];

  const finalMedia = processedMedia.length > 0 ? processedMedia : defaultMedia;

  // ✅ Initialize PhotoSwipe for images only
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".lightbox-item", // Only target image items
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, []);

  // ✅ Initialize Drift zoom for images only
  useEffect(() => {
    const checkWindowSize = () => window.innerWidth >= 1200;

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

    // Small delay to ensure DOM is ready
    setTimeout(imageZoom, 100);

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

    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [finalMedia]);

  return (
    <>
      {/* ✅ Thumbnail Swiper */}
      <Swiper
        className="swiper tf-product-media-thumbs other-image-zoom"
        modules={[Navigation, Thumbs]}
        onSwiper={setSwiperThumb}
        onSlideChange={(swiper) => setCurrentMediaIndex(swiper.activeIndex)}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        observer={true}
        observeParents={true}
        direction="horizontal"
        navigation={{
          nextEl: ".thumbs-next",
          prevEl: ".thumbs-prev",
        }}
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          1200: {
            direction: "vertical",
          },
        }}
      >
        {finalMedia.map((item, i) => (
          <SwiperSlide
            key={item.id}
            className="swiper-slide stagger-item"
          >
            <div className="item position-relative">
              {item.type === 'video' ? (
                <>
                  <img
                    className="lazyload"
                    src={item.thumbnail}
                    alt={item.alt}
                    width={120}
                    height={120}
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Video indicator overlay */}
                  <div className="video-indicator position-absolute top-50 start-50 translate-middle">
                    <div className="bg-dark bg-opacity-75 rounded-circle p-2">
                      <i className="icon-play text-white" style={{ fontSize: '16px' }}></i>
                    </div>
                  </div>
                </>
              ) : (
                <img
                  className="lazyload"
                  src={item.thumbnail}
                  alt={item.alt}
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Main Media Swiper */}
      <Swiper
        className="swiper tf-product-media-main"
        id="gallery-swiper-started"
        thumbs={{ swiper: swiperThumb }}
        modules={[Thumbs]}
        onSlideChange={(swiper) => setCurrentMediaIndex(swiper.activeIndex)}
      >
        {finalMedia.map((item, i) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            {item.type === 'video' ? (
              // ✅ Video slide
              <div className="video-container position-relative">
                <video
                  width={652}
                  height={652}
                  controls
                  poster={item.thumbnail}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  preload="metadata"
                >
                  <source src={item.url} type="video/mp4" />
                  <source src={item.url} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay info */}
                <div className="video-overlay position-absolute bottom-0 start-0 end-0 p-3 bg-gradient">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-dark bg-opacity-75">
                      <i className="icon-play me-1"></i>
                      Video
                    </span>
                    <div className="video-controls">
                      <button 
                        className="btn btn-sm btn-outline-light"
                        onClick={(e) => {
                          const video = e.target.closest('.video-container').querySelector('video');
                          if (video.paused) {
                            video.play();
                          } else {
                            video.pause();
                          }
                        }}
                      >
                        <i className="icon-play"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // ✅ Image slide with lightbox
              <a
                href={item.url}
                className="item lightbox-item"
                data-pswp-width="800"
                data-pswp-height="800"
              >
                <img
                  className="tf-image-zoom lazyload w-100"
                  src={item.url}
                  data-zoom={item.url}
                  alt={item.alt}
                  width={652}
                  height={652}
                  style={{ objectFit: 'cover' }}
                />
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Media counter */}
      <div className="media-counter position-absolute top-0 end-0 m-3 z-index-10">
        <span className="badge bg-dark bg-opacity-75">
          {currentMediaIndex + 1} / {finalMedia.length}
        </span>
      </div>

      {/* ✅ Media type indicator */}
      <div className="media-type-indicator position-absolute top-0 start-0 m-3 z-index-10">
        {finalMedia[currentMediaIndex]?.type === 'video' && (
          <span className="badge bg-primary">
            <i className="icon-play me-1"></i>
            Video
          </span>
        )}
      </div>

      {/* ✅ Navigation arrows */}
      <div className="swiper-button-prev thumbs-prev"></div>
      <div className="swiper-button-next thumbs-next"></div>

      {/* ✅ Additional CSS for video styling */}
      <style jsx>{`
        .video-indicator {
          pointer-events: none;
        }
        
        .video-container {
          background: #000;
        }
        
        .video-overlay {
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .video-container:hover .video-overlay {
          opacity: 1;
        }
        
        .media-counter, .media-type-indicator {
          z-index: 10;
        }
        
        .tf-image-zoom {
          cursor: zoom-in;
        }
        
        .swiper-slide video {
          border-radius: 8px;
        }
        
        .swiper-slide img {
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
