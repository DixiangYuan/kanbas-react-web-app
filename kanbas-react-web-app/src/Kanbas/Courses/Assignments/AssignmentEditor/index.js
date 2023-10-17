import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const checkboxLabels = [
        { value: "Text Entry", done: false },
        { value: "Website URL", done: false },
        { value: "Media Recordings", done: false },
        { value: "Student Annotation", done: false },
        { value: "File Uploads", done: false }
    ];


    return (
        <div className="wd-main-content col-10">
            <div class="row">
                <div class="col">
                    <i class="float-end wd-check-icon"
                    // style="font-size: larger; font-weight: bold; align-items: center; padding: 5px;"
                    >&nbsp;&nbsp;Published</i>
                    <br />
                    <hr />
                </div>
            </div>


            <h2>Assignment Name</h2>
            <input value={assignment.title}
                className="form-control mb-2" />
            <div class="mb-3">
                <textarea class="form-control" id="assignment-description" rows="5">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
                </textarea>
            </div>

            <div class="row g-3 align-items-center  wd-form-margin">
                <div class="col-2  text-end">
                    <label for="inputPassword6" class="col-form-label">Points</label>
                </div>
                <div class="col-6">
                    <input value="100"
                        className="form-control mb-2" />
                </div>
            </div>
            <div class="row g-3 align-items-center wd-form-margin">
                <div class="col-2  text-end">
                    <label for="inputPassword6" class="col-form-label">Assignment Group</label>
                </div>
                <div class="col-6">
                    <select class="form-select">
                        <option value="Percentage">ASSIGNMENTS</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3 align-items-center  wd-form-margin">
                <div class="col-2  text-end">
                    <label for="inputPassword6" class="col-form-label">Display Grade as</label>
                </div>
                <div class="col-6">
                    <select class="form-select">
                        <option value="Percentage">Percentage</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3 align-items-center wd-form-margin">
                <div class="col-2">
                </div>
                <div class="col-6">
                    <input value="100" className="form-control mb-2" />
                    <label for="flexCheckChecked">Do not count this assignment towards the final grade</label>
                </div>
            </div>
            <div class="row mb-3 align-items-center wd-form-margin">

                <div class="col-2  text-end">
                    <label for="inputPassword6" class="col-form-label">Submission Type</label>
                </div>
                <div class="col-6 wd-text-box">
                    <div class="wd-form-margin">
                        <select class="form-select wd-form-margin">
                            <option value="Percentage">Online</option>
                        </select>
                        Online Entry Options<br />

                        <ul className="list-group">
                            {
                                checkboxLabels.map(checkboxLabel => {
                                    return (<div><input type="checkbox"></input>
                                        &nbsp;{checkboxLabel.value}
                                    </div>);
                                }
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div class="row mb-3 align-items-center ">
                    <div class="col-2  text-end">
                        <label for="inputPassword6" class="col-form-label">Submission Attempts</label>
                    </div>
                    <div class="col-6">
                        <select class="form-select">
                            <option value="Unlimited">Unlimited</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-2 text-end">
                        <label for="inputPassword6" class="col-form-label">Plagiarism Review</label>
                    </div>
                    <div class="col-6">
                        <select class="form-select">
                            <option value="None">None</option>
                            <option value="Check">Check</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-2  text-end">
                        <label for="inputPassword6" class="col-form-label"> Group Assignment</label>
                    </div>
                    <div class="col-6">

                        <input type="checkbox"></input>
                        &nbsp; This is a group assignment
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-2  text-end">
                        <label for="inputPassword6" class="col-form-label"> Peer Reviews</label>
                    </div>
                    <div class="col-6">
                        <input type="checkbox"></input>
                        &nbsp; Require Peer Reviews
                    </div>
                </div>
                <div class="row mb-3 wd-form-margin">

                    <div class="col-2  text-end" valign="top">
                        <label for="inputPassword6" class="col-form-label">Assign</label>
                    </div>
                    <div class="card col-8">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="">Assign to</label> <br />
                                <input class="form-control col" type="text" className="form-control"
                                    value="Everyone" />
                            </div>
                            <div class="row g-3 align-items-center  wd-form-margin">
                            <div class="col">
                            <label for="due-date">Due</label><br/>
                                                <input class="form-control" id="due-date" name="date" value="2021-09-08"
                                                    min="2021-09-04" max="2021-09-23" />
                                                    <div class="row">
                                                    <div class="col-6">
                                                        <label for="available-date">Available from</label><br/>
                                                        <input class="form-control" id="available-date" type="date"
                                                            value="2021-09-08" min="2021-09-04" max="2021-09-23" />
                                                    </div>
                                                    <div class="col-6">
                                                        <label for="end-date">Until</label><br/>
                                                        <input class="form-control" id="end-date" type="date"
                                                            value="2021-09-08" min="2021-09-04" max="2021-09-23" />
                                                    </div>

                                                    </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div><br />



            <hr />
            <div class="float-end">

                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary wd-additional-margin">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2 wd-additional-margin">
                    Save
                </button>
            </div>
        </div>

    );
}
export default AssignmentEditor;