const express = require('express')
const app = express()
app.use(express.urlencoded())

const server = require('http').Server(app);
server.listen(80);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/translate', (req, res) => {
    res.send(
        "<strong>Translation: </strong> " + translatePigLatin(req.body['text']) +
        "<br /><hr /> <a href='/'>Translate another</a>"
    )
})

function translatePigLatin(text) {
    return text.split(' ').map(function(word) {
        return word.substring(1) + word.substring(0,1)
    }).join(' ').toLowerCase()
}