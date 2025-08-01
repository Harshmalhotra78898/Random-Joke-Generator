const jokeContainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn = document.getElementById("btn");

// let getJoke = ()=>{
//     fetch(url)
//         .then(data => data.json())
//         .then(item =>{
//             jokeContainer.textContent = `${item.joke}`;
//         });
// }

// choice is urs can do with async or then chaining 

async function getJoke(){
    const data = await fetch(url);
    const f = await data.json();
    jokeContainer.textContent = `${f.joke}`;
}

btn.addEventListener("click", getJoke);
getJoke();
