import { useState, useEffect, useContext } from "react";
import InputDetails from "./InputDetails";
import { UseAuthContext } from "../../Hooks/Authentication/UseAuthContext";
import axios from "axios";
import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
const BillingDetails = () => {
	const {
		state: { user },
	} = UseAuthContext();
	const userID = user.user._id;
	const { userDetails, setUserDetails } = useContext(CheckoutContext);

	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const startTimer = performance.now();

		const fetchUser = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/api/accounts/${userID}`
				);
				setUserDetails(response.data.account);
			} catch (error) {
				console.error("Error fetching user data:", error);
			} finally {
				const endTimer = performance.now();
				const elapsedTime = endTimer - startTimer;
				setTimer(elapsedTime);
			}
		};

		fetchUser();

		// Cleanup function
		return () => {
			// Reset timer
			setTimer(0);
		};
	}, [userID]);
	console.log("Timer:", timer, "milliseconds");

	return (
		<div>
			<InputDetails
				title="First Name"
				value={userDetails && userDetails.firstName}
				onChange={(e) =>
					setUserDetails({ ...userDetails, firstName: e.target.value })
				}
			/>
			<InputDetails
				title="Last Name"
				value={userDetails && userDetails.lastName}
				onChange={(e) =>
					setUserDetails({ ...userDetails, lastName: e.target.value })
				}
			/>
			<InputDetails
				title="Street Address"
				value={userDetails && userDetails.streetAddress}
				onChange={(e) =>
					setUserDetails({ ...userDetails, streetAddress: e.target.value })
				}
			/>
			<InputDetails
				title="Apartment, floor, etc.(optional)"
				value={userDetails && userDetails.optionalAddress}
				onChange={(e) =>
					setUserDetails({ ...userDetails, optionalAddress: e.target.value })
				}
			/>
			<InputDetails
				title="Town/City"
				value={userDetails && userDetails.townCity}
				onChange={(e) =>
					setUserDetails({ ...userDetails, townCity: e.target.value })
				}
			/>
			<InputDetails
				title="Phone Number"
				type={"number"}
				value={userDetails && userDetails.phoneNumber}
				onChange={(e) =>
					setUserDetails({ ...userDetails, phoneNumber: e.target.value })
				}
			/>
			<InputDetails
				title="Email Address"
				type={"email"}
				readOnly={true}
				value={userDetails && userDetails.email}
				onChange={(e) =>
					setUserDetails({ ...userDetails, email: e.target.value })
				}
			/>
		</div>
	);
};

export default BillingDetails;
