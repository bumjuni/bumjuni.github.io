const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.\n",
        author: " ─ Oscar Wilde"
    },
    {
        quote: "Nothing is impossible, the word itself says, \'I\'m possible.\n",
        author: " ─ Audrey Hepburn"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.\n",
        author: " ─ Helen Keller"
    },
    {
        quote: "This too shall pass.\n", 
        author: " ─ Et hoc transibit"
    },
    {
        quote: "Turn your wounds into wisdom.\n", 
        author: " ─ Oprah Gail Winfrey"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;