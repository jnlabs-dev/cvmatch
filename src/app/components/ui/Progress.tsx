import clsx from "clsx";

export type ProgressProps = {
  className?: string;
  size?: "small" | "default" | "large";
  value: number; // percentage 0-100
};

export function Progress({
  className,
  size = "default",
  value
}: ProgressProps) {
  const baseClassNames = "flex w-full bg-gray-200 rounded-full overflow-hidden";
  const sizes = {
    small: "h-1",
    default: "h-1.5",
    large: "h-2"
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
        className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
