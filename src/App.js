import { ThemeProvider } from 'react-bootstrap';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';

function App() {
	return (
		<ThemeProvider breakpoints={['xxl', 'md', 'sm']}>
			{localStorage.getItem('authToken') ? <Home /> : <Login />}
		</ThemeProvider>
	);
}

export default App;
