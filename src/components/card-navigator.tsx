import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardNavigator() {
  return (
    <div className="w-full flex justify-end space-x-3 pt-4 ">
      <div className="text-black/65 hover:text-black">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="text-black/65 hover:text-black">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
