/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  const [copiedMessage, setCopiedMessage] = useState(null);
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
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p>
                      Italia N°40 (Eva Perón e Italia) – (8328) Allen, Río Negro
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>rr.metalmecanica2015@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfono</h6>
                    <p>+54 9 298 413 1468</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
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
                    <div className="copied-message">
                      <p>{copiedMessage}</p>
                    </div>
                  )}
                </a>
                <a>
                  <i
                    style={{ cursor: "pointer" }}
                    className="fa fa-phone"
                    onClick={() =>
                      copyToClipboard("+54 9 298 413 1468", "Teléfono")
                    }
                  ></i>
                  {copiedMessage && (
                    <div className="copied-message">
                      <p>{copiedMessage}</p>
                    </div>
                  )}
                </a>
              </div>

              <div className="copy-right">
                <p>
                  © 2023, R&R Servicios mecanizados. Hecho con pasion por{" "}
                  <Link href="https://www.imaginebig.dev/">
                    <a target="_blank" style={{ color: "#9A15BF" }}>
                      Imagine Big
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
