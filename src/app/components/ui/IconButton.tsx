import clsx from "clsx";

type IconButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  const baseClassNames = "inline-flex items-center justify-center p-1 border border-transparent hover:border-gray-200 rounded transition-all duration-300 ease-in-out";

  return (
    <button className={clsx(baseClassNames, className)} {...props}>
      {children}
    </button>
  );
}
