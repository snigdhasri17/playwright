//before the rest operation
const arr = [1,2,3,4,5];

const first = arr[0]; //Extracting the first element
const rest = arr.slice(1); //collecting the rest of the element

console.log("First element: ", first); //1
console.log("Rest of the element:",rest); //[2,3,4,4]

//after the rest operation cons[parts] = [full array]
const [first1,...rest1] = [1,2,3,4,5];
console.log("First element: ",first);
console.log("Rest of the element: ",rest);

//variable number of arguments



function sum(...numbers){
    let total = 0;
    for (let n of numbers){
        total +=n;
    }
    return total;
}

console.log(sum(2,4));
console.log(sum(1,2,3,4));


//ex2:



