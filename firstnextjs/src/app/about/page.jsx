import Image from "next/image";
import style from "./about.module.css"

const AboutPage = () =>{
  return   (  


    

    
    <div className={style.container}>
       
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About Abhishek</h2>
        <h1 className={style.title}> The guy who did the things which no one imagine that he is capable of. </h1>
        <p className={style.desc}> let's go follow the in which Abhishek went and based on his foot prints entire universe can get benefit 
          its a wiki page where Abhishek's greatest achievements are being added to let the world aware of his greatest adventure.
        </p>

        <div className={style.boxes}>
          <div className={style.box}>
            <h1>12 k +</h1>
            <p>People Reached</p>
          </div>
       

     
          <div className={style.box}>
            <h1>100 +</h1>
            <p>Contries</p>
          </div>
      

        
          <div className={style.box}>
            <h1>500</h1>
            <p>Organizaions</p>
          </div>
        </div>
        

      </div>

      <div className={style.imgContainer}>
        <Image
        src="/about.png"
        alt="About Image"
        fill
        className={style.img}
        />


      </div>

    </div>

  )
};









export default AboutPage;
