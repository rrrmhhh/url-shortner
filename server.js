var express = require('express')
var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.set('port', (process.env.PORT || 8080))


app.get('/', function (req, res) {
//   res.send('Hello World!, its me again, and again from nodemon')
    res.render('index', {title: "url Shortener"})
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
