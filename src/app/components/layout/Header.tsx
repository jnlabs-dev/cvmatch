import { MenuIcon } from 'lucide-react'

import { SIDEBAR_ID, SIDEBAR_SELECTOR } from '@/app/constants/layout.constants';

import { IconButton } from '@/app/components/ui/IconButton';
import { Logo } from '@/app/components/ui/Logo';
import { UserMenu } from '@/app/components/user/UserMenu';

export function Header() {
  return (
    <header className="lg:hidden grid grid-cols-[1fr_auto_1fr] items-center p-3 xs:p-4 bg-white border-b border-gray-200">
      <IconButton
        type="button"
        className="justify-self-start"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls={SIDEBAR_ID}
        aria-label="Toggle navigation"
        data-hs-overlay={SIDEBAR_SELECTOR}
      >
        <MenuIcon className="justify-self-center shrink-0 size-6 stroke-[var(--color-foreground)]" />
      </IconButton>
      <Logo />
      <div className="justify-self-end">
        <UserMenu condensed={true} />
      </div>
    </header>
  );
}
