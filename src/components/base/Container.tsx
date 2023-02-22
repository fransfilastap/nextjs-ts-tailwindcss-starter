import { ComponentPropsWithoutRef, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';

type ContainerProps = ComponentPropsWithoutRef<'div'>;
export default function Container({
  children,
  className,
  ...rest
}: ContainerProps): ReactElement {
  return (
    <div
      {...rest}
      className={clsxtw('container mx-auto p-4', className)}
    >
      {children}
    </div>
  );
}
