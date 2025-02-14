import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <Navbar />
      <div>
        <section className="grid gap-2 place-content-evenly leading-8 text-white mt-[100px] mb-[100px] mx-10">
          <h4 className="text-amber-500 text-sm">Hello I'm</h4>
          <h2 className="text-2xl">Dansan Ankunda</h2>
          <h2 className="text-2xl">Coder</h2>
          <p className=" text-slate-600 text-sm">
            I have done different projects and have come up as a success
          </p>
          <div className="leading-8 my-4">
            <Link
              to="/contact"
              className="motion-safe:animate-pulse ease-out duration-300 rounded-full bg-emerald-500 px-4 mr-5 py-2"
            >
              Hire me
            </Link>
            <span>
              <Link
                to="/potfolio"
                className="bg-transparent hover:bg-emerald-400 hover:text-white rounded-full border border-emerald-400 px-4 py-1 text-green-400 ease-in-out duration-300"
              >
                See my Work
              </Link>
            </span>
          </div>
        </section>
        <section className="py-8 mx-20">
          <h1 className="text-white my-5">A Few of my skills</h1>
          <div>
            <ul className="flex gap-5 flex-wrap">
              <li className="flex flex-col items-center p-4 shadow-lg shadow-green-400/50 rounded">
                <span className="text-white">20%</span>
                <p className="text-green-400">Figma</p>
              </li>
              <li className="flex flex-col items-center p-4 shadow-lg shadow-amber-400/50 rounded">
                <span className="text-white">40%</span>
                <p className="text-amber-400">Tailwind</p>
              </li>
              <li className="flex flex-col items-center p-4 shadow-lg shadow-cyan-400/50 rounded">
                <span className="text-white">60%</span>
                <p className="text-cyan-400">Nodejs</p>
              </li>
              <li className="flex flex-col items-center p-4 shadow-lg shadow-purple-400/50 rounded">
                <span className="text-white">50%</span>
                <p className="text-purple-400">Reactjs</p>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <h2 className="text-white text-right mx-10">
            All rights reserved. {currentYear} &copy; Copyright
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
