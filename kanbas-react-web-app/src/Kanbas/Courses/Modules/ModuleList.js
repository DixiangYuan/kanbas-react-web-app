import React, { useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="list-group wd-module-list">
            <li className="list-group-item col col-xl-5 col-md-8 col-12">
                <button class="btn btn-success wd-float-right" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button class="btn btn-primary wd-float-right" onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <input className="wd-float-left" value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <br/>
                <textarea className="wd-float-left" value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
            </li>
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item  list-group-item-secondary">
                        <button class="btn btn-success wd-float-right" onClick={() => dispatch(setModule(module))}>Edit</button>
                        <button class="btn btn-danger wd-float-right"
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                        <p>{module._id}</p>
                    </li>))}
        </ul>
    );
}
export default ModuleList;