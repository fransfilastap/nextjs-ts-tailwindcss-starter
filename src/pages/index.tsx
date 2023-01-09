import { ReactElement } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import RootLayout from '@/components/layouts/RootLayout';

export default function Home(): ReactElement {
  return (
    <RootLayout>
      <Seo />
      <Container
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h5 className="text-2xl text-black font-bold">
          Next.js + Tailwind CSS + TypeScript Starter
        </h5>
        <p className="text-gray-800 text-sm">
          Included ESLint, Prettier, Lint-Staged and Commit Lint{' '}
        </p>
      </Container>
    </RootLayout>
  );
}
