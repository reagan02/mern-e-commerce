import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Countdown from "./Countdown";
import ViewButton from "./Button";
import LoadingSpinner from "../../LoadingDisplay/LoadingSpinner";
import SliderArrowProvider from "../../Context/SliderArrowContext/SliderArrowProvider";
import CustomArrow from "./CustomArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DisplayProducts1 = React.lazy(() => import("./DisplayProducts1"));

const FlashSales = () => {
	const PRODUCTS_CATEGORY = "Electronics";
	return (
		<React.Suspense fallback={<LoadingSpinner />}>
			<SliderArrowProvider>
				<div className="w-full xs:mt-7 md:mt-14">
					<div className="flex pt-4">
						<Subtitle subtitle="Today's" />
					</div>
					<div className="flex mt-5 h-15 mb-5">
						<Title title="Flash Sales" />
						<Countdown />
						<div className="flex grow justify-end ">
							<CustomArrow />
						</div>
					</div>
					<div className="pt-4 w-full">
						{/* Display Products */}
						<DisplayProducts1 productsCategory={PRODUCTS_CATEGORY} />
					</div>
					<div className=" flex justify-center py-10">
						<ViewButton />
					</div>
				</div>
			</SliderArrowProvider>
		</React.Suspense>
	);
};

export default FlashSales;
