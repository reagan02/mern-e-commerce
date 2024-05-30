import React from "react";
import { BuyProductContext } from "./BuyProductContext";
import PropTypes from "prop-types";
const BuyProductProvider = (props) => {
	return (
		<BuyProductContext.Provider value={{}}>
			{props.children}
		</BuyProductContext.Provider>
	);
};

export default BuyProductProvider;

BuyProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
