import React,{useState} from 'react'

function Pagination({totalNews,newsPerPage,setCurrentPage,currentPage}) {
    let pages = [];
    for(let i=1 ; i <= Math.ceil(totalNews / newsPerPage) ; i++){
        pages.push(i);
    }
  return <ul className='paginationBtns'>
            {
                pages.map((el,index)=>{
                    return <li key={index} onClick={()=>{setCurrentPage(el)}} className={el == currentPage ? 'paginationActive': ''}>
                                <a href="#">{el}</a>
                            </li>
                })          
            }
        </ul>
}

export default Pagination