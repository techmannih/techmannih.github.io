import { photo } from "../assets";
import styles from "../style";
// import {CbeTBc_6_400x400} from "../assets"

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[190px] h-[200px] rounded-full  p-[2px] cursor-pointer animate `}
    >

<img src={photo} className="mb-14 mt-16  rounded-full" />
    </div>
  );
};

export default GetStarted;
