import { clsx } from "clsx";

type UserMenuProps = {
  condensed?: boolean;
  className?: string
}

export function UserMenu({
  condensed = false,
  className
}: UserMenuProps) {
  return (
    <div className={clsx("shrink-0 group block", className)}>
      <div className="flex items-center">
        <img className="inline-block shrink-0 size-8 xs:size-9.5 lg:size-11 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
        {condensed ? null : (
          <div className="ms-3">
            <h3 className="font-semibold text-gray-800 dark:text-white">Mark Wanner</h3>
            <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">mark@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
}
