import { createContext } from "react";
export const SliderArrowContext = createContext();

export const arrowReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_TO_NEXT":
			return "NEXT";
		case "CHANGE_TO_PREV":
			return "PREV";
		default:
			return null;
	}
};
