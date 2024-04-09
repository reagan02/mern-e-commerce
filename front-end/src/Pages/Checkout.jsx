import InputDetails from "../Components/Checkout/InputDetails";
import { useEffect, useState } from "react";
import ItemList from "../Components/Checkout/ItemList";
import Button from "../Components/Homepage/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
  const isLoggedIn = sessionStorage.getItem("userID");
  const navigate = useNavigate();
  const location = useLocation(); // location hook
  const [isChecked, setIsChecked] = useState(false);
  const { quantity, id, size } = location.state; // arguments that is passef from the product page
  const shippingFee = 0;

  const handleCheckboxClick = () => {
    console.log(isLoggedIn);
    setIsChecked(!isChecked);
    console.log(quantity);
    console.log(id);
    console.log(size);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please Login First");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // Place Order
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    optionalAddress: "",
    townCity: "",
    phoneNumber: "",
    email: "",
  });

  const [subtotal, setSubtotal] = useState(0); // Subtotal
  const total = subtotal + shippingFee; // Total
  // Product Data
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const userID = sessionStorage.getItem("userID"); // get the user ID

  // Place Order
  const handlePlaceOrder = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/accounts/${userID}`,
        billingDetails
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Fetch User && Product Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/accounts/${userID}`
        );
        const responseProduct = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        setBillingDetails(response.data.account); // set the billing details
        setProductData({
          name: responseProduct.data.product.name,
          price: responseProduct.data.product.variants[size].price,
          image: responseProduct.data.product.images[0],
        });
        setSubtotal(
          responseProduct.data.product.variants[size].price * quantity
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userID, id, size, quantity]);
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
          <InputDetails
            title="First Name"
            value={billingDetails.firstName}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                firstName: e.target.value,
              })
            }
          />
          <InputDetails
            title="Last Name"
            value={billingDetails.lastName}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                lastName: e.target.value,
              })
            }
          />
          <InputDetails
            title="Street Address"
            value={billingDetails.streetAddress}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                streetAddress: e.target.value,
              })
            }
          />
          <InputDetails
            title="Apartment, floor, etc.(optional)"
            value={billingDetails.optionalAddress}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                optionalAddress: e.target.value,
              })
            }
          />
          <InputDetails
            title="Town/City"
            value={billingDetails.townCity}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                townCity: e.target.value,
              })
            }
          />
          <InputDetails
            title="Phone Number"
            type={"number"}
            value={billingDetails.phoneNumber}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                phoneNumber: e.target.value,
              })
            }
          />
          <InputDetails
            title="Email Address"
            type={"email"}
            readOnly={true}
            value={billingDetails.email}
            onChange={(e) =>
              setBillingDetails({
                ...billingDetails,
                email: e.target.value,
              })
            }
          />
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
            <ItemList
              image={productData.image}
              productName={productData.name}
              price={productData.price}
              quantity={quantity}
            />
          </div>
          <div className="flex justify-between mr-32">
            <p>SubTotal:</p>
            <p>{subtotal}</p>
          </div>
          <hr className=" my-3 mr-40" />
          <div className="flex justify-between mr-32">
            <p>Shipping:</p>
            <p>{shippingFee}</p>
          </div>
          <hr className=" my-3 mr-40" />
          <div className="flex justify-between mr-32">
            <p>Total:</p>
            <p>{total}</p>
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
          <button onClick={handlePlaceOrder}>
            <Button
              title="Place Order"
              height={"3.5"}
              width="12"
              textSize={"1"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
