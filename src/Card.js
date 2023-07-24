import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div className="tc bg-light-green dib br3 pa3 bw2 grow shadow5">
        <h2>J{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
