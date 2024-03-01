import React from 'react'

function ModalForTeacher(props) {
    
    return (
        <div>
            <div className="modal fade overflow-hidden" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog m-5 m-md-auto modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content h-75 h-lg-100">
                        <div className="modal-body p-4">
                            <div className='d-flex align-items-center mb-4'>
                                <img className='w-50 h-50 rounded border' src={props.url}></img>
                                <div className='ms-4'>
                                    <h5 className='fw-bold text-nowrap'>{props.name}</h5>
                                </div>
                            </div>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForTeacher