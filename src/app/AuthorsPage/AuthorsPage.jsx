import React, { useState, useEffect } from "react";
import { ListGroup, Container } from "react-bootstrap";
import { getAuthors } from "../../services/userService";
import {Author} from "../Author/Author";

export const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors()
    .then(authorsData => {
      setAuthors(authorsData);
    })
    
  }, [])

  return (
    <>
    <h1 className="pt-5 mt-5 text-center">AUTHORS</h1>
    <ListGroup variant="flush">
        <Container>
          {authors.map((author) => (
            <Author author={author} key={author.id} />
          ))}
        </Container>
      </ListGroup>
    
    </>
    
  )
}
