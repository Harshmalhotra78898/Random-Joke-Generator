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

// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";
// const btn = document.getElementById("btn");
// const jokeContainer = document.querySelector("p"); // Select the <p> tag to show jokes
//
// // Async function version
// async function getJoke() {
//     const response = await fetch(url);        // Wait until fetch resolves
//     const data = await response.json();       // Wait until JSON conversion
//     jokeContainer.textContent = data.joke || `${data.setup} - ${data.delivery}`;
//     // Some jokes are "twopart" (setup & delivery), so we handle both cases.
// }

async function getJoke(){
    const data = await fetch(url);
    const f = await data.json();
    jokeContainer.textContent = `${f.joke}`;
}

btn.addEventListener("click", getJoke);
getJoke(); // Fetch a joke immediately on page load

//
// const jokeContainer = document.getElementById("joke");
// const url="";
// const btn = document.getElementById("btn");
//
// async function getJoke(){
//     const  data =  await fetch(url);
//     const f = await data.json();
//     const final = `${f.joke}`;
// }
// btn.addEventListener("click",getJoke);
// getJoke();