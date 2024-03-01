import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { browserHistory } from 'react-router'
import Home from "./pages/Home";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactInfo";
import NewDetails from "./components/componentsForNew/NewDetails";
import Courses from "./pages/Courses";
import ToTheTop from "./components/ToTheTop";
import axios from "axios";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [galleryHomeData, setGalleryHomeData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentFeedbacks, setStudentFeedbacks] = useState([]);
  const [teacherMessages, setTeacherMessages] = useState([]);
  const [allInfo, setAllInfo] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const [homeCarousel, setHomeCarousel] = useState([]);



  let urls = [
    "https://kjla.info/kakehashi/api/gallery", // api for gallery
    "https://kjla.info/kakehashi/api/gallery/home", // api for images from home
    "https://kjla.info/kakehashi/api/news", // api for news
    "https://kjla.info/kakehashi/api/course", // api for courses included japan & it
    "https://kjla.info/kakehashi/api/student/home", // api for student feedbacks
    "https://kjla.info/kakehashi/api/teacher", // api for teacher's message included principle
    "https://kjla.info/kakehashi/api/all_info", // api for all about kakehashi
    "https://kjla.info/kakehashi/api/school_info", // api for contact info
    "https://kjla.info/kakehashi/api/site_img", // api for home carousel images
  ];

  useEffect(() => {
    const requests = urls.map(async (url) => await axios.get(url));
    axios
      .all(requests)
      .then((responses) => {
        setGalleryData(responses[0].data.data.slice(0, 50));
        setGalleryHomeData(responses[1].data.data);
        setNewsData(responses[2].data.data.slice(0, 50));
        setCourses(responses[3].data.data);
        setStudentFeedbacks(responses[4].data.data);
        setTeacherMessages(responses[5].data.data);
        setAllInfo(responses[6].data.data);
        setContactInfo(responses[7].data.data);
        setHomeCarousel(responses[8].data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <div className="App">
      <div className="container-fluid px-0 overflow-hidden">
        {isloaded ? (
          <div className="container px-0">
            <Router>
              <NavBar courses={courses}></NavBar>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      homeCarousel={homeCarousel}
                      courses={courses}
                      activitiesAndNews={newsData.reverse().slice(0, 3)}
                      galleryHomeData={galleryHomeData}
                      studentFeedbacks={studentFeedbacks}
                    ></Home>
                  }
                ></Route>
                <Route
                  path={"/courses/:name"}
                  element={<Courses courses={courses}></Courses>}
                ></Route>
                <Route
                  path={"/courses/:name/:name"}
                  element={<CourseDetails courses={courses}></CourseDetails>}
                ></Route>

                <Route
                  path="/news"
                  element={<News news={newsData}></News>}
                ></Route>
                <Route
                  path="/news/:postId"
                  element={<NewDetails></NewDetails>}
                ></Route>
                <Route
                  path="/gallery"
                  element={<Gallery photos={galleryData}></Gallery>}
                ></Route>
                <Route
                  path="/about-us"
                  element={
                    <About
                      teacherMessages={teacherMessages}
                      allInfo={allInfo}
                    ></About>
                  }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
              <ContactInfo contactInfo={contactInfo}></ContactInfo>
              <ToTheTop></ToTheTop>
            </Router>
          </div>
        ) : (
          <div className="bg-light d-flex justify-content-center align-items-center w-100 vh-100">
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#901844"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
