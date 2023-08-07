const mysql2=require('mysql2');
myconnection=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'shivba@100',
    database:'employeedb'
})
myconnection.connect((err)=>{
    if(err){
        console.log("Error in server")
    }
    else{
        console.log("Connected successfully");
    }
})

module.exports=myconnection;
