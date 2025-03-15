import H1 from "../H1";
import Button from "./button";

type DialogBoxProps = {
  closeDialog: () => void;
};

export default function DialogBox({ closeDialog }: DialogBoxProps) {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/65 z-50">
      <div className="bg-white w-2/3 rounded-md p-4">
        <div className="">
          <Button onClick={closeDialog}>X</Button>
        </div>
        <H1 className="text-2xl">Create a New Quiz:</H1>
      </div>
    </section>
  );
}
