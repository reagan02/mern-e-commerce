import PropTypes from "prop-types";
import Subtitle from "./Subtitle";
import Title from "./Title";
const Section = (props) => {
	return (
		<div className="w-full xs:mt-7 md:mt-14">
			<div className="flex pt-4">
				<Subtitle subtitle={props.subtitle} />
			</div>
			<div className="flex mt-5 h-15 mb-5">
				{/* title and  context*/}
				<Title title={props.title} />
				{props.context}
				{props.component && (
					<div className="flex grow justify-end ">{props.component}</div>
				)}
			</div>
			<div className="pt-4">{props.body}</div>
			{props.showButton && (
				<div className=" flex justify-center py-10">{props.showButton}</div>
			)}
		</div>
	);
};

export default Section;

Section.propTypes = {
	subtitle: PropTypes.string,
	title: PropTypes.string,
	context: PropTypes.element,
	component: PropTypes.element,
	showButton: PropTypes.element,
	body: PropTypes.node,
};
