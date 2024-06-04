import { useState, useContext } from "react";
import Slider from "react-slick";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImages = () => {
	const { productData } = useContext(ProductContext);
	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			{/* Product Images */}
			<div className="flex flex-col-reverse xl:flex-row lg:gap-10 xl:gap-20">
				{/* Small Images */}
				<div className="hidden lg:flex xl:flex-col gap-5 h-full">
					{productData && // if product data exist
						productData.images && // if the product images exist
						// map images
						productData.images.slice(0, 4).map((image, index) => (
							<button
								key={index}
								// if image index is equal to index, set border to orange
								className={`border-2 ${
									imageIndex === index
										? "border-custom-red border "
										: "border-initial"
								} lg:size-28 xl:size-32`}
								onClick={() => {
									setImageIndex(index);
								}}
							>
								<img src={image} alt={index} />
							</button>
						))}
				</div>
				{/* Big Image */}

				<button className=" hidden lg:block md:h-[430px] md:w-full lg:h-[490px] lg:w-[520px] xl:h-[568px] xl:w-[600px] rounded-md ">
					{productData && productData.images && (
						<img
							src={productData.images[imageIndex]}
							alt=""
							className="object-cover "
						/>
					)}
				</button>
				{/* Slider */}
				<div className=" lg:hidden slider-container">
					<Slider {...settings}>
						{productData &&
							productData.images &&
							productData.images.map((image, index) => (
								<button
									key={index}
									// if image index is equal to index, set border to orange
								>
									<img
										src={image}
										alt=""
										className="xs:h-52 sm:h-64 md:h-80 w-full object-contain"
									/>
								</button>
							))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ProductImages;
