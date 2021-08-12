import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import learnFromExperts from '../../assets/img/learn_from_experts.svg';
import goOwnPace from '../../assets/img/go_own_pace.svg';
import videoCourses from '../../assets/img/video_courses.svg';

const options = {
  className: 'services__content',
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  mouseDrag: false,
  touchDrag: false,
  items: 3,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 2,
      dots: true,
    },
    1200: {
      items: 3,
      loop: false,
    },
  },
};

export default function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <OwlCarousel {...options}>
          <div className="services__items">
            <div className="row">
              <div className="col-2">
                <img src={goOwnPace} alt="" />
              </div>
              <div className="col-10">
                <div className="services__info">
                  <h3>Go at your own pace</h3>
                  <p>
                    Enjoy lifetime access to courses on Udemy’s website and app
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services__items">
            <div className="row">
              <div className="col-2">
                <img src={learnFromExperts} alt="" />
              </div>
              <div className="col-10">
                <div className="services__info">
                  <h3>Learn from industry experts</h3>
                  <p>Select from top instructors around the world</p>
                </div>
              </div>
            </div>
          </div>
          <div className="services__items">
            <div className="row">
              <div className="col-2">
                <img src={videoCourses} alt="" />
              </div>
              <div className="col-10">
                <div className="services__info">
                  <h3>Find video courses on almost any topic</h3>
                  <p>Build your library for your career and personal growth</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
