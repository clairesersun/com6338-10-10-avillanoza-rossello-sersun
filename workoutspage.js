const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')

fetch ('https://api.goprogram.ai/inspiration')
.then(Response => Response.json())
.then (data => {
    console.log(data.quote ,data.author)
    quoteText.textContent = data.quote;
    quoteAuthor.textContent = '-- ' + data.author
})