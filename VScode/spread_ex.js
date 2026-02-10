const arr = [1,2,3];
console.log("Original Array: ", arr)//[1,2,3]
//before the spread operation
/*const newArr = [5,6,arr[0],arr[1],arr[2]];
console.log("New array(before spread operation): ",newArr)*/
//after the  spread operation

const newArr1 = [5,6,...arr];

//... -> indicates the spread opearation.

console.log("New Array(after spread operation): ",newArr1)