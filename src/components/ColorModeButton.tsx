import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactElement,
} from 'react';
import clsxtw from '@/lib/clsxtw';
import { ColorMode } from '@/types';
import { SunIcon } from '@/components/icons';

type ColorModeButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'onClick'>;
const Icons: Record<ColorMode, ReactElement> = {
  light: <SunIcon />,
  dark: <SunIcon />,
  system: <SunIcon />,
};

const ColorModeButton: FunctionComponent<ColorModeButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsxtw('rounded-md ring-1 ring-gray-200 p-1', className)}
    >
      {Icons.light}
    </button>
  );
};

export default ColorModeButton;
