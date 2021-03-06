import React, { useEffect, useState } from "react";
import CardContentHealth from "../components/CardContentHealth";
import Filter from "../components/Filter";
// import axios from "axios";

const Health = () => {
  // const arrayK = ["09:00~11:00 (평일)", "09:00~11:00 (주말)"];
  // const [info, setInfo] = useState([]);

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
      <CardContentHealth />
    </div>
  );
};

export default Health;
