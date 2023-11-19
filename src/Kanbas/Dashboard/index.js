import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //   {
  //     ...course,
  //     _id: new Date().getTime() //set id by the date
  //   }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId)); // remove the specific id
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id == course._id) {
  //         console.log(11);
  //       } else {
  //         return c;

  //       }
  //     })
  //   );
  // };

  return (
    <div class="wd-main-content">
      <h1 class="wd-title">Dashboard</h1>
      <hr />
      <div class="wd-padding">
        <h4>Published Course (8)</h4>
        <hr />
        <div>
          <h1>Dashboard</h1>
          <h5>Course</h5>
          <div className="col col-5">
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
          <button onClick={addNewCourse} >
            Add
          </button>
          <button onClick={updateCourse}>
            Update
          </button>
          </div>
        </div>

        <div class="d-flex flex-row flex-wrap wd-constant-size">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">

              {/* Making a course card */}
              <div className="col col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card">
                  <img src="../images/online-courses.avif" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 id="card-h" className="card-title wd-card-title">{course.number} {course._id} {course.name}</h5>
                    <p className="card-text wd-card-sub">
                      {course.number}.{course._id}.{course.year}{course.month}
                    </p>
                    <p id="card-p" className="card-text wd-card-content-size">
                      Section {course.year}{course.month}{course.section} Fall {course.year} semester Full Term
                    </p>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                        console.log(event);
                      }}>
                      Edit
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>

            </Link>
          ))} 
        </div>
      </div>
    </div>
  );
}
export default Dashboard;