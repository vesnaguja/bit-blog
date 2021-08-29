import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPost } from "../../services/postService";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuthorName } from "../../services/userService";

export const PostPage = () => {
  let { id } = useParams("id");

  const [post, setPost] = useState({});
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    getPost(id)
      .then((postData) => {
        setPost(postData);
        return postData.userId;
      })
      .then((userId) => getAuthorName(userId).then((authorData) => setAuthorName(authorData)));
  }, [id]);

  return (
    <div className="pt-5 mt-5">
      <Container>
        <h1 className="text-center">{post.title}</h1>
        <div className="d-flex justify-content-center pt-2 pb-5">
          <Link className="text-decoration-none text-dark" to={`/users/${post.userId}`}>
            <h3>{authorName}</h3>
          </Link>
        </div>
        <p>{post.body}</p>
      </Container>
    </div>
  );
};
