import Slider from "react-slick";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { SliderArrowContext } from "../../Context/SliderArrowContext/SliderArrowContext";
import LoadingSpinner from "../../LoadingDisplay/LoadingSpinner";

const DisplayProducts = (props) => {
	const navigate = useNavigate();
	const category = props.productsCategory;
	const { state } = useContext(SliderArrowContext); // holds the current state of the slider (next or previous)
	const sliderRef = useRef(null); // holds the current value of the slider
	const [productData, setProductData] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleItemCard = (_id) => {
		navigate(`/product/${_id}`);
	};
	// Data Fetching
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:4000/api/products/category?category=${category}`
				);
				setProductData(response.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [category]);

	// The useEffect  will be the one to handle the slider movement if there is any changes in the slider.current (next or previous)
	useEffect(() => {
		console.log("useEffect  ", state); // Logs the current state
		if (sliderRef.current && state !== null) {
			if (state === "NEXT") {
				console.log("the slick next is called");
				sliderRef.current.slickNext();
				console.log("the slick next is called");
			} else {
				sliderRef.current.slickPrev();
			}
		}
	}, [state]);

	// tracking the screen size to indicate if the screen needs a Swipeable Screen or not
	const [isSwipeable, setIsSwipeable] = useState(window.innerWidth < 1024);
	useEffect(() => {
		const handleResize = () => {
			setIsSwipeable(window.innerWidth < 1024);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const settings = {
		dots: false,
		infinite: false,
		speed: 100,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		swipe: isSwipeable,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 490,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
				},
			},
		],
	};

	return (
		<div>
			{loading ? (
				<div className="text-center">
					<LoadingSpinner />
				</div>
			) : (
				<Slider
					ref={(slider) => {
						sliderRef.current = slider;
					}}
					{...settings}
					className="slider-container"
				>
					{productData.map((item, index) => (
						<button
							key={index}
							onClick={() => handleItemCard(item._id)}
							className="text-left"
						>
							<ItemCard
								image={item.images[0]}
								name={item.name}
								price={item.variants[0].price}
								discount={item.discount}
								rating={item.rating}
							/>
						</button>
					))}
				</Slider>
			)}
		</div>
	);
};

DisplayProducts.propTypes = {
	productsCategory: PropTypes.string.isRequired,
};

export default DisplayProducts;
