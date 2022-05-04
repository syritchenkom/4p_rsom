import { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';
import { setAuthorizationToken } from './services/httpService';

function App() {
	const token = localStorage.getItem('authToken');
	const [isAuth, setIsAuth] = useState(!!token);
	token && setAuthorizationToken(token);
	return (
		<ThemeProvider breakpoints={['xxl', 'md', 'sm']}>
			{isAuth ? (
				<Home />
			) : (
				<Login
					isAuthHandler={(value) => {
						setIsAuth(value);
					}}
				/>
			)}
		</ThemeProvider>
	);
}

export default App;
