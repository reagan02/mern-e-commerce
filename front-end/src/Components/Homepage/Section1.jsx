// Section1.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import DisplayProducts from "./DisplayProducts";
import Arrow from "./Arrow";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Countdown from "./Countdown";
import ViewButton, { ViewButton2 } from "./Button";
import Section1Context from "./Section1Context"; // Added import for Section1Context (it is where the context is created)

// This section 1 consist of the title, subtitle, countdown(etc), and the products components
const Section1 = (props) => {
	const [isNext, setIsNext] = useState(null);

	// Functions to handle arrow clicks whether to go next or previous
	const handleNext = () => setIsNext(true);
	const handlePrev = () => setIsNext(false);
	return (
		<Section1Context.Provider value={{ isNext, handleNext, handlePrev }}>
			<div className="w-full xs:mt-7 md:mt-14">
				<div className="flex pt-4">
					<Subtitle subtitle={props.subtitle} />
				</div>
				<div className="flex mt-5 h-15 mb-5">
					<Title title={props.title} />
					{props.countdown && <Countdown />}
					<div className="flex grow justify-end ">
						{props.arrowOrButton ? <Arrow /> : <ViewButton2 />}
					</div>
				</div>
				<div className="pt-4">
					<DisplayProducts productsCategory={props.productsCategory} />
				</div>
				<div className=" flex justify-center py-10">
					<ViewButton />
				</div>
			</div>
		</Section1Context.Provider>
	);
};

Section1.propTypes = {
	subtitle: PropTypes.string,
	title: PropTypes.string,
	countdown: PropTypes.bool,
	productsCategory: PropTypes.string,
	arrowOrButton: PropTypes.bool,
};

export default Section1;
