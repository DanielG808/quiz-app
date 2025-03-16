import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FlashCardCreator() {
  return (
    <figure className="border-1 border-black/45 bg-white p-4 w-[600px] h-[325px] shadow-md relative">
      <div className="flex flex-grow h-full justify-center items-center">
        <input
          type="text"
          className="border-b border-black focus:outline-none text-center"
        />
      </div>
      <div className="absolute bottom-4 right-4 text-black/65 hover:text-black hover:cursor-pointer transition-all duration-200">
        <FontAwesomeIcon icon={faRedo} />
      </div>
    </figure>
  );
}
