{
    //block
    let y = 10;
    const x = 20;
    {
        //nest block
        let y = 6;
        console.log(y);
    }
    console.log(y);
}

let person = { //this is an object
    name: "Gian",
    age: 93,
    favFood: "baos",
    fun: function(){ //this is a method, unique to objects
        console.log("yay");
    }
}

person.fun();



document.getElementById("herramientas-ropa").onclick = function(){
    document.getElementById("herramientas").style.display = "none";
    document.getElementById("inside-ropa").style.display = "flex";
}

document.getElementById("ribbon").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "flex";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "none";
    document.getElementById("sinUsar-ribbon-azul").style.display = "none";
    document.getElementById("sinUsar-ribbon-gold").style.display = "none";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "none";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "none";
}

document.getElementById("ribbon-aqua").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "none";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "flex";
    document.getElementById("sinUsar-ribbon-azul").style.display = "none";
    document.getElementById("sinUsar-ribbon-gold").style.display = "none";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "none";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "none";
}

document.getElementById("ribbon-azul").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "none";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "none";
    document.getElementById("sinUsar-ribbon-azul").style.display = "flex";
    document.getElementById("sinUsar-ribbon-gold").style.display = "none";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "none";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "none";
}

document.getElementById("ribbon-gold").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "none";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "none";
    document.getElementById("sinUsar-ribbon-azul").style.display = "none";
    document.getElementById("sinUsar-ribbon-gold").style.display = "flex";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "none";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "none";
}

document.getElementById("ribbon-naranja").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "none";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "none";
    document.getElementById("sinUsar-ribbon-azul").style.display = "none";
    document.getElementById("sinUsar-ribbon-gold").style.display = "none";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "flex";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "none";
}
document.getElementById("ribbon-violeta").onclick = function(){
    document.getElementById("sinUsar-ribbon-rojo").style.display = "none";
    document.getElementById("sinUsar-ribbon-aqua").style.display = "none";
    document.getElementById("sinUsar-ribbon-azul").style.display = "none";
    document.getElementById("sinUsar-ribbon-gold").style.display = "none";
    document.getElementById("sinUsar-ribbon-naranja").style.display = "none";
    document.getElementById("sinUsar-ribbon-violeta").style.display = "flex";
}


/*


document.getElementById("button").onclick = function(){
    document.getElementById("gift").innerHTML = "Gracias por compartir tu direccion! Estaremos enviando tu regalo a la brevedad.";
    document.getElementById("button").style.display = "none";
}




(function(){
    //IIFE -- puedo escribir todo aca para no tener conflicto con window // ESTO ES MAS ANTIGUO
    var age = 5;
    
})();*/


// var direccion = prompt();
// alert(direccion);
// console.log(direccion); //esto lo escribe en el inspector de chrome

