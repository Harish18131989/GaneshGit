let a=["mango","banana"];
let b=[...a,"mala vazha", "sevvazha"];
console.log(b);

let s=[1,2,3];
let x=[4,5,6];

console.log(...s,...x);

const person={
    name:"harish",
    age:38
}
const empl=
{
    ...person,
    Company: "TCS"
}
console.log(empl);
console.log(empl.Company);
console.log(empl["Company"]);