import * as client from "./client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signin = async () => {
    try {
      const credentials = { username: username, password: password };
      console.log({ username });
      console.log({ password });
      const user = await client.signin(credentials);
      console.log({ user });
      navigate("/project/account");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h2><img src="YalpLogo.jpg" />Log In</h2>
              <p>Please enter your credentials to log in.</p>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" onClick={signin}>
              Sign in
            </button>
            <p class="message">Not registered?<Link to="/project/signup"
            className={`nav-link`}>Create an account</Link>
          </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signin;