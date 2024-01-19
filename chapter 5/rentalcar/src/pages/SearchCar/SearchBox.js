import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/atoms";
import { carList } from "jsonData/carList";
import { getCarsBySearch } from "redux/actions/posts";
import { NumberFormats } from "components/atoms/NumberFormats";
import Selects from "./Selects";
import "./style.css";

const SearchBox = (props) => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    name: "",
    category: "",
    price: "",
    status: "",
  });
  const { category, harga, status, data2 } = props;
  const car = carList;

  const handleSearch = (e) => {
    const data = [];
    e.preventDefault();
    data2
      .filter(
        (item) =>
          item.name === search.name ||
          item.category === search.category ||
          item.price === search.price ||
          item.status === search.status
      )
      .map((item) => data.push(item));
    dispatch(getCarsBySearch(data));
  };

  return (
    <div
      className={`${
        id !== undefined ? "lg:mt-14" : "lg:-mt-0"
      } mx-5 mt-14 flex justify-center pb-12 dark:bg-gray-800 lg:mx-0`}
    >
      <div
        className={`relative flex w-full flex-col gap-4 bg-white dark:bg-gray-800 dark:text-white md:w-10/12 lg:w-9/12 xl:w-3/4 xl:flex-row ${
          id !== undefined ? "py-14" : "py-8"
        } rounded-md border px-7 shadow-md lg:-mt-5 xl:-mt-10`}
      >
        {id !== undefined ? (
          <h2 className="absolute left-7 top-1 mt-3 font-bold">Pencarianmu</h2>
        ) : (
          ""
        )}

        <Selects
          label="Nama Mobil"
          placeholder={"Ketik nama mobil"}
          setSearch={setSearch}
          options={car}
          search={search}
          value={posts.name}
          id={id}
        />

        <Selects
          label="Kategori"
          placeholder={"Kapasitas Mobil"}
          setSearch={setSearch}
          options={category}
          search={search}
          value={posts.category}
          id={id}
        />

        <Selects
          label="Harga"
          placeholder={"Harga"}
          setSearch={setSearch}
          options={harga}
          search={search}
          value={"Rp. " + NumberFormats(posts.price)}
          id={id}
        />

        <Selects
          label="Status"
          placeholder={"Status"}
          setSearch={setSearch}
          search={search}
          options={status}
          value={posts.status === false ? "Belum Disewa" : "Disewa"}
          id={id}
        />

        <div className="mb-6 w-full md:mb-0 md:w-full xl:w-1/2">
          <div className="relative flex">
            {id !== undefined ? (
              <Button
                name_btn={"Edit"}
                cls={
                  "w-full mt-6 outline hover:outline-blue-600 outline-blue-400 text-blue-500"
                }
                href={"/search"}
              />
            ) : (
              <button
                type="submit"
                className="w-full rounded-md bg-green-500 p-2 font-bold text-white hover:bg-green-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900"
                onClick={handleSearch}
                style={{ marginTop: "26px" }}
              >
                Cari Mobil
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
