import React from 'react';

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__content">
        <h3>Top categories</h3>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <div>
                <span className="fa fa-file-code" />
                <span>Development</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-chart-bar" />
              <span>Statistical</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-desktop" />
              <span>System</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-pencil-ruler" />
              <span>Design</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-bullseye" />
              <span>Analysis</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-book-open" />
              <span>Document</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-camera-retro" />
              <span>Photograhp</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="categories__items">
              <span className="fa fa-music" />
              <span>Musical</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
