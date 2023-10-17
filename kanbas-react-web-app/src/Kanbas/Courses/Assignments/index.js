import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisV,
    faPlus,
    faAngleDown,
    faCheckCircle,
    faPencilSquare
  } from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="col-10">
     
                    <div class="row">
                        <div id="student-name" class="col"><input type="text" class="form-control"
                                placeholder="Search for Assignment"></input></div>
                        <div class="col"></div>
                        <div class="col">
                            <div class="float-end">
                                <button class="btn btn-secondary float-end wd-additional-margin">
                                <FontAwesomeIcon className="" icon={faEllipsisV} />
                                </button>
                                <button class="btn btn-danger float-end wd-additional-margin">
                                <FontAwesomeIcon className="" icon={faPlus} />
                                &nbsp;Assignment</button>
                                <button class="btn btn-secondary float-end wd-additional-margin">
                                <FontAwesomeIcon className="" icon={faPlus} />
                                &nbsp;Group</button>
                            </div>

                        </div>
                    </div>
                    <hr></hr>
      <div className="list-group">
        <li  className="list-group-item list-group-item-secondary wd-no-margin">
                        <div className="row">
                            
                            <div className="wd-title col"> <FontAwesomeIcon className="" icon={faEllipsisV} />
                            <FontAwesomeIcon className="" icon={faAngleDown} />
                            &nbsp;&nbsp;Assignments </div>
                            <div className="float-end col-2">&nbsp;40% of
    Total&nbsp;&nbsp;<FontAwesomeIcon className="" icon={faPlus} />&nbsp;
    <FontAwesomeIcon className="" icon={faEllipsisV} /></div>
    </div>
                            
                        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"><FontAwesomeIcon className="" icon={faEllipsisV} />&nbsp;<FontAwesomeIcon className="wd-check-icon" icon={faPencilSquare} />
            &nbsp;&nbsp;{assignment.title}<FontAwesomeIcon className="float-end" icon={faEllipsisV} />
            <FontAwesomeIcon className="float-end wd-check-icon" icon={faCheckCircle} />
</Link>
))} </div>
</div>
); }
export default Assignments;

{/* <li class="list-group-item list-group-item-secondary ">
<i class="fa fa-ellipsis-v wd-no-margin"></i>&nbsp;<i
    class="fa fa-angle-down wd-no-margin">&nbsp;&nbsp;&nbsp;</i>
Assignments

<i class="fa fa-ellipsis-v float-end wd-no-margin wd-assignment-icon"></i>
<i class="fa fa-plus float-end wd-course-home-title-plus wd-assignment-icon"
    style="color: #7e7f82;">&nbsp;&nbsp;&nbsp;</i>

<i class="float-end "
    style="border:#7e7f82 solid 2px; border-radius: 30%;">&nbsp;40% of
    Total&nbsp;</i> */}
