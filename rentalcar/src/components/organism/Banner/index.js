import { useLocation } from "react-router-dom";
import { Button } from "components/atoms";
import Picture from "components/atoms/Picture";
import mobil from "assets/img/img_car.png";

const Banner = () => {
  const location = useLocation();
  const params = location.pathname;
  return (
    <>
      <div className="flex flex-col items-center dark:bg-gray-700 dark:text-white lg:grid lg:w-full lg:grid-cols-2 lg:gap-4 lg:pl-32">
        <div className="mt-[-20px] px-7 lg:mt-[-60px] lg:w-full">
          <h2 className="mb-8 mt-14 text-4xl font-bold lg:mt-0">
            Sewa & Rental Mobil Terbaik di Kawasan Medan
          </h2>
          <p className="mb-8">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24jam.
          </p>
          {params === "/search" ? (
            ""
          ) : (
            <Button
              name_btn={"Mulai Sewa Mobil"}
              cls={
                "bg-green-500 focus:outline-none hover:bg-green-600 dark:bg-gray-900 dark:hover:bg-gray-800"
              }
              href={"/search"}
            />
          )}
        </div>
        <div className="ml-4 mt-16">
          <Picture fileName={mobil} alt={mobil} />
        </div>
      </div>
    </>
  );
};

export default Banner;
