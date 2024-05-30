import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BuyButton = () => {
	return (
		<button className="text-center md:text-lg lg:text-xl px-5 md:px-14 md:py-2 h-9 md:h-11 bg-custom-red text-white rounded-md">
			Buy Now
		</button>
	);
};

//Cart Button

export const CartButton = () => {
	return (
		<button className="border-2 rounded-md md:py-1 px-2 ">
			<FontAwesomeIcon
				icon={faCartShopping}
				className="size-6 md:size-7 xl:size-8"
			/>
		</button>
	);
};
