import { Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Section } from "../Section/Section";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

            <button className="home"><Link to='/' element={<Home />}>home</Link></button>

            <button className="Mystery"><Link to='/Section/Mystery' element={<Section/>}>Mystery</Link></button>

            <button className="Technology"><Link to='/Section/Technology' element={<Section/>}>Technology</Link></button>

            <button className="Mythology"><Link to='/Section/Mythology' element={<Section/>}>Mythology</Link></button>

            <button className="history"><Link to='/Section/history' element={<Section/>}>history</Link></button>


      </div>
    </>
  );
};
