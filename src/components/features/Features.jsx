import React, { useState, useEffect } from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useFetch from "../../Hooks/useFetch";

export default function Features() {
  // const [features, setFeatures] = useState([]);

  // useEffect(async () => {
  //   await fetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/features.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFeatures(Object.entries(data));
  //     });
  // },[]);

  const {features,isPending} = useFetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/features.json")

  return (
    <div className="features">
      {isPending && <h1>{isPending}</h1>}
      {features.map((feature) => (
        <div className="featureItem">
          <span className="featureTitle">{feature[1].featureTitle}</span>
          <div className="featureContainer">
            <span className="featureRate">
              {feature[1].featureRate < 0 ? (
                <ArrowDownwardIcon className="featureIcon negative" />
              ) : (
                <ArrowUpwardIcon className="featureIcon" />
              )}
              {feature[1].featureRate}
            </span>
            <span className="featureMoney">$ {feature[1].featureMoney}</span>
          </div>
          <span className="featureSub"> {feature[1].featureSub}</span>
        </div>
      ))}

      {/* <ArrowDownwardIcon className="featureIcon negative" /> */}
      {/* <div className="featureItem">
        <span className="featureTitle">فروش</span>
        <div className="featureContainer">
          <span className="featureRate">
            <ArrowDownwardIcon className="featureIcon negative" /> -11.4{" "}
          </span>
          <span className="featureMoney">$ 2000</span>
        </div>
        <span className="featureSub">مقایسه آخرین ماه</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">هزینه</span>
        <div className="featureContainer">
          <span className="featureRate">
            <ArrowUpwardIcon className="featureIcon " /> -11.4{" "}
          </span>
          <span className="featureMoney">$ 2000</span>
        </div>
        <span className="featureSub">مقایسه آخرین ماه</span>
      </div> */}
    </div>
  );
}
