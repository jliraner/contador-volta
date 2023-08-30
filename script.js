const daysX = document.getElementById('days');
const hoursX = document.getElementById('hours');
const minutesX = document.getElementById('minutes');
const secondsX = document.getElementById('seconds');

const bdate = "16 Sep 2023"

function contador(){

    const DataAniversario = new Date(bdate);
    const DataAtual = new Date();
    
    //Data em miliseegundos

    const tempo = (DataAniversario - DataAtual)/1000;

    const days = Math.floor(tempo/3600/24);
    const hours = Math.floor(tempo/3600) % 24;
    const minutes = Math.floor(tempo/60) % 60;
    const seconds = Math.floor(tempo) % 60;

    daysX.innerHTML = days;
    hoursX.innerHTML = hours;
    minutesX.innerHTML = minutes;
    secondsX.innerHTML = seconds;


    console.log(days)
}


contador();

setInterval(contador, 1000);




