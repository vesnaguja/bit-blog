import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPost } from "../../services/postService";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { getAuthorName } from "../../services/userService";

export const PostPage = () => {
  let { id } = useParams("id");
  const [post, setPost] = useState({});
  // const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    getPost(id).then((data) => setPost(data));
  }, [id]);

  // useEffect(() => {
  //   let { userId } = useParams();
  //   getAuthorName(userId).then((data) => setAuthorName(data));
  // }, [userId]);

  return (
    <div className="pt-5 mt-5">
      <Container>
        <h1 className="text-center">{post.title}</h1> 

        <p>{post.body}</p>
      </Container>
    </div>
  );
};
