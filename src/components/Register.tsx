import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
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
      .post(
        "http://localhost:7090/add?email=" +
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
          navigate("/Login");
        }
      });
  };

  return (
    <div className="register">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>

                <form
                onSubmit={handleSubmitt}
                className="login100-form validate-form"
                >
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
                    <label className="form-label" htmlFor="form3Example3cg">
                      Your Email
                    </label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="passsword"
                      id="loginName"
                      className="form-control"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setPassword(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                       type="submit"
                       data-mdb-button-init
                       data-mdb-ripple-init
                       className="btn btn-primary btn-block mb-4"
                    >
                      Register
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Have already an account?{" "}
                    <a href="/login" className="fw-bold text-body">
                      <u>Login here</u>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
