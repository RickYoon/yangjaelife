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
            <div className="card border-success" style={{ maxWidth: "20rem" }}>
              <div className="card-body text-success">
                <h5 className="card-title">식당정보</h5>
                <p
                  className="card-text"
                  style={{ width: "20rem", height: "50px" }}
                >
                  한식, 중식, 양식, 분석,
                </p>
              </div>
              <div className="card-footer bg-transparent border-success">
                상세보기 >>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card border-success" style={{ maxWidth: "20rem" }}>
              <div className="card-body text-success">
                <h5 className="card-title">식당정보</h5>
                <p
                  className="card-text"
                  style={{ height: "50px", color: "white" }}
                >
                  양재 헬스, 테니스, 골프, 필라테스, 수영장, 암벽등반, 산책로,
                  요가
                </p>
              </div>
              <div className="card-footer bg-transparent border-success">
                상세보기 >>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text" style={{ height: "50px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer bg-transparent border-success">
                Footer
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer bg-transparent border-success">
                Footer
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-footer bg-transparent border-success">
                Footer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
