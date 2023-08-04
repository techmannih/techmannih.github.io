import {
    bootstrap,
    css3,
    expresjs,
    html,
    java,
    javascript,
    materialui,
    mongodb,
    nodejs,
    react,
    redux,
    tailwind,
} from "../assets";
import { features } from "../constants";
import { layout } from "../style";
  const FeatureCard = ({ icon, title, content, index }) => (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
          {title}
        </h4>
      </div>
    </div>
  );
  
  const Business = () => (
    <section id="skills" className={layout.sect}>
      
      <div className="flex flex-col xs:flex-row flex-wrap flex-1 justify-between gap-4 xs:gap-8 items-center text-white py-4">
        <div className="flex flex-row gap-10 mx-auto ">
          <img src={html} alt="9"  className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          <img src={css3} alt="9"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={bootstrap} alt="0"  className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
  
        </div>
        <div className="flex flex-row gap-10 mx-auto">
          <img src={tailwind} alt="6"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          <img src={javascript} alt="3"  className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={react} alt="8"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          
        </div><div className="flex flex-row gap-10 mx-auto">
          <img src={redux} alt="00"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          <img src={materialui} alt="8u"  className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={nodejs} alt="--"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          
        </div>
        <div className="flex flex-row gap-10 mx-auto">
          <img src={mongodb} alt="00"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={java} alt="8u"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          <img src={expresjs} alt="--"   className="w-[50px] sm:w-[100px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"/>
          
        </div>
      </div>
    </section>
  );
  
  export default Business;
 