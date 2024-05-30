// Arrow.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SliderArrowContext } from "../../Context/SliderArrowContext/SliderArrowContext";

const CustomArrow = () => {
	const { dispatch } = useContext(SliderArrowContext);
	const next = () => {
		dispatch({ type: "CHANGE_TO_NEXT" });
	};
	const previous = () => {
		dispatch({ type: "CHANGE_TO_PREV" });
	};
	return (
		<div className="hidden lg:flex gap-4 ">
			<button
				onClick={previous}
				className="hover:border hover:bg-zinc-100 rounded-full px-3"
			>
				<FontAwesomeIcon icon={faArrowLeft} className="size-7 " />
			</button>
			<button
				onClick={next}
				className=" hover:border hover:bg-zinc-100 rounded-full px-3"
			>
				<FontAwesomeIcon icon={faArrowRight} className="size-7" />
			</button>
		</div>
	);
};

export default CustomArrow;
