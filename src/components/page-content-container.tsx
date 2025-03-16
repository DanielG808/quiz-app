import { cn } from "@/lib/utils/cn";

type PageContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContentContainer({
  children,
  className,
}: PageContentContainerProps) {
  return (
    <section className={cn("w-3/5 shadow-left-right", className)}>
      {children}
    </section>
  );
}
