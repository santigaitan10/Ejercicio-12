function relojdigital(){
    let horaactual = new Date();
    let hora = horaactual.getHours();
    let min = horaactual.getMinutes();
    let seg = horaactual.getSeconds();

    hora = (hora < 10) ? "0" + hora : hora;
    min = (min < 10) ? "0" + min : min;
    seg = (seg < 10) ? "0" + seg : seg;
    

    let horareal = hora + ":" + min + ":" + seg;
    document.getElementById("reloj").innerHTML = horareal;
    document.getElementById("reloj").textContent = horareal;
    setTimeout(relojdigital, 1000)
}

relojdigital();

