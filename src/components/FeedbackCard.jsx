// // import { NavLink } from "react-router-dom";
// import { quotes } from "../assets";
// // import { feedback } from "../constants";
// const FeedbackCard = () => (
//   <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    
//     {/* <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
//       {content}
//     </p> */}

//     {/* <div className="flex flex-row"> */}
//       {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
//       <div className="flex flex-col justify-center items-center ">
//       <img
//       src={quotes}
//       alt="double_quotes"
//       className="w-[100px] h-[100px] object-contain"
//     />
//         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
//           {name}
//         </h4>
//         {/* <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
//           {title}
//         </p> */}

// <button className=" mt-4 rounded-md transition text-white border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[100px] h-[40px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"> Live</button>

// <button className=" mt-4 rounded-md transition text-white border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[100px] h-[40px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"   >    Code</button>
//       </div>
//     </div>
//   // </div>
// );

// export default FeedbackCard;
import { quotes } from "../assets";

const FeedbackCard = ({ Code, name, img ,Live }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] text-center items-center max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={img}
      alt="double_quotes"
      className="w-[100px] h-[100px] object-contain"
    />
    {/* <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p> */}

    <div className="flex flex-row">
      {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
      <div className="flex flex-col ml-4 items-center">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        {/* <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p> */}

<button className=" mt-4 rounded-md transition text-white border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[100px] h-[40px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
onClick={() => window.open(Live)}
>Live</button>
<button className=" mt-4 rounded-md transition text-white border-white border-[2px] font-semibold hover:bg-white hover:text-black w-[100px] h-[40px] ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
onClick={() => window.open(Code)}
>Code</button>
      </div>
    </div>
  </div>
);

export default FeedbackCard;