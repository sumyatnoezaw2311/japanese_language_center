import React from 'react'

function ThinYoeModal(props) {
  return (
    <div>
        <div className="modal fade overflow-hidden" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog m-5 m-md-auto modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body p-4">
                        <h5 className='text-center fw-bold mb-3'>{props.title} အကြောင်း</h5>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThinYoeModal