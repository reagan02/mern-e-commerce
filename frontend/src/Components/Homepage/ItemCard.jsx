import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faStarHalfAlt,
	faEye,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import "./Homepage.css";
const ItemCard = (props) => {
	const [viewDiscount, setViewDiscount] = useState(null);
	useEffect(() => {
		if (props.discount !== 0) {
			setViewDiscount(true);
		} else {
			setViewDiscount(false);
		}
	}, [props.discount]);
	return (
		<div className="rounded border shadow-md xs:w-24 sm:w-24 md:w-48 xl:w-56 lg:mt-3 xl:mt-5 flex flex-col gap-1 sm:gap-2 justify-between h-44 md:h-64 lg:h-72 xl:h-80">
			<div className="relative border">
				<img
					className="size-20 md:size-36 lg:size-40 xl:size-48 object-cover"
					src={props.image}
					alt=""
				/>
				{viewDiscount && (
					<div className="absolute lg:mt-3  md:mt-2 md:ml-3 xs:mt-1 xs:ml-1 bg-custom-red rounded-md top-0 ">
						<p className="xs:text-2xs  md:text-sm lg:text-base  text-white xs:px-1 py-1 sm:px-2">
							{props.discount}%
						</p>
					</div>
				)}
				<div className="absolute lg:mt-3 lg:mr-2 md:mt-2 xs:mr-1 xs:mt-1 top-0 right-0 grid gap-3 ">
					<div className="xs:size-3 md:size-5 lg:size-7 bg-white rounded-full flex items-center justify-center border hover:text-custom-red">
						<FontAwesomeIcon icon={faHeart} className="size-4 " />
					</div>
					<div className="xs:size-3 md:size-5 lg:size-7 bg-white rounded-full flex items-center justify-center border hover:text-custom-red">
						<FontAwesomeIcon icon={faEye} className="size-4 " />
					</div>
				</div>
			</div>
			<div className="xs:mt-1 md:mt-2 lg:px-3 md:px-2 xs:px-1 h-full flex flex-col justify-between">
				<p className="xs:text-xs md:text-sm lg:text-base md:font-semibold mb-2 line-clamp-2 md:line-clamp-1">
					{props.name}
				</p>
				<p className="text-custom-red xs:text-xs md:text-sm lg:text-base">{`₱ ${props.price.toLocaleString()}`}</p>
				<div className="flex flex-wrap xs:py-1 md:py-2 items-center">
					{Array(Math.floor(props.rating))
						.fill()
						.map((_, i) => (
							<FontAwesomeIcon
								key={i}
								icon={faStar}
								className="text-yellow-500 xs:size-2 md:size-3 lg:size-4"
							/>
						))}
					{props.rating % 1 !== 0 && (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-yellow-500 xs:size-2 md:size-3 lg:size-4"
						/>
					)}
					<p className="xs:text-xs md:text-sm lg:text-base sm:pl-1 md:pl-2 ">{`(${props.rating})`}</p>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;

ItemCard.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number,
	rating: PropTypes.number,
};
