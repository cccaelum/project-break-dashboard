// Reloj 
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

// Tiempo

// Contraseña

const generatePassword = () => {
    const length = document.getElementById('length').value;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";

    // Recoge un caracter de cada tipo
    let password = [
        upperCase[Math.floor(Math.random() * upperCase.length)],
        lowerCase[Math.floor(Math.random() * lowerCase.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];

    // Combina todos caracteres que debe tener la contraseña
    const allCharacters = upperCase + lowerCase + numbers + symbols;

    // Genera aleatoriamente los caracteres necesarios para la longitud deseada
    for (let i = password.length; i < length; i++) {
        password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }

    document.getElementById('passwordResult').textContent = password.join('');

}

// Enlaces


