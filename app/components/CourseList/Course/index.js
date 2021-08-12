import React, { Fragment } from 'react';

import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import blankImg from '../../../assets/img/blank-img.png';
import CarouselNext from '../../CarouselButton/CarouselNext';
import CarouselPrew from '../../CarouselButton/CarouselPrew';

const settingsForCourse = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  nextArrow: <CarouselNext />,
  prevArrow: <CarouselPrew />,
  responsive: [
    {
      breakpoint: 1312,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const settingsForViewIn = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
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

export default function CourseByCategories({ props }) {
  return props.map((item, index) => {
    const active = index === 0 ? 'active' : '';
    const fade = index !== 0 ? 'fade' : '';
    return (
      <div
        key={index}
        className={`tab-pane container ${active} ${fade}`}
        id={item.maDanhMuc}
      >
        <Slider {...settingsForCourse}>
          {item.courseList.map((item, index) => (
            <div key={index} className="item-wrap">
              <div className="card">
                <div className="course-img">
                  {item.hinhAnh ? (
                    <img
                      className="card-img-top"
                      src={item.hinhAnh}
                      alt="Card Course"
                    />
                  ) : (
                    <img
                      className="card-img-top"
                      src={blankImg}
                      alt="Card Course"
                    />
                  )}
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.tenKhoaHoc}</h4>
                  {item.nguoiTao.hoTen ? (
                    <p className="card-text">{item.nguoiTao.hoTen}</p>
                  ) : (
                    <p className="card-text">Unknown Author</p>
                  )}
                  <div className="rating">
                    <div className="rating_star ">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-alt" />
                    </div>
                    <span>4.8</span>
                    <span>(17,931)</span>
                  </div>
                </div>
                <div className="price">
                  <span className="old-price">$134.99</span>
                  <span className="new-price">$15.99</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  });
}

export function CourseBySearch(props) {
  const { courseList } = props.course;
  console.log(courseList);
  return (
    <div className="tab-pane container active">
      <Slider {...settingsForCourse}>
        {courseList.map((item, index) => (
          <div key={index} className="item-wrap">
            <div className="card view-in-course">
              <div className="course-img">
                {item.hinhAnh ? (
                  <img
                    className="card-img-top"
                    src={item.hinhAnh}
                    alt="Card Course"
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src={blankImg}
                    alt="Card Course"
                  />
                )}
              </div>
              <div className="card-body">
                <h4 className="card-title">{item.tenKhoaHoc}</h4>
                {item.nguoiTao.hoTen ? (
                  <p className="card-text">{item.nguoiTao.hoTen}</p>
                ) : (
                  <p className="card-text">Unknown Author</p>
                )}
                <div className="rating">
                  <div className="rating_star ">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-alt" />
                  </div>
                  <span>4.8</span>
                  <span>(17,931)</span>
                </div>
              </div>
              <div className="price">
                <span className="old-price">$134.99</span>
                <span className="new-price">$15.99</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function ViewInCourse(props) {
  const { courseList } = props.course;
  return (
    <Slider {...settingsForViewIn}>
      {courseList.map((item, index) => (
        <div key={index} className="item-wrap">
          <div className="card view-in-course">
            <div className="course-img">
              {item.hinhAnh ? (
                <img
                  className="card-img-top"
                  src={item.hinhAnh}
                  alt="Card Course"
                />
              ) : (
                <img
                  className="card-img-top"
                  src={blankImg}
                  alt="Card Course"
                />
              )}
            </div>
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              {item.nguoiTao.hoTen ? (
                <p className="card-text">{item.nguoiTao.hoTen}</p>
              ) : (
                <p className="card-text">Unknown Author</p>
              )}
              <div className="rating">
                <div className="rating_star ">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-alt" />
                </div>
                <span>4.8</span>
                <span>(17,931)</span>
              </div>
            </div>
            <div className="price">
              <span className="old-price">$134.99</span>
              <span className="new-price">$15.99</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
