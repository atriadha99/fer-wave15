import { Link } from "react-router-dom";
const Links = ({ name_link, href }) => {
  return (
    <Link to={href} className={`mt-4 flex flex-col px-4`}>
      {name_link}
    </Link>
  );
};

export default Links;
