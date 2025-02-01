let btn = document.querySelector('#newquote');
let person = document.querySelector('.Name');
let quote = document.querySelector('.quotes');

const quotes = [{
    quote :`"Your time is limited, so don't waste it living someone else's life."`,
    person : `Steve Jobs`
},
{
    quote :`I have not failed. I've just found 10,000 ways that won't work.`,
    person :`Thomas Edison`
},
{
    quote :`Be water, my friend.`,
    person:`Bruce Lee`
},
{
    quote :`Knowing is not enough, we must apply. Willing is not enough, we must do.`,
    person:`Bruce Lee`
},
{
    quote:`Absorb what is useful, discard what is not, add what is uniquely your own.`,
    person:`Bruce Lee`

},
{
    quote :`The successful warrior is the average man, with laser-like focus.`,
    person:`Bruce Lee`
},
{
    quote :`It always seems impossible until it's done.`,
    person:`Nelson Mandela`
},
{
    quote :`Success is the sum of small efforts, repeated day in and day out.`,
    person: `Robert Collier`
}, ];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

});