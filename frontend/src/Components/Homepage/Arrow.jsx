// Arrow.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Section1Context from "./Section1Context";
const Arrow = () => {
	const { handleNext, handlePrev } = useContext(Section1Context);
	return (
		<div className="hidden lg:flex gap-4 ">
			<button
				onClick={handlePrev}
				className="hover:border hover:bg-zinc-100 rounded-full px-3"
			>
				<FontAwesomeIcon icon={faArrowLeft} className="size-7 " />
			</button>
			<button
				onClick={handleNext}
				className=" hover:border hover:bg-zinc-100 rounded-full px-3"
			>
				<FontAwesomeIcon icon={faArrowRight} className="size-7" />
			</button>
		</div>
	);
};

export default Arrow;
