import React from "react";
import Breadcrumb from "../Breadcrumb";

function PrincipleSection(props) {
  const principle = props.principle[0];
  return (
    <div className="card pt-5 px-3 pb-5">
      <div className="row g-0 d-flex">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <div
            className="coursesThumbnail rounded-4 shadow"
            style={{
              backgroundImage: `url(${principle.image_url})`,
              width: "300px",
              height: "300px",
            }}
          ></div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body">
            <h4 className="fw-bold mb-5">ကျောင်းအုပ်ကြီး၏ နှုတ်ခွန်းဆက်စကား</h4>
            <p className="card-text mt-3 lh-lg">{principle.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipleSection;
