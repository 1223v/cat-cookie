import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	

	
	return (
		    <div class="wrap">
        <div class="login">
            <h2>Admin Log-in</h2>
            <div class="login_sns">
            <li><a href=""><i class="fab fa-instagram"></i></a></li>
            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fab fa-twitter"></i></a></li>
            </div>
            <div class="login_id">
                <h4>E-mail</h4>
                <input type="email" name="" id="" placeholder="Email"/>
            </div>
            <div class="login_pw">
                <h4>Password</h4>
                <input type="password" name="" id="" placeholder="Password"/>
            </div>
            <div class="login_etc">
                <div class="checkbox">
                <input type="checkbox" name="" id=""/> Remember Me?
                </div>
                <div class="forgot_pw">
                <Link to="/register">Sign up</Link>
            </div>
            </div>
            <div class="submit">
                <input type="submit" value="submit"/>
            </div>
        </div>
    </div>
	);
};

export default LandingPage;