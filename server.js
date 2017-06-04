const express = require('express');
const fs=require('fs');
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
var app=express();
const port=process.env.PORT || 3000;
app.set('view engine','hbs');
app.use((request,response,next)=>{

    var now=new Date().getFullYear();
    log=(`${now} : ${request.method}  ${request.url}`);
    console.log(log);
    fs.appendFile('server.log',log,(err)=>{
        if(err){
            console.log('unable to load file');
        }
        
    });
    next();
  /*  response.render('home',{
         pageTitle:'Smartchip Technologies',
         pageHeader:'Smartchip Technologies',
         welcomeMessage:'Welcome to Smartchip Technologies',
         currentYear: new Date().getFullYear()


     });*/
});
//app.use(express.static(__dirname+'/public'));
 app.get('/',(request,response)=>{
     response.render('home',{
         pageTitle:'Smartchip Technologies',
         pageHeader:'Smartchip Technologies',
         welcomeMessage:'Welcome to Smartchip Technologies',
         currentYear: new Date().getFullYear()


     });
    
    // response.send({
    //     name:'satish kumar K V',
    //     address:{
    //         street:'santhapet',
    //         city:'nellore'
    //     }
    // });
 });
 app.get('/about',(request,response)=>{
     response.render('about',{
        pageTitle:'Smartchip Tehcnologies',
        pageHeader:'About Page',
        currentYear:new Date().getFullYear()

     });
   // response.send('About Smartchip Technologies');
 });
 app.get('/bad',(request,response)=>{
    response.send({
        
            error:'Unable to  Process the Request'
        });
   
 });
 app.listen(port,()=>{
     console.log(`Server Listening On port ${port}`);
 });