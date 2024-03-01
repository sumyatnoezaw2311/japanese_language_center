import React from 'react';

function GallaryItem(props) {
    return (
            <div className='col-12 col-lg-6 mb-5'>
                <div className="card p-0 p-lg-3 border">
                <div className='coursesThumbnail m-0 card-img-top w-100' style={{ backgroundImage: `url(${props.photoUrl})`}}></div>
                <div className="card-body p-0">
                    <p className="card-title my-3">{props.caption}</p>
                </div>
                </div>
            {/* <div className="card col-12 col-md-6 border p-0 p-md-3">
                <div className='coursesThumbnail w-100' style={{ backgroundImage: `url(${props.photoUrl})`}}></div>
                <div className="card-body">
                    <p className="card-title mb-0">{props.caption}</p>
                </div>
            </div> */}
        </div>
    )
}

export default GallaryItem