import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export const Author = (props) => {
  return (
    <ListGroup.Item className="border-0 border-bottom">
      <Link className="text-decoration-none" to={`/authors/${props.author.id}`}>
        <h3 className="d-inline-block text-dark">{props.author.name}</h3>
      </Link>     
    </ListGroup.Item>
  );
};
