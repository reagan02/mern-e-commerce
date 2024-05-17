import deliver from "../assests//icon-delivery.png";
import iconreturn from "../assests/Icon-return.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Productpage = () => {
	const [data, setData] = useState([]); // data
	const [imageIndex, setImageIndex] = useState(0); // image index
	const { id } = useParams(); // id
	const [variantIndex, setVariantIndex] = useState(0); // variant
	const [colorIndex, setColorIndex] = useState(0); // color
	const userID = sessionStorage.getItem("userID");

	//settings for slider
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
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

	const [state, dispatch] = useReducer(counterReducer, { quantity: 1 });
	function counterReducer(state, action) {
		switch (action.type) {
			case "increment":
				if (state.quantity < action.stock) {
					return { quantity: state.quantity + 1 };
				}
				return state;
			case "decrement":
				if (state.quantity > 1) {
					return { quantity: state.quantity - 1 };
				}
				return state;
			case "reset":
				return { quantity: 1 };
			case "set":
				return { quantity: action.quantity };
			default:
				throw new Error();
		}
	}
	// Increment Quantity
	const incrementQuantity = () => {
		dispatch({ type: "increment", stock: data.variants[variantIndex].stock });
	};

	// Decrement Quantity
	const decrementQuantity = () => {
		dispatch({ type: "decrement" });
	};
	const productData = {
		productID: id,
		productName: data && data.name,
		size: data && data.variants && data.variants[variantIndex].size,
		price: data && data.variants && data.variants[variantIndex].price,
		variantIndex: variantIndex,
		quantity: state.quantity,
		image: data && data.images && data.images[0],
	};

	// Add to Cart
	const handleCart = async () => {
		try {
			const res = await axios.post("http://localhost:4000/api/cart/", {
				userID,
				productData,
			});
			alert(res.data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
			<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
				<li>
					<a href="">Account</a>
				</li>
				<li className="xs:px-1 md:px-3">/</li>
				<li>
					<a href="">{data && data.category}</a>
				</li>
				<li className="xs:px-1 md:px-3">/</li>
				<li className="font-semibold">
					<a href="">{data && data.brand}</a>
				</li>
			</ul>
			<div className="flex:col lg:flex xs:my-5 sm:my-8 md:my-12 lg:my-16 xl:gap-0 gap-14">
				{/* Product Images */}
				<div className="flex flex-col-reverse xl:flex-row lg:gap-10 xl:gap-20">
					{/* Small Images */}
					<div className="hidden lg:flex xl:flex-col gap-5 h-full">
						{data && // if product data exist
							data.images && // if the product images exist
							// map images
							data.images.slice(0, 4).map((image, index) => (
								<button
									key={index}
									// if image index is equal to index, set border to orange
									className={`border-2 ${
										imageIndex === index
											? "border-custom-red border "
											: "border-initial"
									} lg:size-28 xl:size-32`}
									onClick={() => {
										setImageIndex(index);
									}}
								>
									<img src={image} alt={index} />
								</button>
							))}
					</div>
					{/* Big Image */}

					<button className=" hidden lg:block md:h-[430px] md:w-full lg:h-[490px] lg:w-[520px] xl:h-[568px] xl:w-[600px] rounded-md ">
						{data && data.images && (
							<img
								src={data.images[imageIndex]}
								alt=""
								className="object-cover "
							/>
						)}
					</button>
					{/* Slider */}
					<div className=" lg:hidden slider-container">
						<Slider {...settings}>
							{data &&
								data.images &&
								data.images.map((image, index) => (
									<button
										key={index}
										// if image index is equal to index, set border to orange
									>
										<img
											src={image}
											alt=""
											className="xs:h-52 sm:h-64 md:h-80 w-full object-contain"
										/>
									</button>
								))}
						</Slider>
					</div>
				</div>

				{/* Product Details */}
				<div className="lg:pl-5 xl:ml-20 w-full lg:mt-0 md:mt-14 xs:mt-12">
					{/* Product Name */}
					<p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold">
						{data && data.name}
					</p>
					{/* Product Stock */}
					<div className="flex justify-start py-3 tracking-widest ">
						<p className="text-sm md:text-base">
							{data && data.variants && data.variants[variantIndex].stock}
						</p>
						<p className="text-sm md:text-base"> |</p>
						<p className="text-sm md:text-base"> In Stock</p>
					</div>
					{/* Product Price */}
					<p className="font-inter text-lg md:text-xl lg:text-2xl">
						{data &&
							data.variants &&
							`₱${data.variants[variantIndex].price.toLocaleString()}`}
					</p>
					<p className="py-5 md:text-base text-sm">
						{/* Desciprtion */}
						{data && data.description}
					</p>
					<hr className="border border-black" />
					{/* Colors */}
					<div className="flex py-3 items-center ">
						<p className="text-base md:text-lg xl:text-xl"> Colors:</p>
						<div className="flex flex-wrap gap-2 pl-2">
							{
								// map colors
								data &&
									data.color &&
									data.color.map((color, index) => (
										<button
											key={index}
											className={`border-2  ${
												colorIndex === index
													? "bg-custom-red text-white "
													: "border"
											} px-2 md:px-3 py-1 md:text-base text-sm rounded-md`}
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

					{/* Sizes */}
					<div className="flex py-3 items-center">
						<p className="text-base md:text-lg xl:text-xl">Size:</p>
						<div className="flex flex-wrap gap-2 pl-2">
							{
								// map sizes
								data &&
									data.variants &&
									data.variants.map((variant, index) => (
										<button
											key={index}
											className={`border-2  ${
												variantIndex === index
													? "bg-custom-red text-white "
													: "border"
											} px-2 md:px-3 py-1 md:text-base text-sm rounded-md`}
											onClick={() => {
												setVariantIndex(index);
												dispatch({ type: "reset" });
											}}
										>
											{variant.size}
										</button>
									))
							}
						</div>
					</div>

					{/* quantity and checkout */}
					<div className="flex flex-wrap justify-normal gap-5 xl:gap-5 xl:justify-between py-3">
						{/* Quantity */}
						<div className="flex ">
							<button
								className="size-9 md:size-10 lg:size-11 xl:size-12 lg:text-2xl xl:text-3xl  lg:hover:text-white lg:hover:bg-custom-red lg:border border-black rounded-s-md bg-custom-red lg:bg-transparent"
								onClick={decrementQuantity}
							>
								-
							</button>
							<input
								type="number"
								className="border w-14 md:w-20 text-base md:text-2xl border-black h-9 md:h-10 lg:h-11 xl:h-12 text-center"
								value={state.quantity}
								onChange={() => {
									dispatch({ type: "set" });
								}}
							/>
							<button
								className="size-9 md:size-10 lg:size-11  xl:size-12 lg:text-2xl xl:text-3xl lg:hover:text-white lg:hover:bg-custom-red lg:border border-black rounded-e-md bg-custom-red lg:bg-transparent"
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
										quantity: state.quantity,
										size: variantIndex,
										from: `product${id}`,
									},
								});
							}}
							className="text-center md:text-lg lg:text-xl px-5 md:px-14 md:py-2 h-9 md:h-11 bg-custom-red text-white rounded-md"
						>
							Buy Now
						</button>
						<button
							className="border-2 rounded-md md:py-1 px-2 "
							onClick={handleCart}
						>
							<FontAwesomeIcon
								icon={faCartShopping}
								className="size-6 md:size-7 xl:size-8"
							/>
						</button>
					</div>

					<div className="flex flex-wrap lg:justify-normal justify-between lg:flex-nowrap lg:flex-col gap-2 py-4">
						<div className="border-2 px-3 py-1 flex gap-2 items-center border-black">
							<img src={deliver} alt="" className="size-8 xl:size-10" />
							<div className="xl:text-base text-sm">
								<h1>Free Delivery</h1>
								<u>Enter your postal code for Delivery Availability</u>
							</div>
						</div>
						<div className="border-2 px-3 py-1 flex gap-2 items-center  border-black">
							<img src={iconreturn} alt="" className="size-8 xl:size-10" />
							<div className="xl:text-base text-sm">
								<h1>Free Delivery</h1>
								<u>Enter your postal code for Delivery Availability</u>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Productpage;
