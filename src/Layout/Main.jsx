import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <div className="w-full ">
        <Navbar></Navbar>
      </div>
      <div className=" py-28 max-w-screen-xl mx-auto min-h-[calc(100vh-220px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
