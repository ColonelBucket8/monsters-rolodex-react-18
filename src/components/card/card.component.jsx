import "./card.style.css";

const Card = (props) => {
  const {
    monster: { id, name, email },
  } = props;

  return (
    <div key={id} className="card-container">
      <img
        className="card-container"
        id={id}
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
