import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Cart.css";
// Button Component is in this file also (can be found on the bottom part)
const Cart = () => {
  const [cart, setCart] = useState([]); // Array to store all products in the cart
  const [total, setTotal] = useState(0); // Total price of all products in the cart
  const [shippingFee, setShippingFee] = useState(500); // Shipping fee
  const userID = sessionStorage.getItem("userID"); // Get the user ID from the session storage
  const [isClicked, setIsClicked] = useState(false); // State to handle the "Delete" button
  const [updateCart, setUpdateCart] = useState({
    updateCart: false,
    updateCartText: "Update Cart",
  }); // State to handle the update cart button

  const handleUpdateCart = () => {
    setIsClicked(!isClicked);
    setUpdateCart({
      updateCart: !updateCart.updateCart,
      updateCartText: updateCart.updateCart ? "Update Cart" : "Cancel",
    });
  };
  const [checkedValuesIndex, setCheckedValuesIndex] = useState([]); // Array to store the checked values

  const handleSelectCheckbox = (event) => {
    const index = Number(event.target.value); // Get the index of the checkbox
    if (event.target.checked) {
      setCheckedValuesIndex((prev) => [...prev, index]);
    } else {
      setCheckedValuesIndex((prev) => prev.filter((item) => item !== index));
      setSelectAll(false); // Uncheck the "Select All" checkbox if any checkbox is unchecked
    }
  };
  // State to manage the "Select All" checkbox
  const [selectAll, setSelectAll] = useState(false);
  // Function to handle select all checkbox change
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectAll(!selectAll); // Check the "Select All" checkbox
      // Check all checkboxes and add all cart indices to checkValues
      //setCheckedValuesIndex(cart.flat().map((product, index) => index));
    } else {
      // Uncheck all checkboxes and clear checkValues
      setCheckedValuesIndex([]);
      setSelectAll(!selectAll); // Uncheck the "Select All" checkbox
    }
  };

  const handleDeleteCart = async () => {
    const checkedCartItems = checkedValuesIndex.map(
      (index) => cart.products[index]
    ); // Get the checked cart items
    const userID = sessionStorage.getItem("userID"); // Get the user ID from the session storage

    for (let i = 0; i < checkedCartItems.length; i++) {
      if (checkedCartItems[i]) {
        const productID = checkedCartItems[i]._id;
        try {
          await axios.delete(
            `http://localhost:4000/api/cart/${productID}?userID=${userID}`
          );
          setCart((prev) => {
            return {
              ...prev,
              products: prev.products.filter(
                (product) => product._id !== productID
              ),
            };
          });
        } catch {
          console.log("Error deleting item");
        }
        setUpdateCart({
          updateCart: false,
          updateCartText: "Update Cart",
        });
        alert("Item deleted successfully");
      }
    }
  };
  useEffect(() => {
    const fetchCart = async () => {
      if (!userID) {
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:4000/api/cart/user?userID=${userID}`
        );

        setCart(response.data.response);

        if (cart.products) {
          let newTotal = 0;
          cart.products.map((products) => {
            newTotal += products.price * products.quantity;
          });
          setTotal(newTotal);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [cart, userID, checkedValuesIndex]);

  const navigate = useNavigate();
  const checkout = () => {
    // Redirect to the checkout page
    navigate("/checkout");
  };
  return (
    <div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
      <ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
        <li>
          <a href="">Home</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>

      {/* DIsplay products  */}

      <div className="hidden  lg:flex flex-col gap-5 xs:my-6 sm:my-8 md:my-10 lg:my-12 border-black border-b-2">
        <div className="grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4  border-2 shadow-md rounded-md  ">
          {updateCart.updateCart && (
            <input
              type="checkbox"
              className="mr-5"
              onChange={handleSelectAll}
              checked={selectAll} // Check if the "Select All" checkbox should be checked
            />
          )}
          <p className="text-left md:col-span-2 lg:col-span-1">Product</p>
          <p className="text-center ">Price</p>
          <p className="text-center ">Quantity</p>
          {/* <div className="flex justify-end border gap-36 lg:hidden ">
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
          </div> */}
          <p className="text-right ">Subtotal</p>
        </div>
        <div className="flex flex-col justify-center shadow-md lg:shadow-none lg:border-none md:gap-5 lg:gap-7 xl:gap-10 h-96 overflow-auto scrollbar-hide">
          {/*  Display the products in the cart */}
          {cart.products &&
            cart.products.map((product, index) => (
              <div
                key={`${product._id}-${index}`}
                className="border shadow-md rounded-md "
              >
                {updateCart.updateCart && (
                  <div className="border border-black flex">
                    <input
                      key={`${product._id}-${index}`}
                      type="checkbox"
                      className="mx-3 border border-black"
                      value={index}
                      onChange={handleSelectCheckbox}
                      checked={checkedValuesIndex.includes(index)} // Check if the checkbox should be checked
                    />
                    <CartList
                      name={product.productName}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image || ""}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Display products for mobile */}
      <div className="lg:hidden flex flex-col gap-6 xs:my-6 sm:my-4 md:my-6 border-black border-b-2">
        {cart.products &&
          cart.products.map((product, index) => (
            <div key={`${product._id}-${index}`} className="">
              <CartListMobile
                name={product.productName}
                price={product.price}
                quantity={product.quantity}
                image={product.image || ""}
              />
            </div>
          ))}
      </div>

      {/* Return And Update /Delete */}
      <div className="hidden md:flex justify-between">
        <button className="border border-black w-52 py-4">
          Return To Shop
        </button>
        <div className="flex gap-5 ">
          {updateCart.updateCart && (
            <button
              onClick={handleDeleteCart}
              className={`text-white bg-custom-red
              }-500 border border-black w-52 py-4`}
            >
              Delete
            </button>
          )}

          <button
            onClick={handleUpdateCart}
            className={`${
              isClicked ? "bg-white" : "  text-white bg-custom-red"
            } border border-black w-52 py-4`}
          >
            {updateCart.updateCartText}
          </button>
        </div>
      </div>

      {/* coupoun and proceed to checkout */}
      <div className="flex md:justify-between flex-col gap-3 md:flex-row  py-5 lg:py-8 ">
        <div className="flex justify-between gap-3 md:flex-wrap md:justify-normal flex-nowrap md:h-24">
          <input
            type="text"
            placeholder="Coupon Code"
            className="text-sm border border-black md:h-11 rounded-md pl-2 w-auto sm:pl-3 md:pl-4 md:w-48 lg:w-60 xl:w-80 lg:text-lg"
          />
          <Button title="Apply Coupon" />
        </div>
        <div className="border border-black p-2 md:p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 md:w-1/2 xl:w-2/5">
          <p className="md:text-lg xl:text-xl font-semibold">Cart Total</p>
          <div className="flex flex-col gap-2 md:gap-3 md:gap-">
            <div className="flex justify-between">
              <p>SubTotal: </p>
              <p>₱ {total.toLocaleString()}</p>
            </div>
            <hr className="border border-black" />
            <div className="flex justify-between">
              <p>Shipping: </p>
              <p>₱ {shippingFee.toLocaleString()}</p>
            </div>
            <hr className="border border-black" />
            <div className="flex justify-between">
              <p>Total: </p>
              <p>₱ {total.toLocaleString()}</p>
            </div>
          </div>

          <div className="text-right">
            <Button title="Proceed To Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// View Products Button
export const CartButton = (props) => {
  return (
    <div className=" text-white bg-orange-500 border border-black">
      {props.title}
    </div>
  );
};
CartButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export const CartList = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleQuantity = () => {
    setQuantity(quantity);
  };
  return (
    <div className="grid md:grid-cols-5 lg:grid-cols-4 px-3 lg:px-5 my-2">
      <div className="flex gap-4 items-center text-left md:col-span-2 lg:col-span-1 ">
        <img src={props.image} alt="" className="md:size-14 lg:size-16" />
        <p className="lg:text-lg">{props.name}</p>
      </div>
      {/* Price */}
      <p className="items-center justify-center lg:text-lg flex ">
        ₱ {props.price.toLocaleString()}
      </p>

      {/* Quantity */}
      <div className="items-center justify-center lg:text-lg flex ">
        <input
          type="number"
          className=" w-10  "
          value={quantity}
          onChange={handleQuantity}
        />
      </div>

      {/* Subtotal */}
      <p className="flex  items-center justify-end  lg:text-lg ">
        ₱ {(props.price * props.quantity).toLocaleString()}
      </p>
    </div>
  );
};

CartList.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  checkBox: PropTypes.bool.isRequired,
};

export const CartListMobile = (props) => {
  return (
    <div className="flex justify-between shadow-sm sm:p-2 md:p-4">
      {/* image/name/desc */}
      <div className="flex grow gap-4 items-center">
        <img src={props.image} alt="" className="xs:size-16 sm:size-20 " />

        <p className="xs:text-sm md:text-base">{props.name}</p>
      </div>
      {/* price/quantiy */}
      <div className=" w-20 sm:w-24 flex flex-col justify-center gap-2">
        <p className="xs:text-sm md:text-base text-right">
          ₱ {props.price.toLocaleString()}
        </p>
        <div className="flex justify-end">
          <button className=" border rounded-s-md bg-custom-red px-2 ">
            -
          </button>
          <input
            type="text"
            className="xs:w-8 sm:w-14 xs:text-sm md:text-base text-center border "
            value={props.quantity}
          />
          <button className="border rounded-e-md bg-custom-red px-2">+</button>
        </div>
      </div>
    </div>
  );
};

CartListMobile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export const Button = (props) => {
  return (
    <button className="border rounded-md text-sm text-white bg-custom-red px-4 py-2 md:text-base md:px-3 lg:px-8 md:py-0 lg:text-lg md:h-11">
      {props.title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
