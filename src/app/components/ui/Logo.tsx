import clsx from "clsx";

type LogoProps = {
  className?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function Logo({
  className,
  ...props
}: LogoProps) {
  const baseClassNames = "inline-flex items-center gap-2";

  return (
    <a {...props} className={clsx(className, baseClassNames)} href="#" aria-label="CVmatch">
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded rounded-tr-xl p-1">
        <svg className="size-5 xs:size-6" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
          <path d="M20,7H15V2ZM13,2V9h7V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2ZM10.938,14.647l-1.3-1.082A1,1,0,0,0,8.36,15.1l2,1.666a1,1,0,0,0,1.347-.061l4-4a1,1,0,0,0-1.414-1.414Z"/>
        </svg>
      </div>
      <span className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
        CVmatch
      </span>
    </a>
  );
}
