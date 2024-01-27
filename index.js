// let user=window.prompt("Hey there, Whats Your name?");

// alert(`Hi ${user}`);
let a=document.getElementById("text");
let b=document.getElementById("text1");
let c=document.getElementById("text2");
// a.innerHTML="JS project";

let person={
ages:45,
height:160,
fname:"Mario",
surname:"Javascript"
}

function persons(name, age){

    this.name=name;
    this.age=age; 
    this.dateOfBirth=function(){
        return  2024-this.age;


    };
}
    
let p1=new persons("Manuel", 54);



