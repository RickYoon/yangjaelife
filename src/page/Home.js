import React, { useEffect } from "react";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
// import axios from "axios";

const Home = () => {
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
    <>
      <div className="container">
        <div className="card-group">
          <div className="card-body">
            <div className="card border">
              <div className="card-body">
                <h5 className="card-title">상가정보</h5>
                <p className="card-text">예미지/칸다빌 아파트 근처 상가 정보</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
