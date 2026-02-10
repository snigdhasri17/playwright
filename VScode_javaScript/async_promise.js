//Asynchronous funtion with promise == to wait 

let mypromise = new Promise((resolve, reject)=>
{
    //Simulate an asynchonous operation
    setTimeout(()=>{
        // or false to simulate failure
        const success = true;//false;
        if(success){
            resolve("Operation Sucessful!");//fulfulls the 
        }
        else{
            reject(new Error("Operation Failed"))//reject the 
        }
    },1000);
});
mypromise
.then((result)=>{
    console.log(result)//Logs Operation Sucessfull
})
.catch((error)=>{
    console.error(error.message);//Logs operation failure
})
//always settled either its failure or sucess
.finally(()=>{
    console.log("promise setteled (completed)"); 
   
});
