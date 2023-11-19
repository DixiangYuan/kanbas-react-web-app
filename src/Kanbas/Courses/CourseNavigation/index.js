import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments","Zoom Meetings", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", 
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings" ];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.replace("%20", " ").includes(link) ? "wd-active" : "wd-inactive"}`}>
                    <li className={`${pathname.replace("%20", " ").includes(link) ? "wd-li-active" : ""}`}>{link}</li>
                </Link>
            ))}
        </div>

    );
}
export default CourseNavigation;