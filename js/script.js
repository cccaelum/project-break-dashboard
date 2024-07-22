// Reloj sin frase
const time = document.getElementById('time'),
date = document.getElementById('date');

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
};

setInterval(clockDate, 1000);

clockDate();

