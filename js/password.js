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
