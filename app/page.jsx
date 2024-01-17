import { Suspense } from 'react';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Container } from '@mantine/core';
import { HeroSection } from './Sections/Hero/HeroSection';
import { Loading } from '../components/Loading';
import Error from '../components/Error';

export default function HomePage() {
  return (
    <>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Container w={1300}>
          <HeroSection />
        </Container>
      </Suspense>
    </ErrorBoundary>
    </>
  );
}
