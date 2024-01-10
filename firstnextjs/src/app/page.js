import Image from "next/image";
import style from "./home.module.css"

const Home = () => {






  return (



    <div className={style.container}>


      <div className={style.textContainer}>
        
        <h1 className={style.title}>Abhishek's Mind Palace </h1>
        <p className={style.description}>This Portal is about Great Abhishek who has done so many great things in his life time and those
          things must needed to be documented so Abhishek's follower has created a website dedicated to legandary Abhishek's work.

        </p>

        <div className={style.buttons}>
          <button className={style.button}>Explore</button>
          <button className={style.button}>Contact</button>
        </div>

        <div className={style.brands}>
          <Image src="/brands.png" alt="" fill className={style.brandImg} />
        </div>

      </div>


      <div className={style.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={style.heroImg} />
      </div>

    </div>

  )
};











export default Home;