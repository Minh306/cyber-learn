import React from 'react';

export default function UdeCarousel() {
  return (
    <>
      <section className="udeCarousel">
        <div className="udeCarousel__content">
          <div className="row">
            <div className="col-9 col-sm-8 search-carousel">
              <div>
                <h2>Learn on your schedule</h2>
                <p>
                  Study any topic, anytime. Choose from thousands of expert-led
                  courses now.
                </p>
                {/* <form className="header__form">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What do you want to learn ?"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
               */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro text-center">
        <div className="intro__content">
          <div className="row">
            <div className="col-4">
              <div className="item item-left">
                <i className="fa fa-sign-in-alt" />
                <div className="content">
                  <b>100,000 online courses</b>
                  <p>Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="item item-center">
                <i className="fa fa-check-circle" />
                <div className="content">
                  <b>Expert instruction</b>
                  <p>Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="item item-right">
                <i className="fa fa-history" />
                <div className="content">
                  <b>Lifetime access</b>
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
