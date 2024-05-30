import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationList from "../Components/NavigationList/NavigationList";
import ProductImages from "../Components/Product/ProductImages";
import ProductTitle from "../Components/Product/ProductTitle";
import ProductStock from "../Components/Product/ProductStock";
import ProductPrice from "../Components/Product/ProductPrice";
import ProductDesc from "../Components/Product/ProductDesc";
import ProductVariants from "../Components/Product/Colors_Variants";
import QuantityInput from "../Components/Product/QuantityInput";
import { BuyButton, CartButton } from "../Components/Product/ProductButtons";
import DeliveryBox from "../Components/Product/DeliveryBox";

const Productpage = () => {
	const [data, setData] = useState({}); // data

	const { id } = useParams(); // id
	const [variantIndex, setVariantIndex] = useState(0); // variant
	const [colorIndex, setColorIndex] = useState(0); // color
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
			<NavigationList
				list={[
					{ link: "/home", text: "Account" },
					{ link: "", text: data && data.category },
					{ link: "", text: data && data.brand },
				]}
			/>
			<div className="flex:col lg:flex xs:my-5 sm:my-8 md:my-12 lg:my-16 xl:gap-0 gap-14">
				{/* Product Images */}
				<ProductImages data={data} />

				{/* Product Details */}
				<div className="lg:pl-5 xl:ml-20 w-full lg:mt-0 md:mt-14 xs:mt-12">
					<ProductTitle data={data} />
					<ProductStock data={data} variantIndex={variantIndex} />
					<ProductPrice data={data} variantIndex={variantIndex} />
					<ProductDesc data={data} />
					<hr className="border border-black" />

					{/* Colors */}
					<ProductVariants data={data} name="Colors" />

					{/* Sizes */}
					<ProductVariants data={data} name="Sizes" />

					{/* quantity and checkout */}
					<div className="flex flex-wrap justify-normal gap-5 xl:gap-5 xl:justify-between py-3">
						{/* Quantity */}
						<QuantityInput />

						{/* CheckOut */}
						<BuyButton />
						<CartButton />
					</div>
					<DeliveryBox />
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Productpage;
