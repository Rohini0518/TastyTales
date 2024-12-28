import "./index.css";
import Header from "./Components/Header";
import BodyCards from "./Components/BodyCards";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFoundError from "./Components/NotFoundError";
const App = () => {

  return (
    <div className="app mx-4">
      <Header />
     <Outlet/>

     <Routes>
      <Route path="" element={<BodyCards/>}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<NotFoundError/>}></Route>
     </Routes>
    </div>
  );
};

export default App;