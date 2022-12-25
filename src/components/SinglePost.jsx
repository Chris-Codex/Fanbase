import React from "react";
import SinglePostDisplay from "./SinglePostDisplay";
import { BsPersonCircle, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";
import { RiProfileLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Categories from "./Categories";

const SinglePost = () => {
  const { categories } = useParams();

  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <div className="col-md-12">
        <SinglePostDisplay categories={categories} />
      </div>
    </>
  );
};

export default SinglePost;
