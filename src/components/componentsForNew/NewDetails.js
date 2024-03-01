import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import OnTop from '../customComponents/OnTop';

function NewDetails(props) {

  const navigate = useNavigate();
  const { state } = useLocation();


  return (
    <>
      <div className='container card'>
        <nav aria-label="breadcrumb px-0 pt-5 pb-3 px-md-5 pt-md-5">
          <ol className="breadcrumb px-5 pt-5">
            <li className="breadcrumb-item"><a href="#" className='btn btn-sm btn-outline-primary' onClick={() => navigate('/news')}><i className="fas fa-arrow-left me-2"></i>Go Back</a></li>
          </ol>
        </nav>
        <div className='d-flex flex-column align-items-center'>
          <div className="card">
            <h5 className="card-title text-center mb-5">{state.title}</h5>
            <img src={state.image} className="card-img-top" alt="..."/>
              <div className="card-body p-0 py-4">
                <p className="card-text px-0 lh-lg">{state.description}</p>
              </div>
          </div>
        </div>
      </div>
      <OnTop></OnTop>
    </>
  )
}

export default NewDetails