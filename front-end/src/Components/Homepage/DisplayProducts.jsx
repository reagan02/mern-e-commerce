import Slider from "react-slick";
import PropTypes from "prop-types";
import Itemcard from "./Itemcard";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const DisplayProducts = (props) => {
	const navigate = useNavigate();
	const category = props.productsCategory;
	// Function to handle item card click
	const handleItemCard = (_id) => {
		navigate(`/product/${_id}`);
	};
	const [data, setData] = useState([]); // Added state for data
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`http://localhost:4000/api/products/category?category=${category}`
			);
			setData(response.data);
		};
		fetchData();
	}, []); // Removed data from dependency array

	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
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
		<Slider {...settings} className="slider-container">
			{data.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => handleItemCard(item._id)}
						className="text-left "
					>
						<Itemcard
							image={item.images[0]}
							name={item.name}
							price={item.variants[0].price}
							discount={item.discount}
							rating={item.rating}
						/>
					</button>
				);
			})}
		</Slider>
	);
};

export default DisplayProducts;

DisplayProducts.propTypes = {
	productsCategory: PropTypes.string.isRequired,
};
