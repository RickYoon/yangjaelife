import React, { useEffect, useState } from "react";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
// import axios from "axios";

const Food = () => {
  // const arrayK = ["09:00~11:00 (평일)", "09:00~11:00 (주말)"];
  const [info, setInfo] = useState([]);

  // const loadInfos = async () => {
  //   await axios({
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
  //     //   url: `https://nxqs16xalf.execute-api.ap-northeast-2.amazonaws.com/default/sgMarket?cat=1`,
  //   }).then((res) => {
  //     // let result = [];
  //     // for (var i in res.data[0]) result.push(i, res.data[0][i]);
  //     // console.log(result);
  //     // setInfo(result);
  //     console.log(res.data[0]);
  //     // result.push([i, json_data [i]]);
  //   });
  //   // return result.data;
  //   // console.log(result);
  //   // setInfo(result.data);
  //   // console.log(info);
  // };
  // useEffect(() => {
  //   // loadInfos();
  // }, []);

  return (
    <div className="container">
      {/* <Filter /> */}
      {/* {info.map((inf, index) => (
        <div>{[Object.keys(inf)]}</div>
      ))} */}

      {/* {info.map((inf, index) => (
        <Card key={index} title={inf.title}></Card>
      ))} */}
      {/* <CardContent />
       */}
      <div className="card m-3 border" style={{ backgroundColor: "white" }}>
        <div className="card-body">
          <h5 className="card-title">효모로</h5>
          <h6 class="card-subtitle mb-2 text-muted">반찬가게</h6>
          <p className="card-text m-0">위치: 예미지 상가 1층 </p>
          <p className="card-text m-0">전화번호: 02-343-2400</p>
          <p className="card-text m-0">(평일) : 12:00~13:50</p>
          <p className="card-text m-0">(토요일) 14-15:50, 17-18:50</p>
          <p className="card-text">
            <small className="text-muted"> 2021.03.06 updated</small>
          </p>
        </div>
      </div>
      <div className="card m-3 border" style={{ backgroundColor: "white" }}>
        <div className="card-body">
          <h5 className="card-title">맘스터치</h5>
          <h6 class="card-subtitle mb-2 text-muted">반찬가게</h6>
          <p className="card-text m-0">위치: 예미지 상가 1층 </p>
          <p className="card-text m-0">전화번호: 02-343-2400</p>
          <p className="card-text m-0">(평일) : 12:00~13:50</p>
          <p className="card-text m-0">(토요일) 14-15:50, 17-18:50</p>
          <p className="card-text">
            <small className="text-muted"> 2021.03.06 updated</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food;
