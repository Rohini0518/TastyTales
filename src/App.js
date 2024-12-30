import "./index.css";
import Header from "./Components/Header";
import BodyCards from "./Components/BodyCards";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFoundError from "./Components/NotFoundError";
import MenuDetails from "./Components/MenuDetails";
import ShimmerUI from "./Components/ShimmerUI";
const App = () => {

  // create a chef based food app which gives more respect to chefs as youtube was famous chefs
  return (
    <div className="app mx-4">
      <Header />
     <Outlet/>

     <Routes>
      <Route path="" element={<BodyCards/>}/>
      <Route path="about" element={<MenuDetails />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="shimmer" element={<ShimmerUI />}/>
      <Route path="*" element={<NotFoundError/>}/>
     </Routes>
    </div>
  );
};

export default App;