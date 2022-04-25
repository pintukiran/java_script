let student={}
console.log(typeof(student));

console.log("////////////////////////////////////");

let student1={
    I_d:102,
    name:"rajkumar"
}
console.log(student1);

console.log("//////////////////////////");


let student2={
    I_d:102,
    name:"rajkumar"
}
console.log(student2['I_d']);
console.log(student2['name']);

console.log("//////////////////////////////////////////////////////");
let input='name'
let student3={
    name:"kumar",
    tech:"js",
    i_d:104,
    "raj kumar":235
}
console.log(student3['raj kumar']);
console.log(student3[input]);