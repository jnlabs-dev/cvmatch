import clsx from "clsx";

type ScrollableAreaProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ScrollableArea({
  className,
  children,
  ...props
}: ScrollableAreaProps) {
  const baseClassNames = "overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300";
  return (
    <div className={clsx(className, baseClassNames)} {...props}>{children}</div> 
  );
}
