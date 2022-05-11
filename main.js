// elements
const quoteText = document.querySelector('.quoteText');
const author = document.querySelector('.author');
const generateButton = document.querySelector('.generate');
// fetch the random quote
function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log("Clicked");
        quoteText.innerText = result.content;
        author.innerText = result.author;
    })
}

//click to generate quote
generateButton.addEventListener('click', () => {
    randomQuote();
})