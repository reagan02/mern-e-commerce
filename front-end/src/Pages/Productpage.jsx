import BigImage from "../Components/Product/BigImage";
import SmallImage from "../Components/Product/SmallImage";
import Button from "../Components/Homepage/Button";
import deliver from "../assests//icon-delivery.png";
import iconreturn from "../assests/Icon-return.png";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonSize from "../Components/Product/ButtonSize";

const Productpage = () => {
  return (
    <div className="mt-10 pb-40">
      <ul className="flex text-xl">
        <li>
          <a href="">Account</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">Gaming</a>
        </li>
        <li className="px-3">/</li>
        <li className="font-semibold">
          <a href="">Product Name</a>
        </li>
      </ul>

      <div className="flex gap-10 w-full justify-between pt-20">
        <div className="flex flex-col gap-5">
          <SmallImage />
          <SmallImage />
          <SmallImage />
          <SmallImage />
        </div>
        <div className="w-full pl-10">
          <BigImage />
        </div>
        {/* Product Details */}
        <div className="w-full pl-20 ">
          <h1 className="text-2xl font-inter font-semibold">
            {" "}
            Havic HV G-92 Gamepad{" "}
          </h1>
          <div className="flex justify-start py-2">
            <p className="text-base">150 reviews</p> <p>|</p>
            <p> In Stock</p>
          </div>
          <h1 className="font-inter text-2xl">$192.00</h1>
          <p className="py-5">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className="flex pt-2">
            <p className="text-xl"> Colors:</p>
          </div>
          <div className="text-xl flex py-2 items-center">
            <p className="pr-5">Size:</p>
            <div className="flex gap-5">
              <ButtonSize size="XS" />
              <ButtonSize size="S" />
              <ButtonSize size="M" />
              <ButtonSize size="L" />
              <ButtonSize size="XL" />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex">
              <button className="size-11 justify-center text-xl bg-orange-500">
                -
              </button>
              <input type="text" className="border-2" />
              <button className="size-10 justify-center text-2xl bg-orange-500">
                +
              </button>
            </div>
            <Button title="Buy Now " height="3.4" width="8" />
            <button className="border-2 rounded-md py-1 px-2">
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </button>
          </div>
          <div className="border-2 flex py-3">
            {" "}
            <img src={deliver} alt="" />
            <div>
              <h1>Free Delivery</h1>
              <u>Enter your postal code for Delivery Availability</u>
            </div>
          </div>
          <div className="border-2 flex py-3">
            {" "}
            <img src={iconreturn} alt="" />
            <div>
              <h1>Free Delivery</h1>
              <u>Enter your postal code for Delivery Availability</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
