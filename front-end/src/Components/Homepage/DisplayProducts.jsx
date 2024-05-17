import Slider from "react-slick";
import PropTypes from "prop-types";
import Itemcard from "./Itemcard";
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
	const handleItemCard = (_id) => {
		navigate(`/product/${_id}`);
	};
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`http://localhost:4000/api/products/category?category=${category}`
			);
			setData(response.data);
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
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		swipe: isSwipeable,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
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
						<Itemcard
							image={item.images[0]}
							name={item.name}
							price={item.variants[0].price}
							discount={item.discount}
							rating={item.rating}
						/>
					</button>
				))}
			</Slider>
		</div>
	);
};

DisplayProducts.propTypes = {
	productsCategory: PropTypes.string.isRequired,
};

export default DisplayProducts;
