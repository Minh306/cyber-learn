import React from 'react';
import { useSelector } from 'react-redux';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import CourseByCategories, { CourseBySearch } from './Course';

export default function CourseList({ props }) {
  const isSearch = useSelector(state => (state.searchCourse || {}).isSearch);
  const courseResult = useSelector(state => state.searchCourse);
  const { courseListByCate, categories } = props;

  return (
    <section className="courses" id="courses">
      <div className="courses__content">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="courses__info">
              <div>
                <h3>The world’s largest selection of courses</h3>
                <p>
                  Choose from over 100,000 online video courses with new
                  additions published every month
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="course__tab">
              {/* Nav tabs */}
              {isSearch === false ? (
                <ul className="nav nav-tabs">
                  {categories.map((item, index) => {
                    const active = index === 0 ? 'active' : '';
                    return (
                      <li className="nav-item" key={index}>
                        <a
                          className={`nav-link ${active}`}
                          data-toggle="tab"
                          href={`#${item.maDanhMuc}`}
                        >
                          {item.tenDanhMuc}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <h2>Result</h2>
                  </li>
                </ul>
              )}
              {/* Tab panes */}
              <div className="tab-content">
                {isSearch === true ? (
                  <CourseBySearch course={courseResult} />
                ) : (
                  <CourseByCategories props={courseListByCate} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
