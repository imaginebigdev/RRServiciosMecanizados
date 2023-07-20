/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
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
            <div className="content">
              <h4 className="color-font">
                ¿Qué ofrece R&R Servicios Mecanizados?
              </h4>

              <p className="wow txt words chars splitting" data-splitting>
                R&R Servicios Mecanizados ofrece entre otros, el servicio de
                fabricación de piezas bajo plano o muestra. Soldaduras de alta
                presión con personal certificado para la tarea.
              </p>

              <ul>
                <li>MECANIZADOS</li>
                <li>METALURGICA</li>
                <li>SOLDADURAS ESPECIALES</li>
                <li>SERVICIOS PETROLEROS</li>
                <li>MONTAJES HASTA 50 KG</li>
                <li>HIDRAULICA</li>
              </ul>
              <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Más información</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
