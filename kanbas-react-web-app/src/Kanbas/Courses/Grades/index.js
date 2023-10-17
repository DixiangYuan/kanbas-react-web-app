import db from "../../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOut,
    faSignIn,
    faCog
} from "@fortawesome/free-solid-svg-icons";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="col-10">

            <div class="row">
                <div class="col">
                    <div class="float-end">
                        <button class="btn btn-secondary float-end mx-1">
                            <FontAwesomeIcon className="" icon={faCog} />
                        </button>
                        <button class="btn btn-secondary float-end mx-1">
                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                            <FontAwesomeIcon className="" icon={faSignOut} />
                            &nbsp;Export
                        </button>
                        <button class="btn btn-secondary float-end mx-1">
                            <FontAwesomeIcon className="" icon={faSignIn} />
                            &nbsp;Import</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="name" class="fw-bold form-label">Student Names</label>
                    <input type="text" class="form-control" id="name" placeholder="Search students"></input>
                </div>
                <div class="col-6">
                    <label for="assignment-name" class="form-label fw-bold">Assignment Names</label>
                    <input type="text" class="form-control" id="assignment-name"
                        placeholder="Search Assignments"></input>
                </div>
            </div>
            <div class="row">
                <div class="col mt-3">
                    <button class="btn btn-secondary">
                        <i class="fa fa-filter fa-lg"></i>
                        Apply Filters</button>
                </div>
            </div>

            <div className="col table-responsive">
                <table className="table table-striped table-bordered mt-2">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div>
        </div>
    );
}
export default Grades;