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
                <h5 className="card-title">서비스소개</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  죽동에 살면서 근처 상가 정보를 하나씩 정리해보았습니다.
                </p>
                <p className="card-text">
                  직접 다니면서 하나씩 알아보았습니다.
                </p>
                <p className="card-text">
                  오른쪽 위 버튼을 눌러서 카테고리별로 정보를 검색해보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
