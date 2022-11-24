import React from "react";

function InputControl(props) {
  return (
    <div className='container'>
      {props.label && <label>{props.label}</label>}
      <input type="text"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" {...props} />
    </div>
  );
}

export default InputControl;
