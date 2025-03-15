import FormInputOrTextarea from "./form-input-or-textarea";
import TypeSelector from "./type-selector";

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
    </form>
  );
}
