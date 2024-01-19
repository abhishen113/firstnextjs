
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

        <span className={style.title}>Author</span>
        <span className={style.username}>{user.username}</span>

     </div>
    )
}








export default POSTUSER;