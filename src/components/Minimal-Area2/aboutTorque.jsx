import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const AboutT = () => {
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
              <img className="thumparallax-down" src="/img/torque.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">
                ¿En qué consiste el servicio de torque?
              </h4>

              <p className="wow txt words chars splitting" data-splitting>
                Es el torqueo de juntas apernadas realizado por personal
                calificado, más verificación del torque aplicado usando
                tecnologías patentadas (transductores) que permiten captura y
                registro de datos en tiempo real Beneficios Trabajo realizado
                por personal capacitado y certificado por fabrica.
              </p>

              <ul>
                <li>
                  Cada una de las herramientas usadas son calibradas de forma
                  individual antes de salir de nuestras instalaciones=
                  confiabilidad
                </li>
                <li>
                  Nos enfocamos en el proceso de torque, haciendo siempre la
                  mejor selección de herramientas conforme a la información
                  entregada por el usuario.
                </li>
                <li>
                  El cliente recibe un informe final en donde está el registro
                  del torque aplicado a cada tornillo= trazabilidad
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutT;
