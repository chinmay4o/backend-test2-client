import React, { useState } from "react";
import { useHistory ,Link} from "react-router-dom";

const Register = () => {
    const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5002/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });

    if (response.status !== 200) {
      alert("Error");
    } else {
      alert("success");
    }
  }

  return (
    <div className="parent">
  
      <div className="container shadow p-5 form1">
      <h2 className="mb-5">Register Here</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary btn1"
          onClick={registerUser}
          >
            Register
          </button>
        </form>

        <p
        className="link1"
        >
          {" "}
          <Link to="/login">Already have an account ?</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
