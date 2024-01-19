import React from "react";
import { List } from "components/atoms";
import img_service from "assets/img/img_service.png";
import { serviceList } from "jsonData/serviceList";

const OurServices = () => {
  return (
    <div
      id="our_services"
      className="grid grid-cols-1 bg-white py-20 dark:bg-gray-800 dark:text-white"
    >
      <div className="flex flex-col items-center justify-evenly p-4 lg:flex-row">
        <div className="w-3/4 lg:w-1/3">
          <img src={img_service} alt="" />
        </div>
        <div className="w-10/12 lg:w-1/3">
          <h2 className="mt-9 mb-5 text-2xl font-bold lg:mt-0">
            Best Car Rental for any kind of trip in Medan!
          </h2>
          <p className="mb-5">
            Sewa mobil di Medan bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          {serviceList.map((item) => (
            <List key={item.id} name_list={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
