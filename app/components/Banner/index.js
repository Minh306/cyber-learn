import React from 'react';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__colorful" />
      <div className="container-fluid">
        <div className="banner__content">
          <div className="banner__items">
            <div className="row">
              <div className="col">
                <i className="fa fa-play-circle" />
              </div>
              <div className="col">
                <i className="fa fa-address-book" />
              </div>
              <div className="col">
                <i className="fa fa-balance-scale" />
              </div>
              <div className="col">
                <i className="fa fa-place-of-worship" />
              </div>
              <div className="col">
                <i className="fab fa-app-store-ios" />
              </div>
            </div>
          </div>
          <div className="banner__items banner__center">
            <div className="row">
              <div className="col-3 left-icon">
                <i className="fab fa-react" />
              </div>
              <div className="col-lg-6 center__info">
                <div className="banner__info">
                  <h3>Get personalized recommendations</h3>
                  <p>Answer a few questions for your top picks</p>
                  <div className="ude-btgr">
                    <button className="btn create">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="col-3 right-icon">
                <i className="fa fa-images" />
              </div>
            </div>
          </div>
          <div className="banner__items">
            <div className="row">
              <div className="col">
                <i className="fa fa-desktop" />
              </div>
              <div className="col">
                <i className="fab fa-think-peaks" />
              </div>
              <div className="col">
                <i className="fa fa-chart-bar" />
              </div>
              <div className="col">
                <i className="fa fa-air-freshener" />
              </div>
              <div className="col">
                <i className="fa fa-paint-brush" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
