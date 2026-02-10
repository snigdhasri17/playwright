const arr = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr,...arr2];
console.log("combine arr: ", combined);

//unpack an array of values into function parameters.
function sum(a,b,c){
    return a+b+c;
}
const num = [1,2,3];
const result = sum(...num);
console.log("Result of sum: ",result);