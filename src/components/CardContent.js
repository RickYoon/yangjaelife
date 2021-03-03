import React from "react";
// import Card from "../components/Card";

const CardContent = (props) => {
  return (
    <div className="card m-2 border">
      <div className="row g-0">
        <div className="card-body">
          <h5 className="card-title">한전아트센터수영장</h5>
          <h6 class="card-subtitle mb-2 text-muted">수영장</h6>
          <p className="card-text m-0">
            위치: 서울 서초구 서초2동 효령로72길 60{" "}
          </p>
          <p className="card-text m-0">전화번호: 02-2055-1331</p>
          <p className="card-text m-0">자유수영: 6,500원</p>
          <p className="card-text m-0">자유수영 시간 </p>
          <p className="card-text m-0">(평일) : 12:00~13:50</p>
          <p className="card-text m-0">(토요일) 14-15:50, 17-18:50</p>
          <p className="card-text m-0">(일요일) 9-11, 12-14, 15-16:50</p>
          <p className="card-text m-0">강습정보: 홈페이지 링크</p>
          <p className="card-text">
            <small className="text-muted"> 2021.03.02 updated</small>
          </p>
        </div>
      </div>
    </div>
  );
};

// const CardContent = (props) => {
//   const { title, category, location, operationtime, detail, updated } = props;
//   console.log(operationtime);
//   return (
//     <div className="card m-2 border">
//       <div className="row g-0">
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">{category}</h6>
//           <p className="card-text m-0">위치 : {location}</p>
//           {operationtime.map((content, index) => (
//             <p className="card-text m-0">운영시간 : {content}</p>
//           ))}
//           <p className="card-text m-0">상세정보 : {detail}</p>
//           <p className="card-text">
//             <small className="text-muted">{updated} updated</small>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

/* <CardContent
title="주공테니스"
category="테니스"
location="115동 옆 테니스장."
operationtime="115동 옆 테니스장."
detail="010-4444-4444 문의"
updated="2021.03.02"
/> */

export default CardContent;
