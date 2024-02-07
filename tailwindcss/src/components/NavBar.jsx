import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between bg-red-500 px-10 py-5 items-center">

      <div className="flex flex-row items-center gap-10">
        <div className="text-2xl font-bold text-white">Kalvium</div>
        <div className="flex flex-row gap-5">
          <a href="" className="text-lg text-slate-100 font-semibold">
            About Us
          </a>
          <a href="" className="text-lg text-slate-100 font-semibold">
            Contacts
          </a>
          <a href="" className="text-lg text-slate-100 font-semibold">
            Courses
          </a>
        </div>
      </div>
      <button className="font-semibold text-white rounded border-2 px-5 py-2 ">
        Login
      </button>

    </div>
  );
}

export default Navbar;