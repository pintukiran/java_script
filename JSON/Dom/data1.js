let emps=[{"id":1,"first_name":"Vinnie","email":"vjunkison0@dailymotion.com","email":"vjunkison0@dailymotion.com"},
{"id":2,"first_name":"Lezlie","email":"lhurford1@usda.gov","email":"lhurford1@usda.gov"},
{"id":3,"first_name":"Misty","email":"mdowdeswell2@cornell.edu,","email":"mdowdeswell2@cornell.edu,"},
{"id":4,"first_name":"Lynea","email":"llorand3@epa.gov","email":"llorand3@epa.gov"},
{"id":5,"first_name":"Halley","email":"hfranchyonok4@nyu.edu"},
{"id":6,"first_name":"Xylina","email":"xfeighry5@dailymail.co.uk"},
{"id":7,"first_name":"Orson","email":"oflett6@spotify.com"},
{"id":8,"first_name":"Glyn","email":"ghaydn7@friendfeed.com"},
{"id":9,"first_name":"Robbyn","email":"rwalkington8@topsy.com"},
{"id":10,"first_name":"Adena","email":"agreenless9@abc.net.au"},
]
function emp(){
    let rows=""
    for(emp of emps){
        rows=rows+`<tr> 
        <td>${emp.id}</td>
        <td>${emp.first_name}</td>
        <td>${emp.email}</td>
        <td>${emp.email.split("@")[1]}</td>
        
        </tr>`
    }
    document.getElementById('hh').innerHTML=rows
}
