import { ComponentPropsWithRef, FunctionComponent } from 'react';
import clsxtw from '@/lib/clsxtw';

type NavigationProps = ComponentPropsWithRef<'nav'>;
const Navigation: FunctionComponent<NavigationProps> = ({
  className,
  children,
}) => {
  return <nav className={clsxtw('', className)}>{children}</nav>;
};

export default Navigation;
