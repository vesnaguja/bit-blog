import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export const Post = (props) => {
  console.log(props);
  return (
    <Link className="text-decoration-none" to={`/${props.post.id}`}>
      <ListGroup.Item className="border-0 border-bottom">
        <h2>Title {props.post.id}</h2>
        <p>{props.post.body[0].toUpperCase() + props.post.body.slice(1, 140).trim() + "..."}</p>
      </ListGroup.Item>
    </Link>
  );
};
