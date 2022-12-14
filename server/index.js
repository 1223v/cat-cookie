'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
var cors = require('cors');

let Hyun_sik = { admin: 'I can not show your my password' }; //I can't show you my password -1223v-
let cats = {};
let flag = "I can not show your my flag";

app.use(
  cors({
    origin: true, // '*' 안됨 -> 정확한 주소 또는 origin: true로 해도 됨
    credentials: true,
  }),
);
//app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.get('/hello',(req,res)=>{
	res.send('hello world');
});

app.post('/admin', function (req, res) {
	for (var id in Hyun_sik) {
		if (Hyun_sik[id] == req.body.password) {
			
			res.send(flag);
			
		}
	}
	res.send('You are not Admin');
});

app.post('/login', function (req, res) {
	for (var id in cats) {
		if (cats[id] == req.body.password) {
			
			res.send(true);
			
		}
	}
	res.send('You are not user');
});

app.post('/registered', function (req, res) {
	let catcookie = req.cookies.catookie;
	console.log(req.body);
	console.log(catcookie);
	if(req.body.idx != "user"){
		res.send(false);
	}
	try {
		let catkie_crumbs = (catcookie || '').split('.');
		let big_catkie = catkie_crumbs[0],
			medium_catkie = catkie_crumbs[1],
			small_catkie = catkie_crumbs[2];

		big_catkie = Buffer.from(big_catkie, 'base64').toString('utf8');
		medium_catkie = Buffer.from(medium_catkie, 'base64').toString('utf8');

		big_catkie = JSON.parse(big_catkie);
		medium_catkie = JSON.parse(medium_catkie);
		big_catkie = JSON.stringify(big_catkie, null, 4);
		medium_catkie = JSON.stringify(medium_catkie, null, 4);

		catcookie = {
			header: big_catkie,
		};
		catcookie.body = medium_catkie;
		catcookie.signature = small_catkie;

		
	} catch (error) {
		if (typeof catcookie === 'object') {
			catcookie.error = error;
		} else {
			catcookie = {
				error: error,
			};
		}
	}
	
	if (catcookie.body) {
			const origin_catcookie = JSON.parse(catcookie.body);
			if(catcookie.body.id === req.body.id || catcookie.body.password === req.body.password){
				res.send(false);
			}
			cats[catcookie.body.id] = {};
			cats[catcookie.body.id][origin_catcookie.id] = origin_catcookie.password;
			res.send(true);
		} else {
			cats[catcookie.idx][catcookie.id] = catcookie.password;
			res.send(true);
		}
		
	
});




app.listen(port, () => console.log(`listen on 5000`));
