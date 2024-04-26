import Footer from "../Components/Footer/Footer.Jsx";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Mainpage = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <Header />
        <Navbar />
      </div>

      <div className="2xl:px-20 lg:px-18 md:px-14 xs:px-5 sm:px-8">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Mainpage;
