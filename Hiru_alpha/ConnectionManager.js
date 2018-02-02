module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["hiru"] = {
        host: process.env.EndPoint_hiru,
        port: 3306,
        user: "hiru",
        password: "12345678",
        database: "test",
    };
    
    };