import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { category } from "jsonData/categoryList";
import { harga } from "jsonData/priceList";
import { status } from "jsonData/sewaList";
import { Footer, Header } from "components/organism";
import { getCars } from "redux/actions/posts";
import Loading from "pages/Loading/Search";
import Card from "./Card";
import SearchBox from "./SearchBox";

function SearchCar() {
  const URL = `https://bootcamp-rent-cars.herokuapp.com/customer/car`;
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [data2, setData] = useState([]);
  const data_api = () => {
    axios.get(URL).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
    data_api();
    dispatch(getCars());
  }, [dispatch]);

  const props = {
    category,
    harga,
    status,
    posts,
    data2,
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <SearchBox {...props} />
      <div className="flex justify-center dark:bg-gray-800 dark:text-white">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:w-4/5 lg:grid-cols-2 xl:grid-cols-3">
          {posts.length > 0 &&
            posts?.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchCar;
