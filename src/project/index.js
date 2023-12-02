
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import UserTable from "./users/table";
import Home from "./home"

function Project() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/project/home"element={<Home />}/>
          <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
