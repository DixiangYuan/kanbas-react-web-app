import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-main-content">
      <h1 class="wd-title">Dashboard</h1>
      <hr />
      <div class="wd-padding">
        <h4>Published Course (8)</h4>
        <hr />
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
                  </div>
                </div>
              </div>
            
            </Link>
          ))} </div>
      </div>
    </div>
  );
}
export default Dashboard;