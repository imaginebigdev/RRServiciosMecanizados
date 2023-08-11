import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);
  const [copiedMessage, setCopiedMessage] = React.useState(null);

  const copyToClipboard = (text, type) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedMessage(`¡${type} Copiado!`);
    setTimeout(() => setCopiedMessage(null), 1500);
  };

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="video-background">
                  <video
                    src="/videos/videoryr.mp4"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <div className="social-icon">
          <a
            href="https://www.facebook.com/RRTorneria/?locale=es_LA"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/rr.metalmecanica/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-envelope"
              onClick={() =>
                copyToClipboard("rr.metalmecanica2015@gmail.com", "Email")
              }
            ></i>
            {copiedMessage && (
              <div className="copied-message-intro">
                <p>{copiedMessage}</p>
              </div>
            )}
          </a>
          <a>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-phone"
              onClick={() => copyToClipboard("+54 9 298 413 1468", "Teléfono")}
            ></i>
            {copiedMessage && (
              <div className="copied-message-intro">
                <p>{copiedMessage}</p>
              </div>
            )}
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
