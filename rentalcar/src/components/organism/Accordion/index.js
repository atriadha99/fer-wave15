/* eslint-disable react/no-unknown-property */
const Accordion = (props) => {
  const { header, detail } = props;
  return (
    <div className="mb-4 w-full rounded-sm border border-gray-200 bg-white dark:bg-gray-800">
      <div className="relative overflow-hidden">
        <input
          type="checkbox"
          className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0"
          collapse
        />
        <div className="flex h-12 w-full items-center">
          <h1 className="px-5">{header}</h1>
        </div>
        <div className="absolute top-4 right-3 flex rotate-0 items-center transition-transform duration-500 peer-checked:-rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="block max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-60 dark:bg-gray-800">
          <ul className="mb-4 w-full list-none bg-blue-50 px-5 py-2 hover:bg-blue-100 dark:bg-gray-700">
            <li className="font-bold underline">{detail}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
