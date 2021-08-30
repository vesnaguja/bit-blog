import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPost } from "../../services/postService";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuthorName } from "../../services/userService";
import { getMorePosts } from "../../services/userService";
import { capitalFirstLetter } from "../../shared/functions.js";

export const PostPage = () => {
  let { id } = useParams("id");

  const [post, setPost] = useState({});
  const [authorName, setAuthorName] = useState("");
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    getPost(id)
      .then((postData) => {
        setPost(postData);
        return postData.userId;
      })
      .then((userId) => {
        // author name
        getAuthorName(userId).then((authorData) => {
          setAuthorName(authorData);
        });

        // 3 more posts
        getMorePosts(userId).then((postsArr) => {
          setMorePosts(postsArr);
        });
      });
  }, [id]);

  return (
    <div className="pt-5 mt-5">
      <Container>
        <h1 className="text-center">{capitalFirstLetter(`${post.title}`)}</h1>
        <div className="d-flex justify-content-center pt-2 pb-5">
          <Link className="text-decoration-none" to={`/authors/${post.userId}`}>
            <h3>{authorName}</h3>
          </Link>
        </div>
        <p className="pb-3 border-bottom border-3">{capitalFirstLetter(`${post.body}.`)}</p>

        <div>
          <h5 className="pb-3">3 more posts from same author</h5>
          {morePosts.map((morePost) => {
            return (
              <Link className="text-decoration-none" to={`/posts/${morePost.id}`}>
                <p>{morePost.title}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

