/* eslint-disable tailwindcss/no-contradicting-classname */
const Loading = () => {
  return (
    <>
      <div className="flex justify-center bg-slate-100 dark:bg-gray-800">
        <div className="w-4/5">
          <div
            role="status"
            className="flex w-full animate-pulse rounded-md bg-slate-100 p-3 lg:p-10"
          >
            <div className="flex w-full items-center space-x-2">
              <div className="h-8 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="hidden w-full space-x-2 lg:ml-56 lg:flex">
              <div className="h-3 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-3 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-3 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-3 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center justify-items-center bg-slate-100 pt-5 pb-10 dark:bg-gray-800">
        <div className="w-4/5">
          <div
            role="status"
            className="flex w-full animate-pulse flex-col rounded-md bg-slate-100 p-3 lg:flex-row lg:p-10"
          >
            <div className="flex w-full flex-col justify-center">
              <div className="h-8 w-4/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="mt-4 mb-8 h-6 w-1/2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="mt-2 h-3 w-2/3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="mt-2 h-3 w-3/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="mt-2 h-3 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="mt-12 flex h-80 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 lg:mt-0 lg:w-4/5">
              <svg
                className="h-14 w-14 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-10 mb-10 flex items-center justify-center justify-items-center dark:bg-gray-800">
        <div className="w-full p-3 lg:w-3/5 lg:p-0">
          <div
            role="status"
            className="flex w-full animate-pulse gap-6 rounded-md border-8 bg-slate-100 p-10"
          >
            <div className="mt-2 h-7 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="mt-2 h-7 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="mt-2 h-7 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="mt-2 h-7 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="mt-2 h-7 w-2/5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center justify-items-center overflow-hidden dark:bg-gray-800">
        <div className="flex w-4/5 justify-center gap-4">
          <div
            role="status"
            className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
          >
            <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mt-4 flex items-center space-x-3">
              <svg
                className="h-14 w-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 dark:bg-gray-800 md:p-6"
          >
            <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mt-4 flex items-center space-x-3">
              <svg
                className="h-14 w-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-800" />
                <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
          >
            <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mt-4 flex items-center space-x-3">
              <svg
                className="h-14 w-14 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
