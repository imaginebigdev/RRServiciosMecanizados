/* eslint-disable @next/next/no-img-element */
import React from "react";

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="img">
              <img className="image-full" src="/img/slid/about.jpg" alt="" />
              <img
                className="image-responsive"
                src="/img/slid/about-responsive.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
