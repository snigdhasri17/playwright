const person = {
    firstName : "Sowmya",
    LastName : "Pokuri",
    Age : 20,
    fullName :function(){
        return this.firstName +  " " +this.LastName;
    }
    
};
console.log(person.fullName());
console.log(person.Age);