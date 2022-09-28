//A constructor is a special function that creat & initializes on object instance of a class
class emp{
    constructor(ID,NAME,SAL){
    console.log("Constructor executing Automatically");
    this.Id=ID;
   this. Name=NAME;
   this. Sal=SAL;
}
}
let e1=new emp(101,"Kiran",45000)
console.log(e1);
console.log('?????????????????????????????????????')
class emp1{
    constructor(a,b,c){
        this.ID=a;
       this. Name=b;
       this. Sal=c;
    }
}
let r=new emp1(105,"Girish",8000000)
console.log(r);