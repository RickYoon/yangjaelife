import React from "react";
// import Card from "../components/Card";

const Card = (props) => {
  return (
    <div className="card m-2 bg-light border">
      <div className="row g-0">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.hash}</h6>
          <p className="card-text">{props.content}</p>
          <p className="card-text">
            <small className="text-muted">{props.updated} updated</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
