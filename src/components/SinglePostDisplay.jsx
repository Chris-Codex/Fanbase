import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deletePost } from "../features/postSlice/postSlice";

const SinglePostDisplay = ({ categories }) => {
  console.log("ID", categories);
  const dispatch = useDispatch();
  const filteredPost = useSelector((state) => state.post.filteredPost);
  const currentUser = useSelector((state) => state.auth.loggedInUser);
  const currentUserid = currentUser.id;

  console.log("ID", currentUserid);

  console.log("FILTERED POST", filteredPost);

  return (
    <div className="container">
      <div className="grid place-items-center">
        <div className="w-[1200px] grid grid-cols-3 mt-10 py-8">
          {filteredPost.map((posts) => {
            console.log("POST", posts);
            const { id, title, author, description, times } = posts;

            return (
              <>
                <Card
                  style={{ width: "20rem" }}
                  key={id}
                  className="mb-5 gap-5"
                >
                  <Card.Body key={id}>
                    <div className="flex flex-row justify-between mb-2">
                      <p className="text-sm">Author: {author}</p>
                      <p className="text-gray-light text-sm">{times}</p>
                    </div>
                    <div>
                      <p className="font-bold tracking-none ">{title}</p>
                    </div>
                    <Card.Text className="text-sm font-sans">
                      {description}
                    </Card.Text>
                    <div className="flex flex-row gap-3 mt-3">
                      {currentUserid && id === id ? (
                        <>
                          <Link to={`/edit-post/${id}`}>
                            <button className="bg-green w-[70px] h-[35px] text-white">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="bg-black w-[70px] h-[35px] text-white"
                            onClick={() => dispatch(deletePost({ id: id }))}
                          >
                            Delete
                          </button>
                        </>
                      ) : null}
                      <Link to="">Read More</Link>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePostDisplay;
