import React, { useEffect } from "react";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
// import axios from "axios";

const Development = () => {
  //   const [info, setInfo] = useState([]);

  //   const loadInfos = async () => {
  //     await axios({
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
  //       //   url: `https://nxqs16xalf.execute-api.ap-northeast-2.amazonaws.com/default/sgMarket?cat=1`,
  //     }).then((res) => {
  //       setInfo(res.data);
  //       console.log(res.data);
  //     });
  //     // return result.data;
  //     // console.log(result);
  //     // setInfo(result.data);
  //     // console.log(info);
  //   };

  useEffect(() => {
    // loadInfos();
  }, []);

  return (
    <div className="container">
      <Filter />
      {/* 
      {info.map((inf, index) => (
        <Card key={index} title={inf.title}></Card>
      ))} */}
      <CardContent
        title="주공1차재개발정보"
        category="테니스"
        location="115동 옆 테니스장"
        operationtime="오전 9:00~10:00"
        detail="010-4444-4444 문의"
        updated="2021.03.02"
      />
      <CardContent
        title="주공테니스"
        category="테니스"
        location="115동 옆 테니스장"
        operationtime="오전 9:00~10:00"
        detail="010-4444-4444 문의"
        updated="2021.03.02"
      />
    </div>
  );
};

export default Development;
