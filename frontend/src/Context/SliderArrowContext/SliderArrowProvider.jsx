import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { SliderArrowContext, arrowReducer } from "./SliderArrowContext";

const SliderArrowProvider = (props) => {
	const [state, dispatch] = useReducer(arrowReducer, null);
	useEffect(() => {
		console.log("slider state", state); // Logs the current state
	}, [state]); // Only runs when `state` changes

	return (
		<SliderArrowContext.Provider value={{ state, dispatch }}>
			{props.children}
		</SliderArrowContext.Provider>
	);
};

export default SliderArrowProvider;

SliderArrowProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
