import React from 'react'


function Memories(props) {
  return (<div className='container px-0'>
    <div className='row card p-3 m-0'>
    <h3 className='fw-bold text-center mt-3 mb-5 mb-lg-0'>အမှတ်တရဓာတ်ပုံများ</h3>
        <div id="carouselExampleFade" className="carousel slide carousel-fade memoriesCarouselContainer">
        <div className="carousel-inner position-relative">
          {
            props.images.map((el,index)=>{
              return <div className={`carousel-item h-100 ${index === 1 ? "active":""}`} key={index}>
              <img src={el.image_url} className="d-block w-100 rounded-4" alt="..."/>
              <div className='w-100 h-25 position-absolute captionContainer'>
                  <p className='text-light text-center px-5 mb-0'>{el.caption}</p>
              </div>
            </div>
            })
          }

          {/* <div className="carousel-item h-100">
            <img src="https://kjla.info/kakehashi/public/storage/gallery_images/1676983168.jpg" className="d-block w-100 rounded-4" alt="..."/>
            <div className='w-100 position-absolute captionContainer'>
                <p className='text-light text-center px-5'>hello testing</p>
            </div>
          </div>
          <div className="carousel-item h-100">
            <img src="https://kjla.info/kakehashi/public/storage/gallery_images/1676983150.jpg" className="d-block w-100 rounded-4" alt="..."/>
            <div className='w-100 position-absolute captionContainer'>
                <p className='text-light text-center px-5'>hello testing</p>
            </div>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Memories