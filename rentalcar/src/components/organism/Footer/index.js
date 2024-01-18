/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { navList } from "jsonData/navList";

const Footer = () => {
  const img = [
    "icon_facebook.png",
    "icon_twitter.png",
    "icon_instagram.png",
    "icon_mail.png",
    "icon_twitch.png",
  ];
  return (
    <footer
      id="footer"
      className="flex flex-row justify-center dark:bg-gray-800 dark:text-white"
    >
      <div className="grid w-10/12 grid-cols-1 gap-8 py-20 lg:grid-cols-4 lg:justify-items-center">
        <div className="grid gap-2">
          <div>
            <p className="font-bold">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="my-3 font-bold">patarebenezer_carrental@gmail.com</p>
            <p className="font-bold">081-233-334-808</p>
          </div>
        </div>
        <div className="grid gap-2">
          {navList.map((item) => (
            <Link key={item.id} to={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <p className="font-bold">Connect with us</p>
          <div className="mt-2 flex gap-2">
            {img.map((data) => (
              <Link key={data} to="#">
                <img src={`assets/img/icons/${data}`} alt="" />
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-bold">Copyright Ebenezer 2022</p>
          <img
            src={`assets/img/icons/car-roof-box.png`}
            alt=""
            className="mt-2 flex w-1/3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
