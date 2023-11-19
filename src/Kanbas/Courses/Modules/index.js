import ModuleList from "./ModuleList";
import { Route, Routes, Link, useParams, useLocation } from "react-router-dom";
import Infor from "./Infor"

function Modules() {
    return (
        <div className="wd-main-content col">
            <div>
                <button class="btn btn-danger wd-float-right">+ Module</button>
                <div class="wd-fixed-width wd-float-right">
                    <select class="form-select" >
                        <option value="All">Publish All</option>
                        <option value="Selected">Publish Selected</option>
                    </select>
                </div>
                <button class="btn btn-secondary wd-float-right">Collapse All</button>
                <button class="btn btn-secondary wd-float-right">View Progress</button>
                <br /><br />
                <hr />
            </div>
            <ModuleList />
            <div>
            </div>
            
        </div>
    );
}
export default Modules;