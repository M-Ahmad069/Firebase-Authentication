import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
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
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Signup</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We never share your data with anyone</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="Email" className="leading-7 text-sm text-gray-600 flex pl-1">First Name</label>
                <InputControl
                  placeholder="Enter your First Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="Email" className="leading-7 text-sm text-gray-600 flex pl-1">Last Name</label>
                <InputControl
                  placeholder="Enter your Last Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="Email" className="leading-7 text-sm text-gray-600 flex pl-1">Email</label>
                <InputControl
                  placeholder="Enter email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="Passeord" className="leading-7 text-sm text-gray-600 flex pl-1">Passeord</label>
                <InputControl
                  type='password' placeholder="Enter password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
              </div>
            </div>
            <div className="p-4 w-full">
              <p className='text-red-700 text-center mb-4 text-sm font-bold'>{errorMsg}</p>
              <button disabled={submitButtonDisabled} onClick={handleSubmission} className="flex mx-auto text-white bg-emerald-400 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-emerald-400 hover:font-semibold hover:text-xl duration-300 rounded-full text-lg">Submit</button>
            </div>
            <div className='flex m-auto space-x-2 mt-6'>
              <p className='text-base font-thin'>Already have an account</p>
              <span className='hover:text-emerald-400 duration-300'><Link to='/login'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
