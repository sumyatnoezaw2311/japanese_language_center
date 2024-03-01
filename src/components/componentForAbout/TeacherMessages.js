import React,{useState} from 'react'
import Modal from '../componentForAbout/ModalForTeacher';
import Slider from "react-slick";

function TeacherMessages(props) {

    const messages = props.messages;
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
  
      const toShowModal = (name,message,url)=>{
        setNameForModal(name);
        setPhotoUrl(url);
        setTextForModal(message);
      };

  return (
    <div className='container card pb-5 px-5 my-2'>
      <h3 className='text-center my-5 fw-bold'>သင်တန်းဆရာမများ၏မက်ဆေ့ချ်</h3>
      <Slider {...settings}>

        {
          messages.map((el,index)=>{
            return (
              <div className='d-flex w-100 m-0' key={index}>
                <div className="card shadow rounded-4 py-4 studentReviewCard">
                <div className="card-body d-flex flex-column align-items-center justify-content-end">
                    <div className='imgFromStudentReview shadow' style={{ backgroundImage: `url(${el.image_url})` }}></div>
                    <h5 className='fw-bold my-4 text-center'>{el.name}</h5>
                    <p className="card-text text-start text-black-50 mt-4">{el.message.substring(0, 150)}....
                        <a href='#' onClick={()=>{toShowModal(el.name,el.message,el.image_url)}} className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <small>see more</small>
                        </a>
                    </p>
                </div>
              </div>
              </div>
              )
          })
        }
      </Slider>
      <Modal name={nameForModal} text={textForModal} url={photoUrl}></Modal>
    </div>
  )
}

export default TeacherMessages