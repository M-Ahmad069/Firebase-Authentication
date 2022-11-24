import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please put your Email and Password for your Identity</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label for="Email" className="leading-7 text-sm text-gray-600">Email</label>
                <InputControl type='email' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder="Enter email address" required/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="Password" className="leading-7 text-sm text-gray-600">Email</label>
                <InputControl type='password' onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} placeholder="Enter Password" required/>
              </div>
            </div>
            <div className="p-4 w-full">
              <p className='text-red-700 text-center text-sm font-bold mb-4'>{errorMsg}</p>
              <button disabled={submitButtonDisabled} onClick={handleSubmission} className="flex mx-auto text-white bg-emerald-400 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-emerald-400 hover:font-semibold hover:text-xl duration-300 rounded-full text-lg">
                Login
              </button>
              <div className='flex justify-center mt-6'>
                <p className='text-base font-thin'>
                  Want to register?{" "}
                  <span>
                    <Link className="hover:text-emerald-400 duration-300 mx-2" to="/signup">Sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
