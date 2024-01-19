
//temp data

const users = [
    {id:1 , name : "abhishek"},
    {id:2 , name : "ram"}
]




const posts = [

    {id:1 , title: "post 1" , body : "..........." , userId : 1 },
    {id:1 , title: "post 2" , body : "..........." , userId : 1 },
    {id:1 , title: "post 3" , body : "..........." , userId : 2 },
    {id:1 , title: "post 4" , body : "..........." , userId : 2 },
]

export const getPosts = async () => {

    return posts;
}


export const getPost = async (id) =>{

    return posts.find( (post) => post.id === parseInt(id) );

}


export const getUser = async (id) =>{ 

    return users.find( (user) => user.id === parseInt(id) );
}