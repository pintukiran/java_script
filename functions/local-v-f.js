let u="kiran"//global variable
let greet=function(a,b){
    let x=10//locsl variable
    console.log(x);
    console.log(a+b);
    return `hello ${u}`
}
let r=greet(30,30)
console.log(r);
