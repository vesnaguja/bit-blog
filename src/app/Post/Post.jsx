import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export const Post = (props) => {
  return (
    <ListGroup.Item className="border-0 border-bottom">
      <Link className="text-decoration-none" to={`/posts/${props.post.id}`}>
        <h3 className="d-inline-block text-dark">
          {props.post.title[0].toUpperCase() + props.post.title.slice(1, props.post.title.length)}
        </h3>
      </Link>
      <p>{props.post.body[0].toUpperCase() + props.post.body.slice(1, 140).trim() + "..."}</p>
    </ListGroup.Item>
  );
};



