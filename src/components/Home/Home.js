import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className='container flex flex-col'>
      <div  className='flex mt-44'>
          <Link className='flex m-auto cursor-pointer py-3 px-7 md:py-6 md:px-16 rounded-full bg-emerald-400 hover:bg-white hover:text-emerald-400 border hover:border-emerald-400 hover:font-semibold duration-200 ' to="/login">Login</Link>
          <Link className='flex m-auto cursor-pointer py-3 px-6 md:py-6 md:px-16 rounded-full bg-emerald-400 hover:bg-white hover:text-emerald-400 border hover:border-emerald-400 hover:font-semibold duration-200 ' to="/signup">Signup</Link>
      </div>

      <h2  className='flex justify-center items-center mt-10 text-xl md:text-3xl font-semibold' >{props.name ? `Welcome - Mr ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
