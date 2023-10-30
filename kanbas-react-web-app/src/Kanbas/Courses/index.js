import db from "../Database";
import React from 'react';
import '../index.css'
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-main-page">
      {/* TODO Change / to > */}
      <nav aria-label="breadcrumb" className="wd-course-nav" style={{ '--bs-breadcrumb-divider': '>' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item wd-link">
            <FontAwesomeIcon className="wd-bar-icon " icon={faBars} />&nbsp;
            {course.number} {course.month} {course.sem}
          </li>
          <li className="breadcrumb-item active" aria-current="page">Modules</li>
        </ol>
        <hr />
      </nav>
      <div className="d-flex">
        <div className="wd-secondary-fixed-width wd-second-navigation">
          <div className="wd-text-container ">{course.year}{course.month} {course.semester} {course.year} Semester</div>
          <CourseNavigation />
        </div>

        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Modules/*" element={<Modules />} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
          </Routes>
        </div >
      </div>

    </div >
  );
}
export default Courses;