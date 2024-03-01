import React from "react";
import { Link,useNavigate } from "react-router-dom";

function ActivitiesAndNews(props) {
  const navigate = useNavigate();

  const createPost =(id,title,description,image)=>{
    navigate(`/news/${id}`, {
      state: {
        id: id,
        title: title,
        description: description,
        image: image,
      }
    })
  }

  const showNewSample = props.news.map((el, index) => {

    return (
      <div className="mt-5" key={index}>
        <a onClick={()=>{createPost(el.id,el.title,el.description,el.image_url)}} className="d-flex recentActivityLink">
          <h5 className="fw-bold me-2">{index+1}.</h5>
          <h5 className="text-dark">
            {el.title}
          </h5>
        </a>
        <div>
          <i className="far fa-calendar me-2 text-black-50"></i>
          <small>
            {
              el.updated_at
            }
          </small>
        </div>
      </div>
    );
  });

  return (
    <div className="container card py-5 my-2">
      <h3 className="text-center fw-bold">လှုပ်ရှားမှုနှင့် သတင်းများ</h3>
      <div className="row px-3">
        <div className="col-12">
          {
            showNewSample
          }
        </div>
        <Link to={"/news"} className="text-end text-decoration-none fs-5">
          <small className="">see more....</small>
        </Link>
      </div>
    </div>
  );
}

export default ActivitiesAndNews;
