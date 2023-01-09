import { ReactElement } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import RootLayout from '@/components/layouts/RootLayout';

export default function Home(): ReactElement {
  return (
    <RootLayout>
      <Seo />
      <Container className='flex flex-col items-center justify-center min-h-screen'>
        <h5 className='text-xl text-center  md:text-2xl text-black dark:text-white font-bold'>
          Next.js + Tailwind CSS + TypeScript Starter
        </h5>
        <p className='text-gray-800 dark:text-gray-400 text-sm text-center font-semibold'>
          Included ESLint, Prettier, Lint-Staged and Commit Lint{' '}
        </p>
      </Container>
    </RootLayout>
  );
}
