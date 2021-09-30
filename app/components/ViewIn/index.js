import React from 'react';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import { ViewInCourse } from '../CourseList/Course';

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
