function flipCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    const button = document.getElementById('flipButton');

    button.disabled = true;
    coin.classList.remove('animate');
    resultText.textContent = "";

    const randomNumber = Math.floor(Math.random() * 2);
    coin.classList.add('animate');

    setTimeout(function () {
        if (randomNumber === 0) {
            coin.classList.remove('tails');
            resultText.textContent = "Cara";
        } else {
            coin.classList.add('tails');
            resultText.textContent = "Coroa";
        }

        coin.classList.remove('animate');
        button.disabled = false;
    }, 2000);
}

document.getElementById('flipButton').addEventListener('click', flipCoin);
