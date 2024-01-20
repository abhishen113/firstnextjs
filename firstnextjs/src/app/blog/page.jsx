import { getPosts } from "../../../lib/data";
import PostCard from "../components/postCard/postCard";
import styles from "./blog.module.css"







// const getData = async () =>{

//    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});

//    if(!res.ok){
//       throw new Error("Something went wrong")
//    }

//    return res.json()

// }



const BlogPage = async () => {


   // FETCH DATA FROM API 
   // const posts = await getData()


   // fetch data from local 
   const posts = await getPosts();
   


   return (
      

      <div className={styles.container}>

         {posts.map((post) => 

         <div className={styles.post}  key={post.id}> 
         <PostCard post={post}/>
         </div>

         )}


      </div>

      
       

  



   )
   




}




export default BlogPage;

