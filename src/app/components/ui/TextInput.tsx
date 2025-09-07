import clsx from "clsx";

export type TextInputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  className,
  type = "text",
  ...props
}: TextInputProps) {
  const baseClassNames = "peer py-2.5 sm:py-3 px-4 block border-transparent rounded-lg sm:text-sm focus:border-[var(--color-secondary)] ring-0 disabled:opacity-50 disabled:pointer-events-none text-[var(--color-foreground)]";
  return (
    <input {...props} type={type} className={clsx(baseClassNames, className)}  />
  );
}
