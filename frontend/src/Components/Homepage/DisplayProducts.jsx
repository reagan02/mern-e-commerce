import BeatLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import Section1Context from "./Section1Context";

// This is the mapping happens of displaying the products

const DisplayProducts = (props) => {
	const navigate = useNavigate();
	const category = props.productsCategory;
	const { isNext } = useContext(Section1Context);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const color = "#000000";

	const handleItemCard = (_id) => {
		navigate(`/product/${_id}`);
	};
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:4000/api/products/category?category=${category}`
				);
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [category]);

	const sliderRef = useRef(null); // holds the reference of the slider
	// The useLayoutEffect will be the one to handle the slider movement if there is any changes in the slider.current (next or previous)
	// If the isNext is null, then slide will not swipe and the useEffect will only render the data
	// Without the first condition, the data will
	useLayoutEffect(() => {
		if (sliderRef.current && isNext !== null) {
			if (isNext) {
				sliderRef.current.slickNext();
			} else {
				sliderRef.current.slickPrev();
			}
		}
	}, [isNext]);
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
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		swipe: isSwipeable,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 1024,
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
					<BeatLoader color={color} loading={loading} size={200} margin={2} />
				</div>
			) : (
				<Slider
					ref={(slider) => {
						sliderRef.current = slider;
					}}
					{...settings}
					className="slider-container"
				>
					{data.map((item, index) => (
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
