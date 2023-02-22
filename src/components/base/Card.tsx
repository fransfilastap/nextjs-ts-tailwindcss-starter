import { ComponentPropsWithRef, FunctionComponent } from 'react';
import clsxtw from '@/lib/clsxtw';

type CardProps = ComponentPropsWithRef<'div'>;

const Card: FunctionComponent<CardProps> = ({
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={clsxtw(
        'border border-gray-200 rounded-xl p-3 shadow shadow-gray-100 hover:shadow-md cursor-pointer transition-all duration-150 ease-in-out bg-white/30 backdrop-blur-md',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
