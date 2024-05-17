import Services from "../assests/Services.png";
import Bag from "../assests/Services_Bag.png";
import Money from "../assests/about_money.png";
import sideImage from "../assests/Side Image.png";
import PropTypes from "prop-types";
import Person1 from "../assests/person1.png";
import Person2 from "../assests/person2.png";
import Person3 from "../assests/person3.png";
import FeaturesHighlight from "../Components/Homepage/FeaturesHighlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
	const teamData = [
		{
			_id: 1,
			image: Person1,
			name: "Tom Cruise",
			position: "Founder & Chairman",
		},
		{
			_id: 2,
			image: Person2,
			name: "Emma Watson",
			position: "Managing Director",
		},
		{
			_id: 3,
			image: Person3,
			name: "Will Smith",
			position: "Product Designer",
		},
		{
			_id: 4,
			image: Person1,
			name: "Tom Cruise",
			position: "Founder & Chairman",
		},
		{
			_id: 5,
			image: Person2,
			name: "Emma Watson",
			position: "Managing Director",
		},
		{
			_id: 6,
			image: Person3,
			name: "Will Smith",
			position: "Product Designer",
		},
	];
	// slider settings
	const settings = {
		focusOnSelect: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
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
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
			<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
				<li>
					<a href="">Home</a>
				</li>
				<li className="xs:px-1 md:px-3">/</li>
				<li>
					<a href="">About</a>
				</li>
			</ul>
			<div className="flex xs:flex-col xl:flex-row items-center xl:justify-between xs:my-5 sm:my-8 md:my-12 lg:my-16">
				<div className="flex flex-col gap-6 xl:gap-10 justify-center xl:mr-20">
					<p className="xs:text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-inter font-semibold">
						Our Story
					</p>
					<p className="tracking-wide leading-loose xs:text-sm sm:text-base">
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sallers and 300 brands and serves 3 millioons customers
						across the region.
					</p>
					<p className="tracking-wide leading-loose xs:text-sm sm:text-base">
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assotment in categories
						ranging from consumer.
					</p>
				</div>

				<img
					src={sideImage}
					alt=""
					className="border xl:mt-0 mt-5 xs:size-5/6 md:size-3/6 xl:size-5/6"
				/>
			</div>

			{/* About Card */}
			<div className="flex flex-wrap justify-evenly xl:justify-between xs:gap-3 sm:gap-5 md:gap-7">
				<AboutCard
					image={Services}
					value="10.5k"
					context="Sellers active our site"
				/>
				<AboutCard image={Money} value="10.5k" context="Monthly Product Sale" />
				<AboutCard
					image={Bag}
					value="10.5k"
					context="Customer active in our site"
				/>
				<AboutCard
					image={Money}
					value="10.5k"
					context="Annual gross in ur site"
				/>
			</div>

			{/* Team Card */}
			<div className="my-10 xl:my-20 xl:w-3/4 m-auto">
				<Slider {...settings}>
					{teamData.map((team) => (
						<TeamCard
							key={team._id}
							image={team.image}
							name={team.name}
							position={team.position}
						/>
					))}
				</Slider>
			</div>

			{/* Features Highlight */}
			<div className=" my-28">
				<FeaturesHighlight />
			</div>
		</div>
	);
};

export default About;

export const AboutCard = (props) => {
	return (
		<button className="hover:bg-custom-red hover:text-white ">
			<div className="border-2 flex flex-col items-center xs:py-2 xs:px-2 md:py-6 md:px-4 gap-5 xs:w-52 md:w-60 lg:w-72 rounded-md">
				<img
					src={props.image}
					alt=""
					className="xs:size-10 sm:size-12 md:size-14 lg:size-16 xl:size-20"
				/>
				<div className="flex flex-col xs:gap-1 md:gap-2 items-center">
					<h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
						{props.value}
					</h1>
					<p className="xs:text-sm lg:text-base xl:text-lg">{props.context}</p>
				</div>
			</div>
		</button>
	);
};
AboutCard.propTypes = {
	image: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	context: PropTypes.string.isRequired,
};

export const TeamCard = (props) => {
	return (
		<button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
			<div className=" text-center sm:text-left flex flex-col gap-3 ">
				<img
					src={props.image}
					alt=""
					className="xs:h-72  sm:h-80 md:h-auto xl:w-80 lg:w-72 md:w-60 sm:w-44 object-contain"
				/>
				<h1 className="text-base md:text-lg lg:text-2xl font-semibold px-2">
					{props.name}
				</h1>
				<p className="text-sm md:text-base lg:text-lg px-2">{props.position}</p>
				<ul className="flex gap-5 px-2 sm:justify-normal justify-center">
					<li>
						<FontAwesomeIcon
							icon={faTwitter}
							className="xs:size-4 md:size-5 lg:size-6 xl:size-8"
						/>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faInstagram}
							className="xs:size-4 md:size-5 lg:size-6 xl:size-8"
						/>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="xs:size-4 md:size-5 lg:size-6 xl:size-8"
						/>
					</li>
				</ul>
			</div>
		</button>
	);
};

TeamCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};
