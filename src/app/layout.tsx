import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '사과문 생성기',
  description: '무엇을 뭐 어떻게 잘못했는지 등의 내용이 없는 전형적인 사과문을 생성해줍니다.',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
