import { Link } from "react-router-dom";
import {NAV_LOGO} from "../utils/constants"
const Header = () => {
    return (
      <div className="flex justify-between m-4 align-center text-xl">
        <img
          className="w-[80px] border-bg-success rounded-2"
          src={NAV_LOGO}
          alt="image"
        />
        <div className="flex flex-row align-center gap-4">
          <p className="font-bold"><Link to="/">Home</Link></p>
          <p><Link to="/about">About US</Link></p>
          <p><Link to="/contact">Contact Us</Link></p>
          <p>Cart</p>
        </div>
      </div>
    );
  };
  export default Header;