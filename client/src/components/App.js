import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Register from './views/LandingPage/Register';

function App() {

	


	return (
		<div>
			
			<div style={{ minHeight: 'calc(100vh - 80px)' }}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/Register" element={<Register />} />
				</Routes>
			</div>
			
		</div>
	);
}

export default App;
