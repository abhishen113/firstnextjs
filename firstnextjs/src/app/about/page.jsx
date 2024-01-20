import Image from "next/image";
import style from "./about.module.css"







export const metadata = {
  title: 'About Page ',
  description: 'About description',
}




const AboutPage = () =>{
  return   (  


    

    
    <div className={style.container}>
       
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About Beyond Imagination</h2>
        <h1 className={style.title}> We create digital ideas that are bigger , bolder , braver and better. </h1>
        <p className={style.desc}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo pariatur esse impedit dolorum.
         Distinctio culpa similique tempora itaque deleniti, quo pariatur blanditiis, asperiores corporis nostrum, quos eos. Modi, ipsa!
        </p>

        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 +</h1>
            <p>Year of Experience</p>
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
