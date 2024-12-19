import {NAV_LOGO} from "../utils/constants"
const Header = () => {
    return (
      <div className="flex justify-between m-4 align-center">
        <img
          className="w-[80px] border-bg-success rounded-2"
          src={NAV_LOGO}
          alt="image"
        />
        <div className="flex flex-row align-center gap-4">
          <p className="font-bold">Home</p>
          <p>About US</p>
          <p>Contact Us</p>
          <p>Cart</p>
        </div>
      </div>
    );
  };
  export default Header;