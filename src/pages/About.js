import React from 'react'
import AboutKakehashi from '../components/componentForAbout/AboutKakehashi'
import PrincipleSection from '../components/componentForAbout/PrincipleSection'
import TeacherMessages from '../components/componentForAbout/TeacherMessages'
import OnTop from '../components/customComponents/OnTop'


function About(props) {

  const filteredTeacher = props.teacherMessages.filter(teacher => teacher.role === "TEACHER");
  const filteredPrinciple = props.teacherMessages.filter(teacher => teacher.role === "HEAD_MASTER");

  return (
    <div className='container-fluid px-0'>
      <PrincipleSection principle={filteredPrinciple}></PrincipleSection>
      <AboutKakehashi info={props.allInfo}></AboutKakehashi>
      <TeacherMessages messages={filteredTeacher}></TeacherMessages>
      <OnTop></OnTop>
    </div>
  )
}

export default About