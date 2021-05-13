import React from "react";

import "./Card.css";

function Card(props) {
  return (
    <div className={`card card__${props.mode}`}>
      <div className="card__image">
        <img src={props.flag} alt={`${props.name} Flag`} />
      </div>
      <div className="card__body">
        <h5>{props.name}</h5>
        <p>
          <span className="bolder">인구: </span>
          {props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
        <p>
          <span className="bolder">지역: </span>
          {props.region}
        </p>
        <p>
          <span className="bolder">수도: </span>
          {props.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
