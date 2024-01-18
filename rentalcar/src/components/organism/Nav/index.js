/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Banner } from "components/organism";
import DarkMode from "components/moleculs/DarkMode";
import "./style.css";
import { NavLogo } from "components/moleculs";
import Svg from "./Svg";
// import { List } from "components/atoms";

const Nav = (props) => {
  const { id } = useParams();
  const { navList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const activeLink =
    "flex flex-col text-blue-600 dark:text-white dark:bg-gray-800 px-4 mt-2 bg-gray-50 w-full rounded-lg py-2 font-semibold";
  const normalLink =
    "flex flex-col gap-4 px-4 mt-4 hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg";
  return (
    <>
      <div className="flex justify-center dark:bg-gray-700">
        <div className="flex w-11/12 flex-col justify-between lg:flex-row">
          <div className="flex items-center justify-between border-b border-slate-100 p-4 lg:border-b-0 lg:py-4">
            <NavLogo />
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block text-gray-800 focus:outline-none lg:hidden"
              >
                <Svg
                  className={"h-7 w-7 dark:text-white"}
                  d={"M4 6h16M4 12h16M4 18h16"}
                  isOpen={isOpen}
                />
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between lg:flex lg:flex-row lg:py-0`}
          >
            <div
              className={`${
                isOpen
                  ? "fixed inset-y-0 right-0  z-50 float-right h-screen w-8/12 bg-white dark:bg-blue-900"
                  : ""
              } flex flex-col lg:flex-row`}
            >
              <div className="flex flex-row-reverse items-baseline justify-between p-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-gray-800 focus:outline-none lg:hidden"
                >
                  <Svg
                    className={"mr-5 mt-5 h-7 w-7 dark:text-white"}
                    d={"M6 18L18 6M6 6l12 12"}
                  />
                </button>
                <div className="w-full items-center dark:text-white lg:flex lg:gap-5 lg:py-6 lg:px-0 lg:text-gray-500 xl:px-28">
                  <Link
                    to="/"
                    className={`${
                      isOpen
                        ? "block uppercase hover:underline dark:text-white"
                        : "hidden"
                    } block px-4 py-3 font-bold text-slate-500 hover:text-black lg:py-4 `}
                  >
                    ebenezer
                  </Link>

                  {/* <List /> */}
                  {navList.map((item) => (
                    <NavLink
                      to={item.href}
                      key={item.id}
                      className={
                        isOpen
                          ? ({ isActive }) =>
                              isActive ? activeLink : normalLink
                          : "hover:underline dark:hover:text-gray-300 lg:hover:text-black "
                      }
                    >
                      <p>{item.name}</p>
                    </NavLink>
                  ))}
                  <DarkMode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!id ? <Banner /> : ""}
    </>
  );
};

export default Nav;
