import React from 'react';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import blankImg from '../../assets/img/blank-img.png';
import CarouselNext from '../CarouselButton/CarouselNext';
import CarouselPrew from '../CarouselButton/CarouselPrew';
import Course, { ViewInCourse } from '../CourseList/Course';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: '60px',
  rows: 1,
  nextArrow: <CarouselNext />,
  prevArrow: <CarouselPrew />,
  responsive: [
    {
      breakpoint: 1312,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ViewIn({ props }) {
  return (
    <section className="viewIn">
      <div className="viewIn__content">
        <h3>Students are viewing</h3>
        <div className="viewIn__courses owl-theme">
          <ViewInCourse course={props} />
        </div>
      </div>
    </section>
  );
}
