
import Image from "next/image";
import { getUser } from "../../../../lib/data";
import style from "./postUser.module.css"








// const getData = async (userId) =>{

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` , {cache: "no-store"});

//     if (!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }



 

const POSTUSER = async ({userId}) =>{

    // const user = await getData(userId);


    const user = await getUser(userId);

    return (



        <div className={style.container}> 

       <Image className={style.avatar}
                  src={user.img ? user.img : "/noavatar.png"} 
                  alt=""
                  width={50}
                  height={50}
               />


        <div className={style.text}>
        <span className={style.title}>Author</span>
        <span className={style.username}>{user.username}</span>

        </div>

     </div>
    )
}








export default POSTUSER;