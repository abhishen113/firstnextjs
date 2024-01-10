
import Image from "next/image"
import style from "./postCard.module.css"
import Link from "next/link"







const PostCard = () => {

  return (

    <div className={style.container}>

      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image className={style.img} src="https://images.pexels.com/photos/327393/pexels-photo-327393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
        </div>
        <span className={style.date}> 01.01.2024 </span>

      </div>
      <div className={style.buttom} >
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis, nihil totam natus itaque ratione incidunt cumque eaque voluptatem eos, molestiae illo dolorum corporis voluptates blanditiis veniam illum optio nisi.</p>
        <Link className={style.link} href="/blog/post">READ MORE</Link>

      </div>


    </div>


  )
}

export default PostCard