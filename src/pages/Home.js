import React from 'react'
import CourseSample from '../components/componentsForHomePage/CourseSample'
import HomeCarousel from '../components/componentsForHomePage/HomeCarousel';
import ActivitiesAndNews from '../components/componentsForHomePage/ActivitiesAndNews';
import Memories from '../components/componentsForHomePage/Memories';
import StudentReviews from '../components/componentsForHomePage/StudentReviews';
import OnTop from '../components/customComponents/OnTop';

function Home(props) {
  return (
    <div className='container-fluid px-0'>
      <HomeCarousel images={props.homeCarousel}></HomeCarousel>
      {
        props.courses.map((el,index)=>{
          return <CourseSample course={el} key={index}></CourseSample>
        })
      }
      <ActivitiesAndNews news={props.activitiesAndNews}></ActivitiesAndNews>
      <Memories images={props.galleryHomeData}></Memories>
      <StudentReviews studentReviews={props.studentFeedbacks}></StudentReviews>
      <OnTop></OnTop>
    </div>
  )
}

export default Home