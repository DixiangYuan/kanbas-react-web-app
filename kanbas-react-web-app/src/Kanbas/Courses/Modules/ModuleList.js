import React from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import db from "../../Database";
import Infor from "./Infor"

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div >
            <ul className="list-group">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item list-group-item-secondary">

                        {/* <Link key={module._id} to={`${module._id}`}> */}
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                            {/* </Link> */}
                        </li>

                        // <div>
                        //     <p class="d-inline-flex gap-1">
                        //         <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        //             Link with href
                        //         </a>
                        //     </p>
                        //     <div class="collapse">
                        //         <div class="card card-body">
                        //             Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        //         </div>
                        //     </div>
                    ))
                }
            </ul>
        </div>
    );
}
export default ModuleList;