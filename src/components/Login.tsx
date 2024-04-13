import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("use effect got called");
    setName("");
    setPassword("");
  }, []);

  const handleSubmitt = (e: any) => {
    e.preventDefault();
    console.log("hello");
    axios
      .get(
        "http://localhost:7090/login?email=" +
          name +
          "&password=" +
          password
      )
      .then((ok) => {
        console.log(ok.data);
        if (ok.data.sucess) {
          navigate("/Cars");
        } else {
          console.log("failure got called....");
          setName("");
          setPassword("");
          navigate("/FirstPage");
        }
      });
  };

  return (
    <div className="login">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form
            onSubmit={handleSubmitt}
            className="login100-form validate-form"
          >
            <div className="text-center mb-3">
              <h1>LOGIN </h1>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="email"
                id="loginName"
                className="form-control"
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="loginName">
                Email 
              </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    checked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
            >
              Login
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
