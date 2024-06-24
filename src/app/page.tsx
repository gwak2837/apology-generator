import { Suspense } from 'react';
import Form, { FormFallback } from './Form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<FormFallback />}>
        <Form />
      </Suspense>
    </main>
  );
}
