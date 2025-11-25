import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../pages/loading/Loading";

const HomeLayouts = () => {
   const { loading} = use(AuthContext);
    // console.log(user)

    if(loading){
        return <Loading></Loading>
    }
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
