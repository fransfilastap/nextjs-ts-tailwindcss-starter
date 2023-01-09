import { ComponentPropsWithRef, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';
import Container from '@/components/base/Container';
import useScroll from '@/hooks/useScroll';
import Logo from '@/components/base/Logo';
import Navigation from '@/components/base/Navigation';
import ColorModeButton from '@/components/ColorModeButton';

type HeaderProps = ComponentPropsWithRef<'header'>;

export default function Header({
  className,
  ...rest
}: HeaderProps): ReactElement {
  const isScrolled = useScroll(100);

  return (
    <header
      className={clsxtw(
        'transition-all duration-200 ease-in transform-gpu backdrop-blur-lg w-screen bg-white dark:bg-slate-800',
        { 'bg-white/50 sticky translate-y-0 z-5 top-0': isScrolled },
        className
      )}
      {...rest}
    >
      <Container className="flex flex-row justify-between items-center">
        <Logo />
        <Navigation className="hidden md:flex flex-row md:gap-2">
          <ColorModeButton />
        </Navigation>
      </Container>
    </header>
  );
}
