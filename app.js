var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', require('pug').renderFile);
app.set('view engine', 'pug');

app.get('*', function(req, res) {
    res.render('index.html');
});

app.listen(3000, function() {
    console.log("[JB] -> app.linten start port: 3000");
});