import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Hero from "./Hero";

export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Dashboard />
    </div>
  );
};
