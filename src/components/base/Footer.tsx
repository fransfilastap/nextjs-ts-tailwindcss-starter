import { ReactElement } from 'react';
import Link from 'next/link';

export default function Footer(): ReactElement {
  return (
    <footer className='flex py-3 gap-1 flex-row items-center justify-center h-full border dark:border-t-gray-800 bg-[#fafafa]'>
      <span>&copy; {new Date().getFullYear()} By </span>
      <Link href="https://fransfp.dev"> Frans Filasta Pratama</Link>
    </footer>
  );
}
