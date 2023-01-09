import { ComponentPropsWithRef, FunctionComponent, ReactElement } from 'react';
import useColorMode from '@/hooks/useColorMode';
import { ColorMode } from '@/types';
import useIsMounted from '@/hooks/useIsMounted';
import { MoonIcon, SunIcon, SystemIcon } from '@/components/icons';

const Icons: Record<ColorMode, ReactElement> = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <SystemIcon />,
};
type ColorModeSelectionProps = ComponentPropsWithRef<'select'>;

const ColorModeSwitcher: FunctionComponent<ColorModeSelectionProps> = (
  props
) => {
  const [colorMode, setColorMode] = useColorMode();
  useIsMounted();

  return (
    <div className='relative flex items-center justify-between border border-gray-100 dark:border-gray-800 p-2 text-sm rounded'>
      <span className='absolute left-0 inline-flex pointer-events-none'>
        {Icons[colorMode ?? 'system']}
      </span>
      <select
        className='px-6 focus:outline-none w-full appearance-none bg-transparent'
        value={colorMode ?? 'system'}
        onChange={(event) => {
          setColorMode(event.target.value as ColorMode);
        }}
      >
        <option className='flex flex-row' value='light'>
          Light
        </option>
        <option className='flex flex-row' value='dark'>
          Dark
        </option>
        <option className='flex flex-row' value='system'>
          System
        </option>
      </select>
      <span className='absolute right-0 inline-flex pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
          />
        </svg>
      </span>
    </div>
  );
};

export default ColorModeSwitcher;
