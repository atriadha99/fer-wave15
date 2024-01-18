import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "components/organism";
import { getCarsById } from "redux/actions/posts";
import { FaUserFriends } from "react-icons/fa";
import { NumberFormats } from "components/atoms/NumberFormats";
import Accordion from "./Accordion";
import SearchBox from "pages/SearchCar/SearchBox";
import Loading from "pages/Loading/Search";
import imgnotfound from "assets/img/img_not_available.png";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(getCarsById(id));
  }, [id, dispatch]);

  const props = [posts];
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <SearchBox {...props} />
      <div className="flex items-center justify-center gap-4 dark:bg-gray-800 dark:text-white">
        <div className="flex w-full flex-col-reverse items-center justify-center lg:w-3/4 lg:flex-row lg:items-start lg:gap-5 lg:px-4">
          <Accordion />
          <div className="mt-0 w-11/12 rounded-md border-2 p-5 lg:w-1/2">
            <div>
              {posts.image ? (
                <img src={posts.image} alt="" className="mx-auto" />
              ) : (
                <img src={imgnotfound} alt="no available" />
              )}
            </div>
            <p className="mt-7 text-2xl font-bold uppercase">{posts.name}</p>
            <p className="mt-1 flex gap-2 font-bold text-gray-400">
              <p className="mt-1">
                <FaUserFriends />
              </p>
              <p>{posts.category}</p>
            </p>

            <div>
              <p className="mt-5 text-gray-500">
                Tentukan lama sewa mobil (max. 7 hari)
              </p>
            </div>

            <div className="mb-14 mt-10 flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold">{NumberFormats(posts.price)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
