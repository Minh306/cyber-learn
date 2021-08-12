import React, { memo } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { onNew } from '../../Header/action';

export function CarouselNext(props) {
  const { className, style, onClick } = props;
  const disabled = onClick === null ? 'disabled' : '';
  const test = () => {
    const slickTrack = document.getElementsByClassName('slick-track')[0];
    slickTrack.classList.remove('slick-track-reset');
    props.onNewUsing();
  };
  return (
    <button
      onClick={function(event) {
        if (onClick !== null) {
          onClick();
          test();
        }
        return onClick;
      }}
      type="button"
      role="presentation"
      className={`owl-next ${disabled}`}
    >
      <span aria-label="Next">›</span>
    </button>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onNewUsing: () => dispatch(onNew()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CarouselNext);
