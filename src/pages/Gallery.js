import React,{useState} from 'react';
import GalleryItem from '../components/componentsForGallery/GalleryItem';
import OnTop from '../components/customComponents/OnTop';
import ReactPaginate from 'react-paginate';

function Gallery(props) {
  const [pageNumber, setPageNumber] = useState(0);

  const photosPerPage = 4;
  const startIndex = pageNumber * photosPerPage;
  const displayPhotos = props.photos.slice(startIndex,startIndex + photosPerPage).map((el,index)=>{
    return <GalleryItem photoUrl={el.image_url} caption={el.caption} key={index}></GalleryItem>;
  })
  const pageCount = Math.ceil(props.photos.length / photosPerPage);

  const changePage = ({selected})=>{
    setPageNumber(selected);
  }

  return (
    <div className='container'>
      <div className='row pt-5 px-1 card d-flex flex-row align-items-center justify-content-center'>
        <h3 className='text-center fw-bold mb-5'>အမှတ်တရဓာတ်ပုံများ</h3>
          <div className='row'>
          {
            displayPhotos
          }
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

export default Gallery