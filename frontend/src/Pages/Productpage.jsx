import { useState, useEffect, useContext } from "react";
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
import LoadingSpinner from "../LoadingDisplay/LoadingSpinner";
import { ProductContext } from "../Context/BuyProduct/ProductContext";

const Productpage = () => {
	const { productData, setProductData } = useContext(ProductContext);
	const [loading, setLoading] = useState(false);
	const { id } = useParams(); // id
	const navigate = useNavigate();

	// Fetch Product Data
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:4000/api/products/${id}`
				);
				setProductData(response.data.product);
			} catch (error) {
				alert("Error Fetching Data");
				navigate("/home");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id, navigate, setProductData]);

	return (
		<div>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
					<NavigationList
						list={[
							{ link: "/home", text: "Account" },
							{
								link: "",
								text: productData && productData.category,
							},
							{
								link: "",
								text: productData && productData.name,
							},
						]}
					/>
					<div className="flex:col lg:flex xs:my-5 sm:my-8 md:my-12 lg:my-16 xl:gap-0 gap-14">
						{/* Product Images */}
						<ProductImages />

						{/* Product Details */}
						<div className="lg:pl-5 xl:ml-20 w-full lg:mt-0 md:mt-14 xs:mt-12">
							<ProductTitle />
							<ProductStock />
							<ProductPrice />
							<ProductDesc />
							<hr className="border border-black" />

							{/* Colors */}
							<ProductVariants name="Colors" />

							{/* Sizes */}
							<ProductVariants name="Sizes" />

							{/* quantity and checkout */}
							<div className="flex flex-wrap justify-normal gap-5 xl:gap-5 xl:justify-between py-3">
								{/* Quantity */}
								<QuantityInput />

								{/* CheckOut */}
								<BuyButton />
								{/* <CartButton /> */}
							</div>
							{/* <DeliveryBox /> */}
						</div>
					</div>

					<div></div>
				</div>
			)}
		</div>
	);
};

export default Productpage;
