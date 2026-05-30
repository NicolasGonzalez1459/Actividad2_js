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

//Parte 3
const btn4 = document.getElementById("btn4");
const in2 =document.getElementById("in2");
const in3 =document.getElementById("in3");
const p2 =document.getElementById("p2");


btn4.addEventListener("click", function(){
    let num1 = Number(in2.value);
    let num2 = Number(in3.value);
    let bool= sumalo(num1,num2);
    if (bool==true){
        p2.style.color="green";
    p2.textContent = "El resultado de la suma es: " + suma(num1,num2);
    }
    else{ p2.style.color="red";
        p2.textContent = "Error. Los valores ingresados son menores a 0";}
});

function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

function sumalo(num1,num2){
    if (num1<=0 || num2<=0){
        return false;
    }
    else{
        return true;
    }
}

//Extra
const btn5 = document.getElementById("btn5");
const p3 = document.getElementById("p3");

btn5.addEventListener("click", function(){
    let contador = 1;
    let context="";
    while (contador <= 10){
        context+= contador + " ";
        contador++;
    }
    p3.textContent = context;
});