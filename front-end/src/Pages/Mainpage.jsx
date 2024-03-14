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

      <div className="px-20">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Mainpage;
