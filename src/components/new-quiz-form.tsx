import FormInputOrTextarea from "./form-input-or-textarea";
import TypeSelector from "./type-selector";
import Button from "./ui/button";

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log("Form submitted.");
};

export default function NewQuizForm() {
  return (
    <form className="flex flex-col py-2">
      <TypeSelector />
      <FormInputOrTextarea id="name" label="Name" />
      <FormInputOrTextarea
        type="textarea"
        id="description"
        label="Description"
      />
      <Button type="submit" onClick={handleSubmit} className="mt-3">
        Create Quiz
      </Button>
    </form>
  );
}
