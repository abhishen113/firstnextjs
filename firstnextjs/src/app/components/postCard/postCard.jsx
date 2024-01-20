
import Image from "next/image"
import style from "./postCard.module.css"
import Link from "next/link"







const PostCard = ({post}) => {

  return (

    <div className={style.container}>

      
     <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src="https://images.pexels.com/photos/327393/pexels-photo-327393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className={style.img} alt="" fill  />
        </div>
        <span className={style.date}> 01.01.2024 </span>


      </div> 
 
      <div className={style.buttom} >
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}> {post.body}</p>
        <Link className={style.link} href={ `/blog/${post.id}` }>READ MORE</Link>

      </div>


    </div>


  );
};

export default PostCard