import BigImage from "../Components/Product/BigImage";
import SmallImage from "../Components/Product/SmallImage";
import Button from "../Components/Homepage/Button";
import deliver from "../assests//icon-delivery.png";
import iconreturn from "../assests/Icon-return.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Productpage = () => {
  const [data, setData] = useState([]); // data
  const [imageIndex, setImageIndex] = useState(0); // image index
  const { id } = useParams(); // id
  const [variantIndex, setVariantIndex] = useState(0); // variant
  const [colorIndex, setColorIndex] = useState(0); // color
  const [quantity, setQuantity] = useState(1); // quantity
  const userID = sessionStorage.getItem("userID");

  const navigate = useNavigate();
  // Fetch Product Data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/products/${id}`
      );
      setData(response.data.product);
    };

    fetchData();
  }, [id]);

  // Increment Quantity
  const incrementQuantity = () => {
    if (quantity < data.variants[variantIndex].stock) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement Quantity
  const decrementQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Out of Stock");
    }
  };
  const productData = {
    productID: id,
    productName: data && data.name,
    size: data && data.variants && data.variants[variantIndex].size,
    price: data && data.variants && data.variants[variantIndex].price,
    quantity: quantity,
    image: data && data.images && data.images[0],
  };
  // Add to Cart
  const handleCart = async () => {
    await axios
      .post("http://localhost:4000/api/cart/", {
        userID,
        productData,
      })
      .then((res) => {
        setQuantity(1);
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleQuantity = () => {
    setQuantity(quantity);
  };
  return (
    <div className="mt-10 pb-40">
      <ul className="flex text-xl">
        <li>
          <a href="">Account</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">{data && data.category}</a>
        </li>
        <li className="px-3">/</li>
        <li className="font-semibold">
          <a href="">{data && data.brand}</a>
        </li>
      </ul>

      <div className="flex gap-10 w-full justify-between pt-20">
        <div className="flex flex-col gap-5">
          {data && // if product data exist
            data.images && // if the product images exist
            // map images
            data.images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                // if image index is equal to index, set border to orange
                className={`border-2 ${
                  imageIndex === index ? "border-orange-500" : "border-initial"
                }`}
                onClick={() => {
                  setImageIndex(index);
                }}
              >
                <SmallImage image={image} />
              </button>
            ))}
        </div>
        <div className="w-full pl-10">
          <button>
            {data && data.images && (
              <BigImage image={data.images[imageIndex]} />
            )}
          </button>
        </div>
        {/* Product Details */}
        <div className="w-full pl-20 ">
          {/* Product Name */}
          <h1 className="text-2xl font-inter font-semibold">
            {data && data.name}
          </h1>
          {/* Product Stock */}
          <div className="flex justify-start py-2">
            <p className="text-base">
              {data && data.variants && data.variants[variantIndex].stock}
            </p>{" "}
            <p>|</p>
            <p> In Stock</p>
          </div>
          {/* Product Price */}
          <h1 className="font-inter text-2xl">
            {data &&
              data.variants &&
              `₱${data.variants[variantIndex].price.toLocaleString()}`}
          </h1>
          <p className="py-5">
            {/* Desciprtion */}
            {data && data.description}
          </p>
          <hr />
          {/* Colors */}
          <div className="flex pt-2">
            <p className="text-xl"> Colors:</p>
            <div className="flex gap-2">
              {
                // map colors
                data &&
                  data.color &&
                  data.color.map((color, index) => (
                    <button
                      key={index}
                      className={`border-2  ${
                        colorIndex === index
                          ? "border-orange-500"
                          : "border-initial"
                      }`}
                      onClick={() => {
                        setColorIndex(index);
                      }}
                    >
                      {color}
                    </button>
                  ))
              }
            </div>
          </div>
          <div className="text-xl flex py-2 items-center">
            <p className="pr-5 gap">Size:</p>
            <div className="flex gap-5">
              {
                // map sizes
                data &&
                  data.variants &&
                  data.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`border-2  ${
                        variantIndex === index
                          ? "border-orange-500"
                          : "border-initial"
                      }`}
                      onClick={() => {
                        setVariantIndex(index);
                        setQuantity(1);
                      }}
                    >
                      {variant.size}
                    </button>
                  ))
              }
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex">
              <button
                className="size-11 justify-center text-xl bg-orange-500"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="text"
                className="border-2"
                value={quantity}
                onChange={handleQuantity}
              />
              <button
                className="size-10 justify-center text-2xl bg-orange-500"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            {/* CheckOut */}
            <button
              onClick={() => {
                navigate("/checkout", {
                  state: {
                    productID: id,
                    quantity: quantity,
                    size: variantIndex,
                    from: `product${id}`,
                  },
                });
              }}
            >
              <Button title="Buy Now " height="3.4" width="8" />
            </button>
            <button
              className="border-2 rounded-md py-1 px-2"
              onClick={handleCart}
            >
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
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
