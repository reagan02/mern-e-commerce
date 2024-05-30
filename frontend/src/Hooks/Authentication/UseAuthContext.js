import { AuthContext } from "./../../Context/Authentication/AuthContext";
import { useContext } from "react";

export const UseAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error(
			"useAuthContext must be used within an AuthContextProvider"
		);
	}
	return context;
};
