
const {default : mongoose} = require("mongoose");






const connection = {};

export const connectToDb = async () =>{


 
    try{

        if ( connection.isConnected){
            console.log("using existing connection");
            console.log(connection.connectToDb + "  abhishek ");  
            return;
        }
        
        const db =  await mongoose.connect('mongodb+srv://abhishek:abhishek@cluster0.i5tqlvr.mongodb.net/firstNextJs?retryWrites=true&w=majority');
        connection.connectToDb = db.connections[0].readyState; 
    } catch (error){
        console.log(error + "  error on db conn");
      
    }


}