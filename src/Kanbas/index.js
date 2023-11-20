import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-1n6i.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(`${URL}`);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "RS 000",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    section: "000000",
    term: "Fall 2023",
  });
  const addNewCourse = async () => {
    const response = await axios.post(`${URL}`, course);
    setCourses([response.data, ...courses]);
    setCourse({
      name: "",
      _id: "RS 000",
      // name: "New Course",
      // number: "New Number",
      // startDate: "2023-09-10",
      // endDate: "2023-12-15",
      // section: "000000",
      // term: "Fall 2023",
    });
  };
  //reset course

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    //reset course
    setCourse({
      name: "",
    });
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div className="col">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />

        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;