//Parte 1
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

//Parte 2
const categorias = ["Accion", "Aventura", "Comedia", "Drama", "Fantasia", "Terror"];
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const ul1 = document.getElementById("ul1");

btn2.addEventListener("click", function(){
    for (let i = 0; i < categorias.length; i++){
        ul1.innerHTML += "<li>" + categorias[i] + "</li>";
    }
});

btn3.addEventListener("click", function(){
    for (let i=0; i<3; i++){
        ul1.innerHTML += "<li>" + categorias[i] + "</li>";
    }
});