import { Button } from "../../atoms";
import { accordionList } from "jsonData/accordionList";
import Accordion from "../Accordion";

const Faq = () => {
  return (
    <>
      {/* CTA Banner */}
      <div
        id="faq"
        className="flex justify-center justify-items-center bg-white  py-8 text-white dark:bg-gray-700"
      >
        <div className="mx-8 flex w-full flex-col items-center justify-center justify-items-center rounded-md border bg-blue-800 p-8 text-center dark:border-none dark:bg-gray-600 lg:w-10/12">
          <p className="mb-8 text-3xl font-bold">
            Sewa Mobil di Medan Sekarang
          </p>
          <p className="mb-4 font-bold lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Button
            name_btn={"Mulai Sewa Mobil"}
            cls={
              "bg-green-500 hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-gray-900"
            }
            href={"/search"}
          />
        </div>
      </div>
      {/* CTA Banner */}

      {/* FAQ */}
      <div className="flex justify-between bg-white py-28 text-black dark:bg-gray-700 dark:text-white">
        <div className="grid w-full grid-cols-1 justify-center justify-items-center px-5 lg:w-11/12 lg:grid-cols-2">
          <div>
            <p className="text-3xl font-bold">Frequently Asked Question</p>
            <p className="mt-3 font-bold">Pertanyaan yang sering diajukan</p>
          </div>

          <div className="grid w-full pt-8 lg:pt-0">
            {accordionList.map((item) => (
              <Accordion key={item} header={item.title} detail={item.detail} />
            ))}
          </div>
        </div>
      </div>
      {/* FAQ */}
    </>
  );
};

export default Faq;
