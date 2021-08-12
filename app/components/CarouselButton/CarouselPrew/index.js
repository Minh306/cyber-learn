import React from 'react';
import { useSelector } from 'react-redux';

export default function CarouselPrew(props) {
  const { className, style, onClick } = props;
  const isCancel = useSelector(state => (state.searchCourse || {}).isCancel);
  const disabled = onClick === null ? 'disabled' : '';
  const owlPre = isCancel === true ? 'disabled' : '';
  return (
    <button
      onClick={function(event) {
        if (onClick !== null) {
          return onClick();
        }
        return onClick;
      }}
      type="button"
      role="presentation"
      className={`owl-prev ${disabled} ${owlPre}`}
      id="owlPre"
    >
      <span aria-label="Previous">‹</span>
    </button>
  );
}
