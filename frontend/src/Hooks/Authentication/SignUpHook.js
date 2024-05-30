import { useState } from "react";
import { UseAuthContext } from "./UseAuthContext";
import axios from "axios";
export const SignUpHook = () => {
	const [error, setError] = useState(null);
	const { dispatch } = UseAuthContext();

	const signUp = async (account) => {
		setError(null);
		try {
			const response = await axios.post(
				"http://localhost:4000/api/accounts/signup",
				account, // data
				{
					headers: { "Content-Type": "application/json" },
				} // config
			);
			localStorage.setItem("user", JSON.stringify(response.data));

			// update dispatch
			dispatch({
				type: "LOGIN",
				payload: response.data,
			});
			return true;
		} catch (error) {
			setError(getErrorMessage(error));
			return false;
		}
	};
	return { signUp, error };
};

// Helper function to extract error message
const getErrorMessage = (error) => {
	if (error.response && error.response.data && error.response.data.error) {
		return error.response.data.error;
	}
	return error.message;
};
