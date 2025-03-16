import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type DialogBoxProps = {
  closeDialog: () => void;
  children: React.ReactNode;
};

export default function DialogBox({ closeDialog, children }: DialogBoxProps) {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/55 z-50">
      <div className="bg-white w-1/3 rounded-md p-4">
        <div className="flex justify-end items-center">
          <Button
            onClick={closeDialog}
            className="text-sm bg-white text-black/65 p-0 hover:text-black hover:bg-white transition-all duration-200"
          >
            <FontAwesomeIcon icon={faX} />
          </Button>
        </div>
        {children}
      </div>
    </section>
  );
}
