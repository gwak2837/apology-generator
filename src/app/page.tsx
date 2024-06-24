import { Suspense } from 'react';
import Form, { FormFallback } from './Form';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-8 sm:p-16 md:p-32">
      <Suspense fallback={<FormFallback />}>
        <Form />
      </Suspense>
    </main>
  );
}
