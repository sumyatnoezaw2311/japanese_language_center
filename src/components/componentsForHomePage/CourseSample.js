import React from "react";
import { Link } from "react-router-dom";

function CourseSample(props) {

  return (
    <div className="card py-5 my-2 px-3">
      <div className="row g-0 d-flex  JapaneseCourseSampleSection">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center">
          <div
            className="coursesThumbnail rounded-4 shadow"
            style={{ backgroundImage: `url(${props.course.image_url})` }}
          ></div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body">
            <h3 className="fw-bold mb-3">{props.course.name}</h3>
            {
              props.course.course_types.map((el,index)=>{
                return <div className="d-flex align-items-center" key={index}>
                  <div className="dot m-3"></div>
                  <div>
                    <h5 className="mb-0">{el.name}</h5>
                  </div>
                </div>
              })
            }
            <p className="card-text mt-3 text-justify lh-lg">{props.course.course_intro}</p>
            <Link
              to={`/courses/${props.course.name}`}
              className="card-text float-end text-decoration-none fs-5"
            >
              <small className="">see more....</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSample;
