import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const navigate = useNavigate();
    const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};
	const onSubmitHandler = (event) => {
		event.preventDefault();
		let body = {
			idx: 'user',
			id: Email,
			password: Password,
		};
		
		
		Axios.post('http://localhost:5000/admin', body, { withCredentials: true }).then((response) => {
			if (response.data) {
				navigate('/');
				console.log(response.data);
				alert(response.data);
			} else {
				alert('다시 확인해주세요');
			}
		});
			
	};
	
	return (
        <form className="wrap" onSubmit={onSubmitHandler}>
		    
        <div className="login">
            <h2>Admin Log-in</h2>
            <div className="login_sns">
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            </div>
            <div className="login_id">
                <h4>E-mail</h4>
                <input type="email" name="" id="" placeholder="Email" onChange={onEmailHandler}/>
            </div>
            <div className="login_pw">
                <h4>Password</h4>
                <input type="password" name="" id="" placeholder="Password" onChange={onPasswordHandler}/>
            </div>
            <div className="login_etc">
                <div className="checkbox">
                <input type="checkbox" name="" id=""/> Remember Me?
                </div>
                <div className="forgot_pw">
                <Link to="/register">Sign up</Link>
            </div>
            </div>
            <div className="submit">
					<button type="submit" style={{background: "linear-gradient(to left, rgb(98, 12, 204), rgb(97, 176, 236))"}}>제출</button>
				</div>
        </div>
   </form>
	);
};

export default LandingPage;