import { Card } from "components/atoms";
import { whyusList } from "jsonData/whyusList";

const WhyUs = () => {
  return (
    <div
      id="whyus"
      className="flex flex-col items-center justify-center justify-items-center bg-white pb-14  dark:bg-gray-800 dark:text-white"
    >
      <div className="mb-10 mt-4 flex w-10/12 flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold">Why Us?</h1>
        <p className="text-xl font-bold">
          Mengapa harus pilih Binar Car Rental?
        </p>
      </div>
      <div className="mb-8 flex w-10/12 flex-col justify-center gap-4 bg-white dark:bg-gray-800 lg:flex-row">
        {whyusList.map((item, index) => (
          <Card
            className={
              "my-1 w-full rounded-lg border p-5 leading-normal hover:bg-slate-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 lg:mx-0 lg:my-1 lg:w-1/2"
            }
            key={index}
            name_item={item.name_item}
            detail={item.detail}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
