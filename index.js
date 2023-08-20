const URL = " https://api.thecatapi.com/v1/images/search"
const catButton = document.getElementById("cat-button")

catButton.addEventListener("click", changeFoto, false);

window.onload = changeFoto;

function changeFoto(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector("img");
        img.src = data[0].url;

        data[0].url
    })
}