let emps=[{id:101,name:"vinith", email:"vini123@gmail.com" ,sal:42000},
{id:102,name:"vini", email:"vini1234@gmail.com" ,sal:420000},
{id:103,name:"girish", email:"vini12345@gmail.com" ,sal:4200000},
{id:104,name:"giri", email:"vini123456@gmail.com" ,sal:42000000}]
function emp(){
    let rows=""
    for(emp of emps){
        rows=rows+`<tr> 
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.sal}</td>
        </tr>`
    }
    document.getElementById('hh').innerHTML=rows
}
