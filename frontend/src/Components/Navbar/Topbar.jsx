import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/images.png";
const Topbar = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const { user } = useSelector((state) => state?.auth);

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  const handleMenuOpne = (event) => {
    navigate(`/employee/view-employee/${user._id}`);
  };

  const handleMenuOptionClick = (option) => {
    // const clickedOn = option.target.innerText;
    // if (clickedOn === "Delete") {
    //   setIsDeleteMopen(true);
    //   setOpenMenu(null);
    // }
    // if (clickedOn === "Edit") {
    //   navigate("/trending/update-trend", { state: { data: data[1] } });
    //   setOpenMenu(null);
    // }
    // setOpenMenu(null);
  };

  const onChangeHandler = (e) => {
    // dispatch(getGlobalSearchStr(e.target.value));
  };

  const location = useLocation();

  return (
    <div
      className="bg-white flex justify-between items-center shadow py-3 px-6 sticky top-0"
      style={{ zIndex: 99 }}
    >
      <div className="container w-full flex justify-between items-center gap-4 py-2">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="" className=" w-20 " />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
