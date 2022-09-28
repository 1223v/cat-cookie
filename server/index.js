'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
var cors = require('cors');

let Hyun_sik = { admin: 'C4tpc00ki3_super_Secret_Password' }; //I can't show you my password -1223v-
let cats = {};
let flag = "2022_HolyShield_CTF{C4T_PR0T0_C00KI3s_v3ry_Yummy}";

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
	res.send('You are not Hyun_sik');
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
	let catcookie = req.cookies;
	console.log(req.body);
	/*
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
		} else {
			cats[catcookie.idx][catcookie.id] = catcookie.password;
		}
		*/
	res.send(catcookie);
});



app.post('/idx', function (req, res) {
	cats[req.body.idx] = {};
	res.send(req.body.idx + ' idx add');
});

app.listen(port, () => console.log(`listen on 5000`));