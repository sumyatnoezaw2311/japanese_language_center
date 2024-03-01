import React from 'react'

function ContactInfo(props) {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <div className='container'>
            {
                props.contactInfo.map((el,index)=>{
                    return <div className='row card py-5 my-2 d-flex flex-row align-items-start justify-content-between' key={index}>
                    <div className='col-12 col-lg-8 ps-5'>
                        <h3 className='mb-3 text-primary'>{el.name}</h3>
                        <p>{el.address}</p>
                    </div>
                    <div className='col-12 col-lg-4 ps-5 text-primary'>
                        <h3 className='mb-3 text-primary'>Contact Us</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='pe-3 py-3'><i className="fas fa-phone-alt"></i></td>
                                    <td><a href='#' className='recentActivityLink text-dark contactInfoLink'>{el.phone}</a></td>
                                </tr>
                                <tr>
                                    <td className='pe-3 py-3'><i className='fa fa-envelope'></i></td>
                                    <td><a target={"_blank"} href={`mailto:${el.email}`} className='recentActivityLink text-dark contactInfoLink'>{el.email}</a></td>
                                </tr>
                                <tr>
                                    <td className='pe-3 py-3'><i className="fab fa-facebook-f"></i></td>
                                    <td><a target={"_blank"} href={`https://facebook.com/${el.facebook}`} className='recentActivityLink text-dark contactInfoLink'>{el.facebook}</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                })
            }

            <div className='row card py-3 my-2 d-flex flex-row align-items-center justify-content-between'>
                <p className='text-center mb-0'>All Rights Reserved by Kakehashi © {currentYear}</p>
            </div>
        </div>
    )
}

export default ContactInfo