import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const HomeLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" flex-1">
        <Outlet></Outlet>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayouts;
