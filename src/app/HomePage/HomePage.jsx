import React, { useState, useEffect } from "react";

import { ListGroup, Container } from "react-bootstrap";
import { getPosts } from "../../services/postService";
import { Post } from "../Post/Post";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <>
      <h1 className="pt-5 mt-5 text-center">POSTS</h1>
      <ListGroup variant="flush">
        <Container>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Container>
      </ListGroup>
    </>
  );
};
