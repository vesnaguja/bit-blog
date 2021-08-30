import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { getAuthor } from "../../services/userService";
import { getPhoto } from "../../services/photoService";

export const AuthorPage = () => {
  let { userId } = useParams("userId");

  const [author, setAuthor] = useState([]);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    getAuthor(userId).then((authorData) => setAuthor(authorData));
    getPhoto(userId).then((photoData) => setPhoto(photoData));
  }, [userId]);

  return (
    <Container className="pt-5 mt-5">
      <div className="border-3 border-bottom d-flex justify-content-around pb-3">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="ps-5">
          <h3>{author.name}</h3>
          <p className="m-0 fs-5">username: {author.username}</p>
          <p className="m-0 fs-5">email: {author.email}</p>
          <p className="m-0 fs-5">phone: {author.phone}</p>
        </div>
      </div>

      <div className="border-3 border-bottom d-flex justify-content-around py-3">
        <div className="">
          <h3>Address</h3>
          <p className="m-0 fs-5">street: {author.address?.street}</p>
          <p className="m-0 fs-5">city: {author.address?.city}</p>
          <p className="m-0 fs-5">zipcode: {author.address?.zipcode}</p>
          <p className="m-0 fs-5">lat: {author.address?.geo?.lat}</p>
          <p className="m-0 fs-5">lng: {author.address?.geo?.lng}</p>
        </div>
        <div className="ps-5">
          <iframe
            width="200px"
            height="200px"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title={author.address?.street}
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${author.address?.geo?.lat},${author.address?.geo?.lng}&z=15&output=embed`}
          />
        </div>
      </div>

      <div className="border-3 border-bottom d-flex justify-content-around pt-3 pb-5 mb-5">
        <div>
          <h3>Company</h3>
          <p className="m-0 fs-5">name: {author.company?.name}</p>
          <p className="m-0 fs-5">slogan: {author.company?.catchPhrase}</p>
        </div>
        <div className="ps-5 ms-5"></div>
      </div>
    </Container>
  );
};
