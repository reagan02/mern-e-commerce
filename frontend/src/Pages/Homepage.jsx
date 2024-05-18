import CategoryNav from "../Components/Navbar/CategoryNav";
import Section from "../Components/Homepage/Section";
import Section1 from "../Components/Homepage/Section1";
import Category from "../Components/Homepage/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import PS4 from "../src/assests/PS4.png";
import Women from "../src/assests/Women.png";
import Speaker from "../src/assests/Speaker.png";
import Perfume from "../src/assests/Perfume.png";
import "react-multi-carousel/lib/styles.css";

import {
	faMobileButton,
	faComputer,
	faClock,
	faCamera,
	faHeadphones,
	faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import Billboard1 from "../Components/Homepage/Billboard1";
import FeaturesHighlight from "../Components/Homepage/FeaturesHighlight";
const Homepage = () => {
	const [data, setData] = useState([]); // Added state for data
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://exclusive-mern.vercel.app/api/products/category?category=smartphone"
			);
			setData(response.data);
		};
		fetchData();
	}, []); // Removed data from dependency array

	return (
		<div className="">
			<CategoryNav />

			{/* Flash Sales Section */}
			<Section1
				subtitle={"Today's"}
				title={"Flash Sales"}
				countdown={true}
				productsCategory={"Electronics"}
				arrowOrButton={true}
			/>
			{/* PS: Always check the section props to avoid confusion of the propsTypes used */}
			<hr className="" />
			{/* Categories */}
			<Section
				subtitle="Categories"
				title="Browse By Category"
				body={
					<div className="flex flex-wrap gap-5 xs:justify-center sm:justify-between pt-5">
						<Category category="Phones" icon={faMobileButton} />
						<Category category="Computers" icon={faComputer} />
						<Category category="SmartWacth" icon={faClock} />
						<Category category="Camera" icon={faCamera} />
						<Category category="Headphones" icon={faHeadphones} />
						<Category category="Gaming" icon={faGamepad} />
					</div>
				}
			/>
			<hr className="xs:mt-7 md:mt-14" />
			{/* Best Selling Products */}
			<Section1
				subtitle="This Month"
				title="Best Selling Products"
				productsCategory="Smartphone"
			/>
			<hr />
			<Billboard1 />
			{/* Explore our products Section */}
			<Section1
				subtitle="Our Products"
				title="Explore Our Products"
				arrowOrButton={true} // set true for arrowButton and false for viewButton
				productsCategory="Electronics"
			/>
			<Section
				subtitle="Featured"
				title="New Arrival"
				body={
					<div className="grid xs:grid-cols-2 xs:grid-rows-2  md:grid-cols-4 md:grid-rows-2 xs:gap-5 md::gap-8 lg:gap-10">
						<div className="md:col-span-2 md:row-span-2">
							<img src={PS4} alt="" />
						</div>
						<div className="md:col-span-2">
							<img src={Women} alt="" />
						</div>
						<div className="">
							<img src={Speaker} alt="" />
						</div>
						<div className="">
							<img src={Perfume} alt="" />
						</div>
					</div>
				}
			/>
			<FeaturesHighlight />
		</div>
	);
};

export default Homepage;

// Context API is used to work the arrow buttons for the slide
// The tree structure of the components is as follows:
// Homepage
// 	Section1Context -> (initialize the context)
// 	Section1 -> (main section of the homepage, parent of the Context Provider)
// 		DisplayProducts -> (this is where the slider and displaying products is done)
// 			ItemCard
// 		Arrow -> (it has functions to handle the slide)
// 		Section1Context
// 		Countdown
// 		Subtitle
// 		Title
// 		ViewButton
// 		Slider
