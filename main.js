let btn = document.querySelector(".btn");
let advice = document.querySelector(".advice");

let url = "https://api.adviceslip.com/advice";

btn.onclick = () =>  {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let formated = `“${data.slip['advice']}”`;
            advice.innerHTML = formated;
        })
        .catch(error => {
            console.error(error);
        });
}

