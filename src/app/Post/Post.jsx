import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import {capitalFirstLetter} from "../../shared/functions.js";
import {shortenPostBody} from "../../shared/functions.js";


export const Post = (props) => {
  return (
    <ListGroup.Item className="border-0 border-bottom">
      <Link className="text-decoration-none" to={`/posts/${props.post.id}`}>
        <h3 className="d-inline-block text-dark">
          {capitalFirstLetter(`${props.post.title}`)}
        </h3>
      </Link>
      <p>{shortenPostBody(`${props.post.body}`)}</p>
    </ListGroup.Item>
  );
};



