function add(){
   let name= document.getElementById("abc").value
   let possword=document.getElementById("cba").value 
    //alert("okieokie")
    if(name==""){
        document.getElementById("userMessage").innerHTML="Plz Enter user Name"
    }
    else
        if(name.length<=5){
            document.getElementById("userMessage").innerHTML="User Nmae must be 6 char"

    }
   
    if(possword==""){
        document.getElementById("userPossword").innerHTML="plz Enter possword"
    }
    else
    if(possword.length<8){
        document.getElementById("userPossword").innerHTML="possword must be 6 character"
    }
    return false
}
