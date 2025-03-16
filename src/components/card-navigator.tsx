import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardNavigator() {
  return (
    <div className="w-full flex justify-end space-x-3 pt-4">
      <button className="text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
