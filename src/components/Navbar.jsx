import React from "react";
import { Button } from "react-bootstrap";
import { FaConfluence } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.loggedInUser);

  console.log("nav", user);

  const userLogout = () => {
    if (logout) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex justify-around bg-black w-full h-[60px]">
        <div className="flex flex-row justify-center items-center">
          <Link to="/home">
            <h4 className="flex gap-2 text-gray-light justify-center font-serif font-bold text-3xl">
              <FaConfluence /> FANBASE
            </h4>
          </Link>
        </div>
        <div className="flex flex-row justify-around font-extralight text-gray-light list-none cursor-pointer items-center w-[500px]">
          <Link to="/Home" className="cursor-pointer">
            <li>Home</li>
          </Link>
          <li>About</li>
          <Link to="/create-post">
            <li>Create Post</li>
          </Link>
          <p>Welcome: {user.username}</p>
          <Button variant="primary" onClick={userLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
