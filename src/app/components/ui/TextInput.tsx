import clsx from "clsx";

export type TextInputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  className,
  type = "text",
  ...props
}: TextInputProps) {
  const baseClassNames = "peer p-1 px-2 sm:p-2 block border-gray-200 rounded-lg text-xs xs:text-sm focus:border-[var(--color-secondary)] ring-0 disabled:opacity-50 disabled:pointer-events-none text-[var(--color-foreground)]";
  return (
    <input {...props} type={type} className={clsx(baseClassNames, className)}  />
  );
}
