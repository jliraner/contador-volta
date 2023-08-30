const daysX = document.getElementById('days');
const hoursX = document.getElementById('horas');
const minutesX = document.getElementById('minutos');
const secondsX = document.getElementById('segundos');

const bdate = "20 Jan 2024"

function contador(){

    const DataAniversario = new Date(bdate);
    const DataAtual = new Date();
    
    //Data em miliseegundos

    const tempo = (DataAniversario - DataAtual)/1000;

    const days = Math.floor(tempo/3600/24);
    const horas = Math.floor(tempo/3600) % 24;
    const minutos = Math.floor(tempo/60) % 60;
    const segundos = Math.floor(tempo) % 60;

    daysX.innerHTML = days;
    hoursX.innerHTML = horas;
    minutesX.innerHTML = minutos;
    secondsX.innerHTML = segundos;


    console.log(days)


}


contador();

setInterval(contador, 1000);



