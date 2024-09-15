import { Link } from "react-router-dom";
import logo from "../../assets/images/images.png";
const Topbar = () => {
  return (
    <div
      className="bg-gradient-to-r from-rose-50 to-rose-50 flex justify-between items-center  py-3 px-6 sticky top-0"
      style={{ zIndex: 99 }}
    >
      <div className="container w-full flex justify-between items-center gap-4 py-2">
        <Link to={"/"} className="flex gap-3 items-center">
          <img src={logo} alt="" className=" w-20 " />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
