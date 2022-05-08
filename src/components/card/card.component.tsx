import { Monster } from "../../App";
import "./card.style.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email, username, phone, address } = monster;

  return (
    <div key={id} className="card-container">
      <img
        className="card-container"
        id={id}
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p>
        latitude: {address.geo.lat}
        <br />
        longitude: {address.geo.lng}
      </p>
    </div>
  );
};

export default Card;
