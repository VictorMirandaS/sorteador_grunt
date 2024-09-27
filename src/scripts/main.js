document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const resultDiv = document.getElementById('result'); 

    generateButton.addEventListener('click', function() {
        const maxNumber = document.getElementById('maxNumber').value;

        if (!maxNumber || maxNumber < 1) {
            resultDiv.textContent = 'Por favor, insira um número válido!';
            return;
        }

        const randomNumber = getRandomNumber(maxNumber);
        resultDiv.textContent = `Número aleatório gerado: ${randomNumber}`;
    });

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max) + 1;
    }
});

