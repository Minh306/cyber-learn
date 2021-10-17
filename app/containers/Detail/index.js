import { withSnackbar } from 'notistack';
import React, { memo, useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { onDetail } from './actions';
import { makeSelectDetail } from './selector';
import reducer from './reducers';
import saga from './sagas';
import { RenderCourse } from '../../components/CourseList/Course';

function Detail(props) {
    const detailCourse = useSelector(state => (state.detail || []).detailCourse);
    const dataCourse = useSelector(state => (state.detail || []).dataCourse);
    const author = detailCourse.nguoiTao
    console.log(dataCourse)

    useEffect(() => {
        props.onDetail(props.match.params.id)
    }, [props.match.params.id])

    return (
        <div className="container">
            <div className="my-4">
                <h1>{detailCourse.tenKhoaHoc}</h1>
                <small className="update_day"><b>Last updated: </b>{detailCourse.ngayTao}</small>
                <div className="rating">
                    <span>4.8</span>
                    <div className="rating_star ">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-alt" />
                    </div>
                    <span>({detailCourse.luotXem} ratings)</span>
                    <span>
                        <b>
                            {detailCourse.soLuongHocVien} students
                        </b>
                    </span>
                </div>
                <small><b>Created by: </b>{author ? author.hoTen : 'Unknown'}</small>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={detailCourse.hinhAnh} alt="" />
                </div>
                <div className="col-md-4">
                    <h3 className="my-3">Course Description</h3>
                    <p>{detailCourse.moTa}</p>
                    <h3 className="my-3">Course Details</h3>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Dolor Sit Amet</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                    </ul>
                </div>
            </div>
            <h3 className="my-4">Related Courses</h3>
            <div className="row">
                <RenderCourse dataCourse={dataCourse}/>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    detail: makeSelectDetail(),
});

function mapDispatchToProps(dispatch) {
    return {
        onDetail: params => dispatch(onDetail(params))
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const key = 'detail';
const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

export default compose(
    withRouter,
    withReducer,
    withSaga,
    withConnect,
    withSnackbar,
    memo,
)(Detail);