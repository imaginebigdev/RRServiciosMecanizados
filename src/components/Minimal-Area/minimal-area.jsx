/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h5 className="wow color-font">
                Nuestra premisa se basa en cinco pilares fundamentales:
              </h5>
              <ul className="feat">
                <li>
                  <h6>
                    <span>1</span> Calidad
                  </h6>
                </li>
                <li>
                  <h6>
                    <span>2</span> Puntualidad
                  </h6>
                </li>
                <li>
                  <h6>
                    <span>3</span> Competitividad en los precio
                  </h6>
                </li>
                <li>
                  <h6>
                    <span>4</span> Capacitación Técnica
                  </h6>
                </li>
                <li>
                  <h6>
                    <span>5</span> Permanentes Avances tecnológicos.
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
