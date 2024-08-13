const index = document.getElementById('index');
const time = document.getElementById('time'),
date = document.getElementById('date'),
message = document.getElementById('message'),
alarmMessage = document.getElementById('alarm-message'),
alarmBtn = document.getElementById('alarmBtn');

let alarmTime = null;

const alarmSound = new Audio('./assets/audio/rooster.wav');

const formatTime = num => num < 10 ? '0' + num : num;

const clockDate = () => {
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    let day = formatTime(now.getDate());
    let month = formatTime(now.getMonth() + 1);
    let year = formatTime(now.getFullYear());

    
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
    if (!index) {
    message.textContent = mensaje;
    }
   
    // Verificar si es la hora de la alarma
    if (alarmTime && hours == alarmTime.hours && minutes == alarmTime.minutes) {
        console.log("¡Es la hora de la alarma!"); 
        alarmMessage.textContent = "¡Es la hora de la alarma!"; // Mostrar mensaje de alarma
        alarmSound.play();
        alarmTime = null; // Detener la alarma después de activarla
    }
};

const setAlarm = () => {
    const alarmHours = parseInt(document.getElementById('alarmHours').value);
    const alarmMinutes = parseInt(document.getElementById('alarmMinutes').value);

    // Formatear la hora y los minutos de la alarma
    alarmTime = {
        hours: alarmHours,
        minutes: alarmMinutes
    };

    alarmMessage.textContent = `Alarma establecida para las ${formatTime(alarmTime.hours)}:${formatTime(alarmTime.minutes)}`;
}

alarmBtn.addEventListener('click', setAlarm);


// Actualizar el reloj cada segundo
setInterval(clockDate, 1000);

clockDate();





