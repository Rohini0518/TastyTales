import { Link } from "react-router-dom";
import {NAV_LOGO} from "../utils/constants"
import logo from "../utils/tt.jpeg"
const div = () => {
    return (
      
        <div className="p-2">
	<div className="container flex justify-between h-16 mx-auto">
      <img
          className="w-[80px] border-bg-success rounded-2"
          src={logo}
          alt="image"/>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
      <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
			</li>
			<li className="flex">
      <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About Us</Link>
			</li>
			<li className="flex">
      <Link to="/contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact US</Link>
			</li>
			<li className="flex">
      <Link to="/shimmer" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Cart</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded bg-orange-600 text-gray-50">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</div>
        
      
    );
  };
  export default div;