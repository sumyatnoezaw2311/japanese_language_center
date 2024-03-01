import React from 'react'
import { useNavigate } from 'react-router-dom';

function Breadcrumb() {
    let navigate = useNavigate();
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb pt-5 pb-3 px-lg-5">
                <li className="breadcrumb-item"><a href="#" className='btn btn-sm btn-outline-primary' onClick={() => navigate(-1)}><i className="fas fa-arrow-left me-2"></i>Go Back</a></li>
            </ol>
        </nav>
    )
}

export default Breadcrumb