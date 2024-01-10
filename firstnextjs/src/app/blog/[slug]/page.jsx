import Image from "next/image";
import style from "./singlePost.module.css";



const SingleBlogPage = () => {
   return (




      <div className={style.container}>


         <div className={style.imgContainer}>
            <Image src="https://images.pexels.com/photos/19569670/pexels-photo-19569670/free-photo-of-green-garden-with-pond-near-old-historic-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill
               className={style.img} />

         </div>

         <div className={style.textContainer}>

            <h1 className={style.title}>Title</h1>

            <div className={style.detail}>

               <Image className={style.avatar}
                  src="https://images.pexels.com/photos/19746338/pexels-photo-19746338/free-photo-of-brunette-model-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={50}
                  height={50}
               />

               <div className={style.detailText}>

                  <span className={style.detailTitle}>Author</span>
                  <span className={style.detailValue}>Abhishek shende</span>

               </div>


               <div className={style.detailText}>

                  <span className={style.detailTitle}>Published</span>
                  <span className={style.detailValue}>01.01.2024</span>

               </div>


            </div>

            <div className={style.content}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda repellendus ipsum omnis est deserunt voluptates adipisci optio iure soluta ducimus impedit facere temporibus, aliquid, autem esse dolore laboriosam? Vitae!
            </div>


         </div>

      </div>
   )

}



export default SingleBlogPage;

