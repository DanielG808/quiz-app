import H1 from "../H1";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type DialogBoxProps = {
  closeDialog: () => void;
};

export default function DialogBox({ closeDialog }: DialogBoxProps) {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/55 z-50">
      <div className="bg-white w-1/3 rounded-md p-4">
        <div className="flex justify-end items-center">
          <Button
            onClick={closeDialog}
            className="text-md bg-white text-black/65 p-0 hover:text-black hover:bg-white"
          >
            <FontAwesomeIcon icon={faX} />
          </Button>
        </div>
        <H1 className="text-2xl">Create a New Quiz:</H1>
      </div>
    </section>
  );
}
