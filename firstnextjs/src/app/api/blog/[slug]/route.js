import { connect } from "mongoose"
import { connectToDb } from "../../../../../lib/utils"
import { Post } from "../../../../../lib/models";
import { NextResponse } from "next/server";




export const GET = async (request,{params})=> {


    const {slug} = params;
    console.log(params, slug , {slug});



    try {
        
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {

        console.log(error);
        console.log("error  " + error);
        
    }

};


export const DELETE = async (request,{params})=> {


    const {slug} = params;
    console.log(params, slug , {slug});



    try {
        
        connectToDb();
        const post = await Post.deleteOne({slug});
        return NextResponse.json("Post Deleted !");
    } catch (error) {

        console.log(error);
        
    }

}