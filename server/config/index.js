exports = module.exports = function(app) {

    console.log("process.env.name === ",process.env.name);
    console.log("process.env.NODE_ENV === ",process.env.NODE_ENV);
    console.log("process.env.mongodburl === ",process.env.mongodburl);
    console.log("process.env.cloud_name === ",process.env.cloud_name);
    console.log("process.env.api_key === ",process.env.api_key);
    console.log("process.env.api_secret=== ",process.env.api_secret);
    console.log("process.env.authy_api_key === ",process.env.authy_api_key);
    console.log("process.env.showLogs === ",process.env.showLogs);
    console.log("process.env.crosDomains === ",process.env.crosDomains);
    
    if(process.env.NODE_ENV=='production'){
        app.set("mongodb-url",process.env.mongodburl);
        app.set("cloud_name",process.env.cloud_name);
        app.set("api_key",process.env.api_key);
        app.set("api_secret",process.env.api_secret);
        app.set("authy_api_key",process.env.authy_api_key);
        app.set("showLogs",process.env.showLogs);
        app.set("crosDomains",process.env.crosDomains);
    }
    else {
        //app.set("mongodb-url",'"mongodb://localhost:27017/PIAIC');
        app.set("mongodb-url","mongodb://piaicuser:piaic_1234@ds133152.mlab.com:33152/piaic-dev");
    
        //cloudinary Stroage Credentials  
        app.set("cloud_name",'dgtzrxfyd');
        app.set("api_key",'893115935379578');
        app.set("api_secret",'lWY5FkcFfahA-oaU8KFwD2buQDY');
        app.set("authy_api_key",'7OY1Yp5wcEjkEQfHO1hsAg8nlzx8X3gi');
        app.set("showLogs",true);
        app.set("crosDomains",'http://localhost:3000');
    }

}