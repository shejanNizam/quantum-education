"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error: ", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen justify-center items-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              Something went wrong!
            </h1>
            <p className="text-gray-700 mb-6">
              We encountered an unexpected error. Please try again later or
              contact support.
            </p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
