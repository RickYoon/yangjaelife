import React, { useEffect } from "react";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
import "./main.css";
import { Link } from "react-router-dom";
import jukdong from "./jukdong.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faBreadSlice,
  faRunning,
  faChalkboardTeacher,
  faClinicMedical,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="card-group mt-3">
          <div className="card-body">
            <div className="card border">
              <div className="card-body">
                <p className="card-text">
                  죽동에서 살아가면서 필요한 정보를 모아서 정리해봤습니다 ^^ -
                  '21-03-07 updated
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/health" className="main-button">
          <i class="bi bi-shop"></i> {"  "}음식점
        </Link>
        <Link to="/health" className="main-button">
          <FontAwesomeIcon icon={faCoffee} />{" "}
          <FontAwesomeIcon icon={faBreadSlice} />
          {"  "} 카페/빵
        </Link>
        <Link to="/health" className="main-button">
          <FontAwesomeIcon icon={faRunning} />
          {"  "}운동
        </Link>
        <Link to="/health" className="main-button">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          {"   "}학원
        </Link>
        <Link to="/health" className="main-button">
          <FontAwesomeIcon icon={faTshirt} />
          {"   "}생활편의
        </Link>
        <Link to="/health" className="main-button">
          <FontAwesomeIcon icon={faClinicMedical} />
          {"  "}병원
        </Link>
      </div>
    </>
  );
};

export default Home;
