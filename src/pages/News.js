import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OnTop from '../components/customComponents/OnTop';
import ReactPaginate from 'react-paginate';


function News(props) {

  const navigate = useNavigate();
  const [posts, setPost] = useState(props.news.reverse());
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 5;
  const pagesPosted = pageNumber * postsPerPage;
  const displayPosts = posts.slice(pagesPosted, pagesPosted + postsPerPage).map((el, index) => {

    return (
      <div className="card border p-lg-3 mb-3 w-100" key={index}>
        <div className="row d-flex flex-column-reverse flex-lg-row align-items-start g-0 my-3" key={index}>
          <div className="col-lg-4">
            <img src={el.image_url} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-lg-8">
            <div className="card-body px-0 px-lg-2">
              <h5 className="card-title fw-bold lh-base">{el.title.substring(0, 70)}....</h5>
              <small className="badge text-bg-secondary my-3">{el.updated_at}</small>
              <p className="card-text lh-lg">{el.description.substring(0, 100)}....</p>
              <div className="card-text">
                <a onClick={() => { createPost(el.id, el.title, el.description,el.image_url,el.created_at) }} className='btn btn-sm btn-outline-primary'>see more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });


  const createPost = (id, title, description, image ,created_at) => {
    navigate(`/news/${id}`, {
      state: {
        id: id,
        title: title,
        description: description,
        image: image,
        created_at: created_at,
      }
    })
  }

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({selected})=>{
    setPageNumber(selected);
  }

  return (
    <div className='container'>
      <div className='row pt-5 card d-flex flex-row align-items-center justify-content-center'>
        <h3 className='text-center fw-bold'>လှုပ်ရှားမှုနှင့်သတင်းများ</h3>
        <div className='row row-cols-1 row-cols-md-2 g-4 px-lg-5'>

          {/* displaying the posts */}
          {displayPosts}
          <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount = {pageCount}
            onPageChange ={changePage}
            containerClassName = {"paginationBtns"}
            previousLinkClassName = {"previousBtn"}
            nextLinkClassName = {"nextBtn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}  
          >
          </ReactPaginate>
        </div>
      </div>
      <OnTop></OnTop>
    </div>
  )
}

export default News