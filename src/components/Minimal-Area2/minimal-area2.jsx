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
    <section className="min-area mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valing">
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
                <li>SERVICIO DE TORQUEO Y VERIFICACIÓN DE TORQUES</li>
              </ul>
              <Link href={`/servicios`}>
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
          <div className="col-lg-6 ml-20">
            <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
