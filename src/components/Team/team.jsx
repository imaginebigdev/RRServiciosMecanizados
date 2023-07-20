/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
  React.useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <h3 className="co-tit mb-15">
                ¿Por qué R&R Servicios Mecanizados?
              </h3>
              <ul className="fz-18">
                <li>
                  <span className="color-font" style={{ height: "100%" }}>
                    <i className="fa fa-circle"></i>
                  </span>{" "}
                  Somos una empresa joven con ansias de crecer tomando como eje
                  fundamental el cumplimiento, la responsabilidad en el servicio
                  y la satisfacción de nuestros clientes.
                </li>
                <br />
                <li>
                  <span className="color-font">
                    <i className="fa fa-circle"></i>
                  </span>{" "}
                  Contamos con tecnología adecuada al servicio que ofrecemos.{" "}
                </li>
                <br />
                <li>
                  <span className="color-font">
                    <i className="fa fa-circle"></i>
                  </span>{" "}
                  Enfoque profesional y especializado de los servicios.
                </li>
                <br />
                <li>
                  <span className="color-font">
                    <i className="fa fa-circle"></i>
                  </span>{" "}
                  Rapidez en respuesta a sus necesidades
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 2).length
                              ? "mb-30"
                              : null
                          }`}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(2, 4).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
