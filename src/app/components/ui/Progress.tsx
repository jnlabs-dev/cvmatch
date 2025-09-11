import clsx from "clsx";

export type ProgressProps = {
  className?: string;
  color?: "primary" | "secondary" | "gradient";
  size?: "small" | "default" | "large";
  value: number; // percentage 0-100
};

export function Progress({
  className,
  size = "default",
  color = "secondary",
  value
}: ProgressProps) {
  const baseClassNames = "flex w-full bg-gray-200 rounded-full overflow-hidden";
  const sizes = {
    small: "h-1",
    default: "h-1.5",
    large: "h-2"
  }
  const colors = {
    primary: "bg-[var(--color-primary)]",
    secondary: "bg-[var(--color-secondary)]",
    gradient: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
  }
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={clsx(baseClassNames, sizes[size], className)}
    >
      <div
        className={clsx(
          "flex flex-col justify-center rounded-full overflow-hidden transition duration-500",
          colors[color]
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
