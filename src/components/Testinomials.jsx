// import React from "react";
import { feedback, statss } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
     

{statss.map((stat) => (
  <>
        <div className="flex-row flex-wrap sm:mb-20 mb-6 animate-pulse text-center"
      
        >
          <h1 className="font-poppins font-normal xs:text-[50px] text-[25px] xs:leading-[36px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </h1>
        </div>
        </>
        ))}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
