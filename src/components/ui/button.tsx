import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
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
