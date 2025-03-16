import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  type = "button",
  onClick,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bg-primary/45 text-background rounded-md px-4 py-2 hover:cursor-pointer hover:bg-primary/85 hover:text-white transition-all duration-200",
        className
      )}
    >
      {children}
    </button>
  );
}
