const nombre = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
let color1 = document.getElementById("customColor")

form.addEventListener("submit",e=>{
    let warnings = "Hay un campo vacío o invalido";
    parrafo.innerHTML = "";
    if((nombre.value.length <6)|(pass.value.length <8)){
        parrafo.innerHTML = warnings;
        e.preventDefault();
    }
});

color1.addEventListener("input",e=>{
    let petalo = document.getElementById('petalo')
    petalo.style.background = e.target.value;
})