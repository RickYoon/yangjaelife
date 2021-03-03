import React, { useEffect } from "react";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";

const Living = () => {
  const arrayK = ["09:00~11:00 (평일)", "09:00~11:00 (주말)"];
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
      <CardContent />
    </div>
  );
};

export default Living;
