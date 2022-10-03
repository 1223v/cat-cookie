import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const navigate = useNavigate();
	const sign = require('jwt-encode');
	const secret = 'secret';

	useEffect(() => {
		Axios.get('http://localhost:5000/hello').then((response) => {
			console.log(response.data);
		});
	}, []);
	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};
	
	function sleep(ms,data) {
		
		const jwt = sign(data, secret);
		document.cookie = `catookie=${jwt}; path=/;`;
		
  return new Promise(resolve => setTimeout(resolve, ms));
}


	const onSubmitHandler = async(event) => {
		event.preventDefault();
		let body = {
			idx: 'user',
			id: Email,
			password: Password,
		};

		let data = {
			id: Email,
			password: Password,
			idx: 'user',
		};
		
		await sleep(1000,data);
		
		Axios.post('http://localhost:5000/registered', body, { withCredentials: true }).then((response) => {
			if (response.data) {
				navigate('/');
				console.log(response.data);
				alert('등록 성공');
			} else {
				alert('다시 확인해주세요');
			}
		});
			
	};

	return (
		<form className="wrap" onSubmit={onSubmitHandler}>
			<div className="login">
				<h2>Sign-up</h2>
				<div className="login_sns">
					<li>
						<a href="">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="fab fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
				</div>
				<div className="login_id">
					<h4>E-mail</h4>
					<input
						type="email"
						value={Email}
						onChange={onEmailHandler}
						placeholder="Email"
					/>
				</div>
				<div className="login_pw">
					<h4>Password</h4>
					<input
						type="password"
						value={Password}
						onChange={onPasswordHandler}
						placeholder="Password"
					/>
				</div>
				<div className="login_etc">
					<div className="checkbox">
						<input type="checkbox" name="" id="" /> Remember Me?
					</div>
					<div className="forgot_pw">
						<Link to="/">Admin Login</Link>
					</div>
				</div>
				<div className="submit">
					<button type="submit">제출</button>
				</div>
			</div>
		</form>
	);
};

export default Register;