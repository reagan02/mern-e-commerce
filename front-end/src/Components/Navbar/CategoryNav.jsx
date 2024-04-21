import Asidebar from "./Asidebar";
import Billboard from "./Billboard";
import { useState } from "react";
import "./CategoryNav.css";
const Nav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01picZtn1pgfiWtkV70_!!6000000005390-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01yo2AfH1uDQVMUmu7w_!!6000000006003-0-tps-1976-688.jpg_2200x2200q80.jpg  ",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01Hsv9P31v1o4UQIflN_!!6000000006113-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01irzagQ23JgSPRl8N4_!!6000000007235-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01XpHuje27FnYoNofDV_!!6000000007768-0-tps-1976-688.jpg_2200x2200q80.jpg",
  ];
  return (
    <div className="w-full ">
      <div className="w-full lg:flex lg:a">
        {/* category lists at the left side*/}
        <ul className="w-1/5 flex-col justify-between pr-3 lg:border-r-2 pt-10 text-base hidden lg:flex">
          <li>
            <div className="flex justify-between">
              <a href="">Woman&apos;s Fashion</a>
              <span className="pl-9 pr-4 font-bold"> &gt; </span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <a href="">Men&apos;s Fashion</a>{" "}
              <span className="pl-9 pr-4 font-bold"> &gt; </span>
            </div>
          </li>

          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Home & Lifestyle</a>
          </li>
          <li>
            <a href="">Medicine</a>
          </li>
          <li>
            <a href="">Sport & Outdoor</a>
          </li>
          <li>
            <a href="">Baby&apos;s Toys</a>
          </li>
          <li>
            <a href="">Groceries & Pets</a>
          </li>
          <li>
            <a href="">Health & Beauty</a>
          </li>
        </ul>

        {/* category list at the top */}
        <div className=" lg:hidden py-2">
          <ul className="hidden sm:flex justify-between text-xs ">
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Home & Lifestyle</a>
            </li>
            <li>
              <a href="">Medicine</a>
            </li>
            <li>
              <a href="">Sport & Outdoor</a>
            </li>
            <li>
              <a href="">Baby&apos;s Toys</a>
            </li>
            <li>
              <a href="">Groceries & Pets</a>
            </li>
            <li>
              <a href="">Health & Beauty</a>
            </li>
          </ul>
        </div>

        {/* billboard */}
        <div className="w-full lg:ml-10 md:pt-4 lg:pt-10">
          <img src={slides[currentSlide]} className="object-fill  " />
          {/* <div className="flex justify-center py-2 gap-2 absolute bottom-0 left-0 right-0">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`btn btn-xs h-3 w-3 rounded-full ${
                  currentSlide === index ? "bg-black" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
