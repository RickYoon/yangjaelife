import React from "react";
// import Card from "../components/Card";

const CardContent = (props) => {
  const { title, category, location, operationtime, detail, updated } = props;
  return (
    <div className="card m-2 border">
      <div className="row g-0">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{category}</h6>
          <p className="card-text m-0">위치 : {location}</p>
          <p className="card-text m-0">운영시간 : {operationtime}</p>
          <p className="card-text m-0">상세정보 : {detail}</p>
          <p className="card-text">
            <small className="text-muted">{updated} updated</small>
          </p>
        </div>
      </div>
    </div>
  );
};

/* <CardContent
title="주공테니스"
category="테니스"
location="115동 옆 테니스장."
operationtime="115동 옆 테니스장."
detail="010-4444-4444 문의"
updated="2021.03.02"
/> */

export default CardContent;
