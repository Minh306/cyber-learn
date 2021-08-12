import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import Booking from '../../assets/img/booking.svg';
import Volkswagen from '../../assets/img/volkswagen.svg';
import Mercedes from '../../assets/img/mercedes.svg';
import Pinterest from '../../assets/img/pinterest.svg';
import Adidas from '../../assets/img/adidas.svg';
import Eventbrite from '../../assets/img/eventbrite-logo.svg';
import User1 from '../../assets/img/user_1.jpg';
import User2 from '../../assets/img/user_2.jpg';
import User3 from '../../assets/img/user3.jpg';
import User4 from '../../assets/img/user_4.jpg';

const options = {
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 2,
    },
    999: {
      items: 2,
    },
    1000: {
      items: 3,
      slideBy: 3,
    },
    1200: {
      items: 3,
      slideBy: 3,
    },
    1500: {
      items: 3,
      slideBy: 3,
    },
  },
};

export default function Social() {
  return (
    <section className="social container-fluid light-grey">
      <div className="feedback">
        <div className="feedback__content">
          <h3>What our students have to say</h3>
          <OwlCarousel {...options}>
            <div className="feedback__items">
              <div className="feedback-er">
                <img className="avatar" src={User1} alt="" />
                <span>Borivoje</span>
              </div>
              <p>
                Udemy is a life saver. I don't have the time or money for a
                college education. My goal is to become a freelance web
                developer, and thanks to Udemy, I'm really close.
              </p>
            </div>
            <div className="feedback__items">
              <div className="feedback-er">
                <img className="avatar" src={User2} alt="" />
                <span>Dipesh</span>
              </div>
              <p>
                I believe in lifelong learning and Udemy is a great place to
                learn from experts. I've learned a lot and recommend it to all
                my friends.
              </p>
            </div>
            <div className="feedback__items">
              <div className="feedback-er">
                <div className="avatar fx-c">K</div>
                <span>Kathy</span>
              </div>
              <p>
                My children and I LOVE Udemy! The courses are fantastic and the
                instructors are so fun and knowledgeable. I only wish we found
                it sooner.
              </p>
            </div>
            <div className="feedback__items">
              <div className="feedback-er">
                <img className="avatar" src={User3} alt="" />
                <span>Zulaika</span>
              </div>
              <p>
                I work in project management and joined Udemy because I get
                great courses for less. The instructors are fantastic,
                interesting, and helpful. I plan to use Udemy for a long time!
              </p>
            </div>
            <div className="feedback__items">
              <div className="feedback-er">
                <img className="avatar" src={User4} alt="" />
                <span>Marco</span>
              </div>
              <p>
                Thank you Udemy! You've renewed my passion for learning and my
                dream of becoming a web developer.
              </p>
            </div>
            <div className="feedback__items">
              <div className="feedback-er">
                <div className="avatar fx-c">J</div>
                <span>Justin</span>
              </div>
              <p>
                The best part about Udemy is the selection. You can find a
                course for anything you want to learn!
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="partners">
        <div className="partners__content text-center">
          <p>Trusted by companies of all sizes</p>
          <div className="row pt-3">
            <div className="col-sm-12 col-md-2">
              <img src={Booking} alt="" />
            </div>
            <div className="col-sm-12 col-md-2">
              <img src={Volkswagen} alt="" />
            </div>
            <div className="col-sm-12 col-md-2">
              <img src={Mercedes} alt="" />
            </div>
            <div className="col-sm-12 col-md-2">
              <img src={Pinterest} alt="" />
            </div>
            <div className="col-sm-12 col-md-2">
              <img src={Adidas} alt="" />
            </div>
            <div className="col-sm-12 col-md-2">
              <img src={Eventbrite} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="business">
        <div className="business__content">
          <div className="row">
            <div className="col-6">
              <div className="business__items first">
                <div className="business__text">
                  <h3>Become an instructor</h3>
                  <p>
                    Top instructors from around the world teach millions of
                    students on Udemy. We provide the tools and skills to teach
                    what you love.
                  </p>
                  <div className="ude-btgr">
                    <button className="btn create">Start teaching today</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="business__items last">
                <div className="business__text">
                  <h3>Become an instructor</h3>
                  <p>
                    Get unlimited access to 4,000+ of Udemy’s top courses for
                    your team.
                  </p>
                  <div className="ude-btgr">
                    <button className="btn create">
                      Get Udemy for Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
