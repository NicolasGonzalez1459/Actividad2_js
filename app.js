const in1=document.getElementById("in1");
const btn1=document.getElementById("btn1");
const p1=document.getElementById("p1");

btn1.addEventListener("click",function(){
    if (in1.value==""){
        p1.style.color="red";
        p1.textContent="El campo no puede estar vacío";
    }
    else if(in1.value.length<=3){
        p1.style.color="green";
        p1.textContent="Valido";
    }
    else{
        p1.style.color="red";
        p1.textContent="El campo no puede tener más de 3 caracteres";
    }
});