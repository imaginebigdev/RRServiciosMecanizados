/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec mt-100 mb-100">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/bg-vid.jpg)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Mirar video</span>
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="2JD-x4yCk9M"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Servicios
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    ¿De que manera lo logramos?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <h6>Recursos Productivos:</h6>

                    <p>
                      Tornos paralelos, Fresadora, Soldadoras, rectificadoras de
                      superficies planas. Instrumentos de Control Dimensional:
                      micrómetros, alesómetros, calibres, telescopines, calibres
                      de rosca, instrumentos digitales. Herramientas auxiliares:
                      amoladoras, agujereadoras, serrucho mecánico, entre otras.
                      De esta manera aseguramos la mejor calidad de nuestro
                      servicio.
                    </p>
                  </div>
                  <div className="item">
                    <h6>Recursos Técnicos:</h6>
                    <p>
                      Cooperación permanente con nuestros clientes desde la
                      concepción del proyecto, acompañándolos y asesorándolos en
                      cada paso, aportando los conocimientos que la experiencia
                      de nuestros colaboradores posee. Desarrollo de utillaje
                      propio y dispositivos para todos los procesos de
                      fabricación. Piezas especiales. Tecnología CAM para
                      documentar desarrollos y permitir eficiencia en los
                      trabajos
                    </p>
                  </div>
                  <div className="item">
                    <h6>Recursos humanos:</h6>
                    <p>
                      En todos los casos el personal cuenta con la debida
                      capacitación y calificación necesaria para tarea que
                      realiza. Constantemente se desarrollan oportunidades de
                      capacitación y motivación, invitando a los colaboradores a
                      ser dueños de un deseo de superación constante, que se ve
                      reflejado en forma directa en nuestro servicio.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
