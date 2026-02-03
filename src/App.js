import "./index.css";
import Header from "./Components/Header";
import BodyCards from "./Components/BodyCards";
import { Outlet, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import NotFoundError from "./Components/ErrorPage";
import MenuDetails from "./Components/MenuDetails";
import { lazy, Suspense } from "react";

const App = () => {
  const About = lazy(() => import("./Components/About"));
  console.log("app component started")
  // create a chef based food app which gives more respect to chefs as youtube was famous chefs
  return (
    <div className="app mx-4">
      <Header />
      <Outlet />
      <Routes>
        <Route path="" element={<BodyCards />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<h1>fallback for lazyloading</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="menu/:resId" element={<MenuDetails />} />

        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
};

export default App;
