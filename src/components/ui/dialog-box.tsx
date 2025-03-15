import Button from "./button";

type DialogBoxProps = {
  closeDialog: () => void;
};

export default function DialogBox({ closeDialog }: DialogBoxProps) {
  return (
    <section className="fixed inset-0 bg-black/65 z-50">
      <Button onClick={closeDialog}>X</Button>
    </section>
  );
}
