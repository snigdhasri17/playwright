//Asynchronous example
//It dosen't wait for others
console.log("Start")
setTimeout(()=>
{
    for(let i=0;i<5;i++)
    console.log("Asynchronous ")
},10)
console.log("end")

//Synchronous 
//it  waits for others

console.log("Start")

for(i=1;i<4;i++){
    console.log("Synchronous")
}
console.log("End")

