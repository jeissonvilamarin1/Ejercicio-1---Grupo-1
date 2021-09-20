
function capturarDatos(){
    let horasTrabajo = Number(document.getElementById("horas").value);
    let horasExtras = 0;
    let totalAPagar = 0;
    const valorHora = 16000;
    const valorHoraExtra = 20000;
    if(horasTrabajo < 41){
        totalAPagar = (horasTrabajo * valorHora);
        console.log(totalAPagar);
    }else{
        horasExtras = horasTrabajo - 40;
        totalAPagar = (40 * valorHora) + (horasExtras * valorHoraExtra);
    }
    guardarLocalStorage(horasTrabajo, totalAPagar);
    mostrarData();
}
    
let btn = document.getElementById("boton");
btn.addEventListener("click", capturarDatos);

function guardarLocalStorage(horasTrabajo, totalAPagar){
    localStorage.setItem("Horas de trabajo", horasTrabajo);
    localStorage.setItem("Total a pagar", totalAPagar);
};

function mostrarData(){
    let sueldo = localStorage.getItem("Total a pagar");
    total.innerHTML = `
    <h1>Tu sueldo este mes es: $${sueldo}</h1>
    `
}