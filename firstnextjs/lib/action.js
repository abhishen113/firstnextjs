import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {

    "use server";







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