import { useAuthContext } from "../authContext";
export const useLogOut = () => {
	const { dispatch } = useAuthContext();
	const logout = () => {
		dispatch({
			type: "LOGOUT",
		});
		localStorage.removeItem("user");
	};
	return { logout };
};
