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
            <div
              className="card border"
              style={{ maxWidth: "20rem", marginTop: "1rem" }}
            >
              <div className="card-body text-success">
                <h5 className="card-title">상가정보</h5>
                <p
                  className="card-text"
                  style={{ width: "20rem", height: "20px" }}
                >
                  죽동예미지, 칸다빌 아파트 근처 상가 정보
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card border" style={{ maxWidth: "20rem" }}>
              <div className="card-body text-success">
                <h5 className="card-title">운동정보</h5>
                <p
                  className="card-text"
                  style={{ width: "20rem", height: "20px" }}
                >
                  근처 수영장, 골프, 테니스, 축구장 정보
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card border" style={{ maxWidth: "20rem" }}>
              <div className="card-body text-success">
                <h5 className="card-title">학원정보</h5>
                <p
                  className="card-text"
                  style={{ width: "20rem", height: "20px" }}
                >
                  초, 중, 고등학생, 성인을 위한 근처 학원
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card border" style={{ maxWidth: "20rem" }}>
              <div className="card-body text-success">
                <h5 className="card-title">근교정보</h5>
                <p
                  className="card-text"
                  style={{ width: "20rem", height: "20px" }}
                >
                  죽동 밖 맛집, 카페, 놀러갈 만한 곳
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
