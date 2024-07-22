const time = document.getElementById('time'),
date = document.getElementById('date'),
message = document.getElementById('message')

const formatTime = num => num < 10 ? '0' + num : num;

const clockDate = () => {
    let now = new Date();
    hours = formatTime(now.getHours());
    minutes = formatTime(now.getMinutes());
    seconds = formatTime(now.getSeconds());
    day = formatTime(now.getDate());
    month = formatTime(now.getMonth() + 1);
    year = formatTime(now.getFullYear());

    
    time.textContent = `${hours}:${minutes}:${seconds}`;
    date.textContent = `${day}/${month}/${year}`;

    let mensaje = '';
    if (hours >= 0 && hours <= 7) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hours >= 7 && hours <= 12) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hours >= 12 && hours <= 14) {
        mensaje = "Echa un rato más pero no olvides comer";
    } else if (hours >= 14 && hours <= 16) {
        mensaje = "Espero que hayas comido";
    } else if (hours >= 16 && hours <= 18) {
        mensaje = "Buenas tardes, el último empujón";
    } else if (hours >= 18 && hours <= 22) {
        mensaje = "Esto ya son horas extras, ...piensa en parar pronto";
    } else {
        mensaje = "Buenas noches, es hora de pensar en parar y descansar";
    }

    message.textContent = mensaje;
};

// Actualizar el reloj cada segundo
setInterval(clockDate, 1000);

clockDate();



