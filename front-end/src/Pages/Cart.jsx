import CartList from "../Components/Cart/CartList";
import Button from "../Components/Homepage/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]); // Array to store all products in the cart
  const [total, setTotal] = useState(0); // Total price of all products in the cart
  const [shippingFee, setShippingFee] = useState(500); // Shipping fee
  const userID = sessionStorage.getItem("userID"); // Get the user ID from the session storage
  const [updateCart, setUpdateCart] = useState({
    updateCart: false,
    updateCartText: "Update Cart",
  }); // State to handle the update cart button

  const handleUpdateCart = () => {
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
    <div className="mt-10">
      <div className="">
        <ul className="flex text-xl">
          <li>
            <a href="">Home</a>
          </li>
          <li className="px-3">/</li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
      {/* Table */}

      <div className="w-full mt-14">
        <div className="flex w-full shadow-md mb-10 py-3 text-xl">
          {updateCart.updateCart && (
            <input
              type="checkbox"
              className="mr-5"
              onChange={handleSelectAll}
              checked={selectAll} // Check if the "Select All" checkbox should be checked
            />
          )}
          <p className="w-1/4">Product</p>
          <p className="w-1/4 ">Price</p>
          <p className="w-1/4 ">Quantity</p>
          <p className="w-1/4 ">Subtotal</p>
        </div>
        <div className="w-full h-80 overflow-y-auto overscroll-contain">
          {/*  Display the products in the cart */}
          {cart.products &&
            cart.products.map((product, index) => (
              <div key={`${product._id}-${index}`} className="flex">
                {updateCart.updateCart && (
                  <input
                    key={`${product._id}-${index}`}
                    type="checkbox"
                    className="mr-5"
                    value={index}
                    onChange={handleSelectCheckbox}
                    checked={checkedValuesIndex.includes(index)} // Check if the checkbox should be checked
                  />
                )}
                <CartList
                  name={product.productName}
                  price={product.price}
                  quantity={product.quantity}
                  image={product.image || ""}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <button>
          <Button
            title="Return To Shop"
            width="16"
            height="4"
            border={"border-2"}
            textColor={"text-black"}
            bgColor={"bg-white"}
          />
        </button>
        <div className="flex gap-5">
          {/* Delete Button */}
          {updateCart.updateCart && (
            <button onClick={handleDeleteCart}>
              <Button
                title={"Delete"}
                width="16"
                height="4"
                border={"border-2"}
                textColor={"text-white"}
                bgColor={"bg-red-500"}
              />
            </button>
          )}
          <button onClick={handleUpdateCart}>
            <Button
              title={updateCart.updateCartText}
              width="16"
              height="4"
              border={"border-2"}
              textColor={"text-black"}
              bgColor={"bg-white"}
            />
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-between ">
        <div className="flex">
          <input
            type="text"
            height={3}
            width={20}
            placeholder="Coupon Code"
            className="border-2 pl-10"
          />
          <Button
            title="Apply Coupon"
            width="12"
            height="3"
            border={"border-2"}
          />
        </div>
        <div className=" ml-80 px-4 border-4 w-full border-black">
          <p className="text-xl">Cart Total</p>
          <ul>
            <li className="flex items-center justify-between">
              <p className="text-base">SubTotal</p>
              <p className="text-base">${total}</p>
            </li>
            <hr className=" my-2" />
            <li className="flex items-center justify-between">
              <p className="text-base">Shipping Fee</p>
              <p className="text-base">${shippingFee}</p>
            </li>
            <hr className=" my-2" />

            <hr className=" my-2" />
            <li className="flex items-center justify-between">
              <p className="text-base">Total</p>
              <p className="text-base">${total + shippingFee}</p>
            </li>
          </ul>

          <button onClick={checkout}>
            <Button
              title="Proceed To Checkout"
              width="full"
              height="3"
              border={"border-2"}
              textColor={"text-white"}
              bgColor={"bg-orange-600"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
