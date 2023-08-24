import { stats } from "../constants";
import styles from "../style";

// import React from "react";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} `}
    >
      {stats.map((stat) => (
        <>
        <div className="flex-row flex-wrap  animate-pulse"
          
        >
          <h1 className="font-poppins font-normal xs:text-[50px] text-[25px] xs:leading-[36px] leading-[21px] text-gradient uppercase ml-3 ">
            {stat.title}
          </h1>
        </div>
        </>
      ))}
    </section>
  );
};

export default Stats;
