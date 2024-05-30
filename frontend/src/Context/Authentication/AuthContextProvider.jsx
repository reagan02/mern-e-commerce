import { useEffect, useReducer } from "react";
import { AuthContext, authReducer } from "./AuthContext";
import PropTypes from "prop-types";

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			dispatch({
				type: "LOGIN",
				payload: user,
			});
		}
	}, []);
	console.log("Auth Context", state);
	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export default AuthContextProvider;
