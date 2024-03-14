import InputDetails from "../Components/Checkout/InputDetails";
import { useState } from "react";
import ItemList from "../Components/Checkout/ItemList";
import image from "../assests/PS4.png";
import Button from "../Components/Homepage/Button";
const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mt-10 pb-40">
      <ul className="flex text-xl">
        <li>
          <a href="">Account</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">My Account</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">Product</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">View Cart</a>
        </li>
        <li className="px-3">/</li>
        <li className="font-semibold">
          <a href="">CheckOut</a>
        </li>
      </ul>

      {/* Billing Details */}
      <h1 className="mt-20  font-inter text-5xl py-10">Billing Details</h1>

      <div className="flex  justify-between w-full">
        {/* Details input tags */}
        <div className=" w-full pr-36">
          <InputDetails title="First Name" />
          <InputDetails title="Company Name" />
          <InputDetails title="Street Address" />
          <InputDetails title="Apartment, floor, etc.(optional)" />
          <InputDetails title="Town/City" />
          <InputDetails title="Phone Number" type={"number"} />
          <InputDetails title="Email Address" type={"email"} />
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={handleCheckboxClick}
              className="size-5"
            />
            <p className="px-5">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>
        {/*Item List to be Checkout  */}
        <div className="w-full mt-10">
          <div className="mr-32">
            <ItemList image={image} productName="PS4" price={420} />
            <ItemList image={image} productName="PS4" price={420} />
          </div>
          <div className="flex justify-between mr-32">
            <p>SubTotal:</p>
            <p>170</p>
          </div>
          <hr className=" my-3 mr-40" />
          <div className="flex justify-between mr-32">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className=" my-3 mr-40" />
          <div className="flex justify-between mr-32">
            <p>Total:</p>
            <p>1750</p>
          </div>
          <div className="flex items-center py-5 mr-40">
            <input
              type="radio"
              onChange={handleCheckboxClick}
              className="size-5 rounded-full"
            />
            <p className="px-5">Bank </p>
          </div>
          <div className="flex items-center mr-40">
            <input
              type="radio"
              onChange={handleCheckboxClick}
              className="size-5 rounded-full"
            />
            <p className="px-5">Cash On Delivery </p>
          </div>
          <div className="w-full flex justify-between pt-10 mb-10">
            <input
              type="text"
              className="border-2 h-14 px-7 w-2/3 mr-10"
              placeholder="Coupon Code"
            />
            <Button
              title="Apply Coupon"
              height={"3.5"}
              width="12"
              textSize={"1"}
            />
          </div>
          <Button
            title="Place Order"
            height={"3.5"}
            width="12"
            textSize={"1"}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
