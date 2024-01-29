import { connect } from "mongoose"
import { connectToDb } from "../../../../lib/utils"
import { Post } from "../../../../lib/models";
import { NextResponse } from "next/server";


export const GET = async ()=> {






    try {
        
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {

        console.log(error);
        
    }

}