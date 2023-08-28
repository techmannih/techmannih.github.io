import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="Home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
    
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >

        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-white  leading-[75px]">
            Hey there! <br className="sm:block hidden" />{" "}
            <span className="text-gradient">I'm Manish Chaudhary</span>{" "}
          </h3>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A buiding enthusiastic Full Stack Developer, passionate about Javascript development. Seeking to advance a grownig tech career as a Software Development Engineer in a competitive environment.
        </p>
        <button className=" mt-4 rounded-md transition text-white border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[100px] h-[40px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Resume</button>
      </div>
      

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
