import React from 'react'

function AboutKakehashi(props) {

    return (
        <div className="card ps-lg-5 p-2 my-2">
            <h4 className='fw-bold text-center mt-3 mb-5'>သင်တန်းအ‌ကြောင်း</h4>
            <div className="row g-0 d-flex flex-column align-items-center table-responsive">
                <table className='table table-borderless w-100 align-middle'>
                    <tbody>
                        {
                            props.info.map((el,index)=>{
                                return <tr key={index}>
                                    <td className="text-nowrap fw-bold w-50">{el.title}</td>
                                    <td>{el.description}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default AboutKakehashi