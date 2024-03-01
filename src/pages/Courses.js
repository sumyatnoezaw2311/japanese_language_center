import React, { useState } from "react";
import { useParams,Link, redirect } from "react-router-dom";
import Slider from "react-slick";
import OnTop from "../components/customComponents/OnTop";
import ThinYoeModal from "../components/componentForCourses/ThinYoeModal";

function Courses(props) {

  const [textForModal,setTextForModal] = useState("");
  const [titleForModal,setTitleForModal] = useState("");
  const parameterName = useParams().name.replace("_", " ");

  const allCourses = props.courses;
  const filteredCourses = allCourses.filter(course => course.name === parameterName);
  allCourses.map((el)=>{
    if(el.name != parameterName){
      redirect()
    }    
  })
  let courseType = filteredCourses[0].course_types;
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const toShowModal = (title,description)=>{
    setTitleForModal(title);
    setTextForModal(description);
  }

  return (
    <>
      <div className="container-fluid px-lg-0">
        <div className="card px-3 pt-5">
          <h3 className="text-center mb-5 fw-bold">{filteredCourses[0].name} မိတ်ဆက်ခြင်း</h3>
          <p className="px-lg-5 lh-lg mb-0">{filteredCourses[0].course_intro}</p>
          <div className="row px-md-5 g-0">
            <h5 className="mt-5 text-center fw-bold">သင်ရိုးများ</h5>
            <div className="container pb-5">

                {
                  courseType.length < 2 ?
                  courseType.map((el,index)=>{
                    return <div className='w-100 d-flex justify-content-center' key={index}>
                    <div className="card shadow rounded-4 py-4 studentReviewCard h-auto mt-5">
                    <div className="card-body d-flex flex-column align-items-center justify-content-end">
                        <h5 className='fw-bold my-2 text-center'>{el.name}</h5>
                        <p className="card-text my-3 lh-lg">{el.description.substring(0, 95)}....
                          <a href='#' onClick={()=>{toShowModal(el.name,el.description)}} className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <small>see more</small>
                          </a>
                        </p>
                        <Link to={`/courses/${parameterName.replace(" ", "_")}/${el.name}`}
                              state={el}
                              className='text-decoration-none btn-sm btn btn-sm btn-primary w-50 py-2 ms-auto'>အတန်းများ</Link>
                    </div>
                  </div>
                  </div>
                  }) :
                  <Slider {...settings}>
                  {
                    courseType.map((el,index)=>{
                      return <div className='w-100 m-0' key={index}>
                      <div className="card shadow rounded-4 py-4 studentReviewCard h-auto mt-5">
                      <div className="card-body d-flex flex-column align-items-center justify-content-end">
                          <h5 className='fw-bold my-4 text-center'>{el.name}</h5>
                          <p className="card-text my-3 lh-lg">{el.description.substring(0, 95)}....
                            <a href='#' onClick={()=>{toShowModal(el.name,el.description)}} className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <small>see more</small>
                            </a>
                          </p>
                          <Link to={`/courses/${parameterName.replace(" ", "_")}/${el.name}`}
                                state={el}
                                className='text-decoration-none btn-sm btn btn-sm btn-primary w-50 py-2 ms-auto'>အတန်းများ</Link>
                      </div>
                    </div>
                    </div>
                    })
                  }
                </Slider>
                }
              <ThinYoeModal text={textForModal} title={titleForModal}></ThinYoeModal>
            </div>
          </div>
        </div>
        <OnTop></OnTop>
      </div>
    </>
  );
}

export default Courses;
