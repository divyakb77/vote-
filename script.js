
function vote(){

    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;

    if(age>=18){
        alert("Eligible for vote");
   }
    else{
         alert("still child");
    }
}