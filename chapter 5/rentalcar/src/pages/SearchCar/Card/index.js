import { Button } from "components/atoms";
import { NumberFormats } from "components/atoms/NumberFormats";
import imgnotfound from "assets/img/img_not_available.png";

const Card = ({ item }) => {
  return (
    <div className="flex items-center justify-center lg:items-stretch">
      <div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-100 py-8 px-5 shadow-lg hover:bg-slate-50 dark:hover:bg-gray-700 lg:mb-0 lg:max-w-sm">
        <div className="mb-10">
          {item.image ? (
            <img
              src={item.image}
              className="mx-auto h-[222px] w-[303px] rounded object-cover"
              alt="gambar"
            />
          ) : (
            <img
              src={imgnotfound}
              className="mx-auto h-[222px] w-[303px] rounded object-cover"
              alt="no available"
            />
          )}
        </div>
        <div className="">
          <div className="mt-10 text-xl font-bold capitalize">{item.name}</div>
          <div className="py-2 text-lg font-bold">
            {NumberFormats(item.price)}
            &nbsp;/ Hari
          </div>
          <p className="mb-10 text-base text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <Button
          name_btn={"Pilih Mobil "}
          cls={
            "w-full dark:bg-gray-700 dark:hover:bg-gray-600 bg-green-500 w-full hover:bg-green-600 mb-10 lg:mb-0"
          }
          href={`/search/${item.id}`}
        />
      </div>
    </div>
  );
};

export default Card;
