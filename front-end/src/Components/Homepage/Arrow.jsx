import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  return (
    <div className="flex items-center justify-end grow ">
      <FontAwesomeIcon icon={faArrowLeft} className="size-5 pr-3" />
      <FontAwesomeIcon icon={faArrowRight} className="size-5 " />
    </div>
  );
};

export default Arrow;
