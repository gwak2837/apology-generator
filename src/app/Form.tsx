'use client';

import { generateApology } from '@/util/apology';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const i = +(searchParams.get('i') ?? 0);
  const 당사자 = searchParams.get('당사자') ?? '';
  const 피해자 = searchParams.get('피해자') ?? '';
  const 행위 = searchParams.get('행위') ?? '';
  const apology = 당사자 && 피해자 && 행위 ? generateApology(당사자, 피해자, 행위) : '';

  const disabledStyle =
    'disabled:text-gray-400 disabled:border-slate-100 disabled:bg-slate-50 disabled:cursor-not-allowed';
  const hoverStyle = 'hover:bg-slate-200 animation';
  const focusStyle =
    'focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate';
  const buttonStyle = `border-2 bg-slate-100 rounded-lg px-4 py-2 transition-colors ${hoverStyle} ${focusStyle} ${disabledStyle}`;

  function updateSearchParams(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const form = event.currentTarget as HTMLFormElement;
    const 당사자 = (form.elements.namedItem('당사자') as HTMLInputElement).value;
    const 피해자 = (form.elements.namedItem('피해자') as HTMLInputElement).value;
    const 행위 = (form.elements.namedItem('행위') as HTMLInputElement).value;
    current.set('당사자', 당사자);
    current.set('피해자', 피해자);
    current.set('행위', 행위);

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  }

  function clearSearchParams() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete('당사자');
    current.delete('피해자');
    current.delete('행위');

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  }

  function changeIndex(offset: number) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('i', String(i + offset));

    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  }

  return (
    <div>
      {apology ? (
        <div>
          <p className="whitespace-pre-line py-4">{apology}</p>
          <div className="grid grid-cols-[auto_1fr_auto] gap-2">
            <button className={buttonStyle} disabled={i <= 0} onClick={() => changeIndex(-1)}>
              {'<'}
            </button>
            <button className={`w-full ${buttonStyle}`} onClick={clearSearchParams}>
              초기화
            </button>
            <button className={buttonStyle} disabled={i >= 2} onClick={() => changeIndex(1)}>
              {'>'}
            </button>
          </div>
        </div>
      ) : (
        <form
          className="grid grid-cols-[auto_1fr] gap-4 max-w-prose mx-auto"
          onSubmit={updateSearchParams}
        >
          <label>당사자</label>
          <input className="px-2 py-1 rounded" name="당사자" required />
          <label>피해자</label>
          <input className="px-2 py-1 rounded" name="피해자" required />
          <label>행위</label>
          <input className="px-2 py-1 rounded" name="행위" required />
          <button className="col-span-2 border-2 bg-slate-100 rounded-lg px-4 py-2" type="submit">
            생성하기
          </button>
        </form>
      )}
    </div>
  );
}

export function FormFallback() {
  const 당사자 = '싱글벙글 출연자 이유미';
  const 피해자 = '국군 장병분들';
  const 행위 = '어제 올라온 영상';
  const disabledStyle =
    'disabled:text-gray-400 disabled:border-slate-100 disabled:bg-slate-50 disabled:cursor-not-allowed';
  const hoverStyle = 'hover:bg-slate-200 animation';
  const focusStyle =
    'focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate';
  const buttonStyle = `border-2 bg-slate-100 rounded-lg px-4 py-2 transition-colors ${hoverStyle} ${focusStyle} ${disabledStyle}`;

  return (
    <div>
      <form className="grid md:grid-cols-2 gap-4">
        <label>당사자</label>{' '}
        <input className="px-2 py-1 rounded" name="당사자" required value={당사자} />
        <label>피해자</label>{' '}
        <input className="px-2 py-1 rounded" name="피해자" required value={피해자} />
        <label>행위</label>{' '}
        <input className="px-2 py-1 rounded" name="행위" required value={행위} />
        <button className="col-span-2 border-2 bg-slate-100 rounded-lg px-4 py-2" type="submit">
          생성하기
        </button>
      </form>
      <div className="invisible">
        <p className="whitespace-pre-line py-4">{generateApology(당사자, 피해자, 행위)}</p>
        <div className="grid grid-cols-[auto_1fr_auto] gap-2">
          <button className={buttonStyle} disabled>
            {'<'}
          </button>
          <button className={`w-full ${buttonStyle}`}>초기화</button>
          <button className={buttonStyle}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
