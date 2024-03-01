import React from 'react'

function HomeCarousel(props) {
    const countOfImg = props.images.length;
    return (
        <div className='container px-0'>
            <div className='row p-0 m-0'>

            {
                countOfImg == 1 ?
                <div className="carousel-item active px-0">
                    <img src={props.images[0].image_url} className="d-block w-100" alt="..."/>
                </div>
                :
                <div id="carouselExampleAutoplaying" className="px-0 carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        props.images.map((el,index)=>{
                            return <div className={ index === 1? "carousel-item active":"carousel-item" } key={index}>
                                        <img src={el.image_url} className="d-block w-100" alt="..."/>
                                    </div>
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            }
            
            </div>
        </div>
    )
}

export default HomeCarousel