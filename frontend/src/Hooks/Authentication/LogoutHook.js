import { useAuthContext } from "../authContext";
export const LogoutHook = () => {
	const { dispatch } = useAuthContext();
	const logout = () => {
		dispatch({
			type: "LOGOUT",
		});
		localStorage.removeItem("user");
	};
	return { logout };
};
