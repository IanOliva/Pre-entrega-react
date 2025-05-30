import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen container mx-auto">
      <div className="flex md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-purple-600 active:bg-purple-600 hover:bg-purple-700"
          >
            Volver
          </Link>
        </div>
        <div className="">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
