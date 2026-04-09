'use client';

import { useAppSelector, useAppDispatch } from '@/lib/store';
import {
  increment,
  decrement,
  incrementByAmount,
  setMessage,
} from '@/lib/slices/exampleSlice';

export default function Home() {
  const { value, message } = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();
  const unusedValue = 123;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="w-full max-w-2xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Advanced Todo App
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Next.js + Redux + Tailwind CSS
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
            <p className="text-lg font-semibold mb-2">Redux State:</p>
            <p className="text-3xl font-bold">{message}</p>
            <p className="text-2xl font-bold mt-4">Counter: {value}</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(decrement())}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Decrement
              </button>
              <button
                onClick={() => dispatch(increment())}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Increment
              </button>
            </div>

            <button
              onClick={() => dispatch(incrementByAmount(5))}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Increment by 5
            </button>

            <div className="flex gap-4">
              <button
                onClick={() => dispatch(setMessage('Hello from Redux!'))}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Set Message 1
              </button>
              <button
                onClick={() => dispatch(setMessage('Redux is working!'))}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Set Message 2
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              This page demonstrates Redux Toolkit slices working with Next.js
              App Router and Tailwind CSS styling.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
