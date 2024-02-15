// components/Home.tsx
'use client';

import { useEffect } from 'react';
import { useSession } from '@clerk/nextjs';
import Image from 'next/image';
import { ModeToggle } from './components/toggle';

export default function Home() {
  const { session } = useSession();

  

  const redirectToDashboard = () => {
    // Используем location.href для клиентской навигации
    location.href = '/dashboard';
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background h-full p-24">
      <div className="relative items-center w-full mx-auto max-w-7xl md:px-12">
        <div className="max-w-3xl text-center mx-auto">
          <span>
            <span className="w-auto px-6 py-2 bg-secondary bg-origin-content rounded">
              <span className="text-sn font-medium text-primary">
                Створювати нотатки та слідкувати за інвойсами стало простіше
              </span>
            </span>
          </span>
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Сервіс для створення нотаток та інвойсів
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-x text-secondary-foreground">
            Забудьте про складні програми та заплутані інтерфейси. Ми пропонуємо інтуїтивно
            зрозумілу систему, яка дозволяє вам легко організовувати свої думки та ефективно вести
            облік інвойсів. Наші інструменти для створення нотаток розроблені так, щоб вони були
            вашим найкращим помічником у будь-який момент.
          </p>

          {/* Добавим кнопку для переадресации на /dashboard */}
          <button
            onClick={redirectToDashboard}
            className="mt-4 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Перейти до дашборду
          </button>
        </div>
      </div>
    </section>
  );
}
