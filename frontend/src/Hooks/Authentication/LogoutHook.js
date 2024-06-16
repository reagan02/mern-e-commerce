import { UseAuthContext } from "./UseAuthContext";
export const LogoutHook = () => {
	const { dispatch } = UseAuthContext();
	const logout = () => {
		localStorage.removeItem("user");
		dispatch({
			type: "LOGOUT",
		});
		localStorage.removeItem("user");
	};
	return { logout };
};
