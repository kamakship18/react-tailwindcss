import React from "react";

function Card() {
  return (
    <div className="px-10 py-5 my-16 mx-10 border shadow-lg rounded-lg bg-white w-fit flex gap-6">
      <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="kalvium" />
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold">Register For Free</h4>
        <p className="text-lg font-small text-gray-500">
        Register Now for a Free counseling session
        </p>
      </div>
    </div>
  );
}

export default Card;