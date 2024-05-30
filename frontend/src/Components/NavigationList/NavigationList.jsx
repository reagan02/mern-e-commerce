import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
const NavigationList = (props) => {
	const list = props.list;
	return (
		<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
			{list.map((item, index) => (
				<React.Fragment key={index}>
					<li className={index === list.length - 1 ? "font-semibold" : ""}>
						<Link to={item.link}>{item.text}</Link>
					</li>
					{index < list.length - 1 && <li className="xs:px-1 md:px-3">/</li>}
				</React.Fragment>
			))}
		</ul>
	);
};

export default NavigationList;

NavigationList.propTypes = {
	list: PropTypes.array.isRequired,
};
