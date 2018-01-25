var number  = require('./lib/number.js')
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000)


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
	for(var name in req.headers)
		console.info('head: '+name+req.headers[name])
	res.render('home')
})

app.get('/about', (req, res)=>{
	res.render('about', { number: number.getNumber() })
})

app.use((req, res)=>{
	res.status(404);
	res.render('404');
})

app.use((err, req, res, next)=>{
	res.status(500);
	res.render('500');
})

app.listen(app.get('port'), ()=>{
	console.log('app up on http://localhost:3000')
})