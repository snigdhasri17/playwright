function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject("Data Received");
        },2000);
    });
}
async function ShowData(){
    console.log("Fetching data...");
    const result =  await getData();//waits here
    console.log(result);
    console.log("completed")
console.log("completed123")

}

ShowData();
