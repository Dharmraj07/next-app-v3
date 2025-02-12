'use client'; 
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <h1 className="text-5xl font-bold text-gray-800">404</h1> */}
      <p className="text-lg text-gray-600 mt-2">Page Not Found</p>
      <img src="/not-found.svg" alt="Not Found Illustration" className="w-48 h-48 mt-4" />
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
