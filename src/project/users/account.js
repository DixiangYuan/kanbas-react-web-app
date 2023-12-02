import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {

  const navigate = useNavigate();
  console.log({ navigate });
  const { id } = useParams();
  console.log({ id });
  const [account, setAccount] = useState(null);
  console.log({ account });
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const updateUser = async () => {
    const status = await client.updateUser(account._id, account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div>
      <div class="login-page">
      <div class="login-header">
        <h1>Account Information</h1>
        </div>
        {account && (
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="form-control mb-2"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control mb-2"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control mb-2"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              className="form-control mb-2"
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            />

            <label htmlFor="email">Email:</label>
            <input
              className="form-control mb-2"
              value={account.email}
              onChange={(e) => setAccount({ ...account, email: e.target.value })}
            />

            <label htmlFor="role">Role:</label>
            <select
              className="form-control mb-2"
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
            <button className="btn btn-primary w-100 mb-2" onClick={updateUser}>
              Update
            </button>
            <button className="btn btn-danger w-100 mb-2" onClick={signout}>
              Signout
            </button>
            <Link to="/project/admin/users" className="btn btn-warning w-100">
              Users
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
