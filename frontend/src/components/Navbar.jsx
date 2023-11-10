import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logo">♣</div>
         <div className="link">
            <Link className="links" to="/?cat=art">
               Art
            </Link>
            <Link className="links" to="/">
               Science
            </Link>
            <Link className="links" to="/">
               Technology
            </Link>
            <Link className="links" to="/">
               Design
            </Link>
            <Link className="links" to="/">
               Food
            </Link>
            <div className="userDetails">
               <span>John</span>
               <Link to="/login">Login</Link>
               <Link to="/">Logout</Link>
            </div>
            <Link to="/write" className="write">
               Write
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
