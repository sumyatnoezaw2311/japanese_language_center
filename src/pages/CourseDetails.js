import React from 'react'
import { useLocation,useParams,useNavigate } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import OnTop from '../components/customComponents/OnTop'

function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const thinYoeData = location.state;
  const toNavigateRoute = location.pathname.slice(0, location.pathname.lastIndexOf('/'));


  return (
    <div className='container card p-lg-5 p-3'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb pb-3 px-lg-5">
                <li className="breadcrumb-item"><span className='btn btn-sm btn-outline-primary' onClick={() => navigate(toNavigateRoute)}><i className="fas fa-arrow-left me-2"></i>Go Back</span></li>
            </ol>
        </nav>
        <h3 className="text-center mb-5 fw-bold">{thinYoeData.name} မိတ်ဆက်ခြင်း</h3>
        <p className="px-lg-5 lh-lg mb-0">{thinYoeData.course_intro}</p>
        <div className="row px-md-5 g-0">
          <div className="container pb-5">
        </div>
      </div>
      <div className="card py-3 px-3">
      {
                thinYoeData.course_details.map((el,index)=>{
                  return <div className="row g-0 d-flex courseImage" key={index}>
                  <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                      <div className='coursesThumbnail rounded-4 shadow' style={{ backgroundImage: `url(${el.image_url})`, "width": "300px", "height": "300px" }}></div>
                  </div>
                  <div className="col-12 col-lg-8 p-lg-3">
                      <div className="card-body">
                        <h4 className='fw-bold mb-3'>{el.name}</h4>
                        <div className="d-flex align-items-center mb-2">
                            <div className='dot m-3'></div>
                            <div><h6 className='mb-0'>သင်တန်းကာလ - {el.duration} လ</h6></div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className='dot m-3'></div>
                            <div><h6 className='mb-0'>စာသင်ချိန် နာရီပေါင်း - {el.total_time} နာရီ</h6></div>
                        </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className='dot m-3'></div>
                            <div><h6 className='mb-0'>သင်ရိုးစာအုပ် - {el.book}</h6></div>
                          </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className='dot m-3'></div>
                            <div><h6 className='mb-0'>သင်တန်းကြေး - {el.course_fee} MMK {el.book_price == null ? "": `+ ( စာအုပ်ဖိုး ${el.book_price} MMK )`} </h6></div>     
                        </div>
                        {
                          el.mentor ? 
                          <div className="d-flex align-items-center mb-2">
                            <div className='dot m-3'></div>
                            <div><h6 className='mb-0'>သင်ကြားမည့်ဆရာ/ဆရာမ - {el.mentor}</h6></div>     
                          </div>
                          :
                          <div></div>
                        }

                        <p className="card-text mt-3 lh-lg text-left">{el.description}</p>
                    </div>
                  </div>
              </div>
                })
              }

      </div>
    <OnTop></OnTop>
    </div>
  )
}

export default CourseDetails