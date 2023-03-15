    fetch('https://icanhazdadjoke.com/slack')
//fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })