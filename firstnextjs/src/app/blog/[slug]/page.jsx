import Image from "next/image";
import style from "./singlePost.module.css";
import POSTUSER from "@/app/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "../../../../lib/data";






// FETCH DATA WITH AN API 

const getData = async (slug) => {
   
   const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

   // console.log(res.json().b + " slug");

   if(!res.ok){
      throw new Error("Something went wrong");

   }

return res.json(); 
   }



export const generateMetaData = async ({params}) =>{

   const {slug} = params;
   const post = await getPost(slug);

   return {
      title: post.title,
      description : post.desc,
   };

};




const SingleBlogPage = async ({params}) => {

   const {slug} = params;


   // with api
   // const post = await getData(slug);




   // without api 
   const post = await getPost(slug);
   console.log(post , " abhishek" );




   return (




      <div className={style.container}>


        { post.img && <div className={style.imgContainer}>
            <Image src={post.img} alt="" fill
               className={style.img} />

         </div>}

         <div className={style.textContainer}>

            <h1 className={style.title}>{post.title}</h1>

            <div className={style.detail}>

               

              
               {post && <Suspense fallback={<div> Loading ....</div>} >

             <POSTUSER userId = {post.userId}/>

             </Suspense> 
}
             

               <div className={style.detailText}>

                  <span className={style.detailTitle}>Published</span>
                  <span className={style.detailValue}>{post.createdAt.toString().slice(4,16)}</span>

               </div>


            </div>

            <div className={style.content}>
               {post.desc}
            </div>


         </div>

      </div>
   )

}



export default SingleBlogPage;

