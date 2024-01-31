"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";


export const addPost = async (formData) => {








    const {title, desc , slug , userId} = Object.fromEntries(formData);

    try {

        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        
        await newPost.save();
        console.log("saved to Db");

        revalidatePath("/blog");

    } catch (error) {

        console.log(error);
        return {error : "something went wrong"};
        
    }
    

};




export const handleGithubLogin = async() =>{
   
    await signIn("github");
   };
  
export const handleLogout = async() =>{
 
   
    await signOut();
};
  






export const register = async (formData) => {

    const {username, email , password ,img,  passwordRepeat} = Object.fromEntries(formData);

    if(password !== passwordRepeat) {return "Password does not match"};

    try {

        connectToDb();

        const user = await User.findOne({username});

        if (user){
            console.log("user is there " + user);
            return "Username already exists";
        }

        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
                username,
                email,
                password: hashedPassword,
                img
        });


        await newUser.save();
        console.log("saved to db");
        
    } catch (error) {
        console.log(error);
        return { error : "something went wrong"};
        
    }
     

}