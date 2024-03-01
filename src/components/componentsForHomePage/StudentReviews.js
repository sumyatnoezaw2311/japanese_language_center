import React, { useState } from 'react'
import Modal from './Modal';
import Slider from "react-slick";


function StudentReviews(props) {
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
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

      ]
    };
    const [nameForModal,setNameForModal] = useState("");
    const [textForModal,setTextForModal] = useState("");
    const [photoUrl,setPhotoUrl] = useState("");
    const [address,setAddress] = useState("");

    const toShowModal = (name,text,url,address)=>{
      setTextForModal(text);
      setPhotoUrl(url);
      setAddress(address);
      setNameForModal(name);
    };

    // console.log(props.studentReviews);
    
  return (
    <div className='container card pb-5 px-5 my-2'>
      <h3 className='text-center my-5 fw-bold'>ကျောင်းသား/သူများ၏ အမှတ်တရစကားများ</h3>
      <Slider {...settings}>
        {
          props.studentReviews.map((el,index)=>{
              return (
              <div className="card shadow rounded-4 py-4 studentReviewCard" key={index}>
                <div className="card-body d-flex flex-column align-items-center justify-content-end">
                    <div className='imgFromStudentReview shadow' style={{ backgroundImage: `url(${el.image_url})` }}></div>
                    <h5 className='fw-bold my-4 text-center'>{el.name}</h5>
                    <p>{el.current_location}</p>
                    <p className="card-text text-start mt-4">{el.message.substring(0, 150)}....
                        <a href='#' onClick={()=>{toShowModal(el.name,el.message,el.image_url,el.current_location)}} className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <small>see more</small>
                        </a>
                    </p>
                </div>
              </div>)
          })
        }
      </Slider>
      <Modal name={nameForModal} text={textForModal} url={photoUrl} address={address}></Modal>
    </div>
  )
}

export default StudentReviews