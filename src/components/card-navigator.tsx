import {
  faArrowLeft,
  faArrowRight,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardNavigatorProps = {
  handleFlip: () => void;
  handleNext: () => void;
  handlePrev: () => void;
};

export default function CardNavigator({
  handleFlip,
  handleNext,
  handlePrev,
}: CardNavigatorProps) {
  return (
    <div className="w-full flex justify-end space-x-4">
      <button
        onClick={handlePrev}
        className="text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200"
        onClick={handleFlip}
      >
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <button
        onClick={handleNext}
        className="text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
