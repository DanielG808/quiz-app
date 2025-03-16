type FormInputOrTextareaProps = {
  type?: "input" | "textarea";
  id: string;
  label: string;
};

export default function FormInputOrTextarea({
  type = "input",
  id,
  label,
}: FormInputOrTextareaProps) {
  return (
    <>
      {type === "input" && (
        <>
          <label htmlFor={id}>{label}:</label>
          <input
            type="text"
            id={id}
            className="bg-primary/10 border-1 border-primary/65 rounded-md focus:outline-none focus:ring-1 ring-primary p-1"
          />
        </>
      )}
      {type === "textarea" && (
        <>
          <label htmlFor={id}>{label}:</label>
          <textarea
            id={id}
            className="bg-primary/10 border-1 border-primary/65 rounded-md focus:outline-none focus:ring-1 ring-primary p-1"
          ></textarea>
        </>
      )}
    </>
  );
}
