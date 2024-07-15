import React from "react";

export default function NetflixHeader() {
  return (
    <div className="flex justify-between p-3 m-3">
      <div>
        <h2 className="text-red-700  font-bold text-3xl ">NETFLIX</h2>
      </div>
      <div className="flex items-center my-2 gap-x-4">
        <select
          name=""
          id=""
          className="form-select mr-2 px-6 py-2 border border-gray-300 rounded"
        >
          <option value="">Language</option>
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded ">
          Sign In
        </button>
      </div>
    </div>
  );
}