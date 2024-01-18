import Select from "react-select";
const Selects = ({
  id,
  label,
  value,
  placeholder,
  options,
  setSearch,
  search,
}) => {
  return (
    <div className="mb-6 w-full md:mb-0 ">
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
        htmlFor="grid-zip"
      >
        {label}
      </label>
      {id !== undefined ? (
        <input
          className="w-full rounded-md border p-2 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 dark:bg-gray-800"
          value={value}
          disabled
        />
      ) : (
        <Select
          placeholder={placeholder}
          options={options}
          onChange={(e) => setSearch({ ...search, name: e.value })}
        />
      )}
    </div>
  );
};

export default Selects;
