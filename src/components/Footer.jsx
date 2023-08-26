import { useState } from "react";
import { coding } from "../assets";
import { socialMedia } from "../constants";
import styles from "../style";
import { db } from "./Firebase";
 

function Footer(){
 const [Username, setUserName]=useState("")
 const [Email, setEmail]=useState("")
 const [conMessage, setConMessage]=useState("");
 
 const handleSubmit=(e)=>{
  e.preventDefault();
  db.collection("Contacts").add({
    Username:Username,
    Email:Email,
    conMessage:conMessage,

  })
  .then(()=>{
    alert("Message has been sent ")
  })
  .catch((error)=>{
    alert(error.message)
  })

  setUserName('');
  setEmail('');
  setConMessage('');

 }
  return(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start md:mr-10 mt-6">
        <img
          src={coding}
          alt="coding"
          className="object-contain mt-12 rounded-xl"
        />
      </div>

      


<div className="flex flex-col mx-8">

  <h1 className="font-bold text-[40px] text-center text-gradient">Get in touch</h1>
  <div className="flex flex-col justify-between mt-10 items-center">

<form action="" className="flex flex-col gap-2 items-center text-white" onSubmit={handleSubmit}>

  <div className="flex flex-col xs:flex-row justify-between gap-2 xs:gap-4 items-center">

    <input type="text" placeholder="Username" className="rounded-2xl w-[120%] xs:w-full h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white" 
    value={Username}
    onChange={(e)=>setUserName(e.target.value)} required/>
    <input type="text" placeholder="Email" className="rounded-2xl w-[120%] xs:w-full h-[60px] pl-10 bg-transparent border-[2px] placeholder:text-white border-white"
    value={Email}
    onChange={(e)=>setEmail(e.target.value)} required  />

  </div>
  <input type="text" placeholder="message" className="rounded-2xl h-[150px] w-[120%] xs:w-full pl-10 bg-transparent border-[2px] placeholder:text-white border-white" 
  value={conMessage}
  onChange={(e)=>setConMessage(e.target.value)} required/>
  <div className="flex flex-col xs:flex-row items-center gap-4 w-full px-2">
    <button className="bg-white text-black w-[150px] rounded-md h-[50px] hover:duration-200 hover:-translate-y-1 hover:scale-110" type="submit" value="send">Send</button>
    <div className="mt-3"></div>
  </div>
</form>

  </div>
</div>



    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      <strong> Copyright Ⓒ 2023</strong>. <h1 className="font-bold text-[20px] text-center text-gradient"><strong>Made by Manish Chaudhary.</strong>  </h1>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)}

export default Footer;
