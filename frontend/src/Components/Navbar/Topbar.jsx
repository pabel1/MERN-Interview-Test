import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/images.png";
import Button from "../Shared/Buttons/Button";
const Topbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div
      className=" bg-gradient-to-r from-track-white  to-track-white  flex justify-between items-center  py-3 px-6 sticky top-0 shadow-sm"
      style={{ zIndex: 99 }}
    >
      <div className="container w-full flex justify-between items-center gap-4 py-2">
        <Link to={"/"} className="flex gap-3 items-center">
          <img src={logo} alt="" className=" w-20 " />
        </Link>

        <div
          className={`${
            pathname === "/" ? "hidden" : "flex"
          } items-center justify-center gap-4`}
        >
          <Button
            className={
              "bg-gradient-to-r from-rose-200 to-rose-300 text-black font-semibold text-lg w-fit px-8 py-3 items-center  hover:bg-transparent hover:border-rose-200 "
            }
            href="/start-draw"
          >
            Start Draw
          </Button>
          <Button
            className={
              "bg-transparent  text-black font-semibold text-lg w-fit px-8 py-3 items-center hover:rose-200 hover:rose-300  border-2 border-rose-200"
            }
            href="/all-draws"
          >
            See All Draw
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
