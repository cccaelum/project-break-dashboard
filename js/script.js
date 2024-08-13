const time = document.getElementById('time'),
date = document.getElementById('date');

const formatTime = num => num < 10 ? '0' + num : num;

const clockDate = () => {
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    let day = formatTime(now.getDate());
    let month = formatTime(now.getMonth() + 1);
    let year = formatTime(now.getFullYear());

    if (index) {
        time.textContent = `${hours}:${minutes}:${seconds}`;
        date.textContent = `${day}/${month}/${year}`;
    }
    
}

// Actualizar el reloj cada segundo
setInterval(clockDate, 1000);

clockDate();

