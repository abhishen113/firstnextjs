
//temp data

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const users = [
//     {id:1 , name : "abhishek"},
//     {id:2 , name : "ram"}
// ]




// const posts = [

//     {id:1 , title: "post 1" , body : "..........." , userId : 1 },
//     {id:1 , title: "post 2" , body : "..........." , userId : 1 },
//     {id:1 , title: "post 3" , body : "..........." , userId : 2 },
//     {id:1 , title: "post 4" , body : "..........." , userId : 2 },
// ]

export const getPosts = async () => {


    try {

        connectToDb();
        const posts = await Post.find();

        console.log(posts);
       
        return posts;

    } catch (error) {
        
        console.log(error + " error");
    }

   
};


export const getPost = async (slug) =>{

    try {

        connectToDb();
        const post = await Post.findOne({slug});
        
        return post;
        
    } catch (error) {

        console.log(error);
        
    }

};


export const getUser = async (id) =>{ 
    try {
        
        connectToDb();
        const user = await User.findById(id);
        console.log(user + " get User");
        return user;
    } catch (error) {
        
        console.log(error);
    }
   
};

export const getUsers = async () =>{ 
   

    try {

        connectToDb()
        const users = await User.find();
        return users;
        
    } catch (error) {

        
        console.log(error);
    }


};