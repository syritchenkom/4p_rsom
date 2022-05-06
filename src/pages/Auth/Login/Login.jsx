import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import httpService, {
	setAuthorizationToken
} from '../../../services/httpService';

const Login = ({ isAuthHandler }) => {
	const [usernameControl, setUsernameControl] = useState('admin');
	const [passwordControl, setPasswordControl] = useState('123');

	const onSubmit = async (e) => {
		e.preventDefault();

		const data = await httpService.post('/users/login', {
			username: usernameControl,
			password: passwordControl
		});

		localStorage.setItem('authToken', data.data.key);
		setAuthorizationToken(data.data.key);

		if (data.key) {
			isAuthHandler(!!data.key);
		}
	};

	return (
		<Container>
			<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
				Login Please
			</h1>
			<Row className="mt-5">
				<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
					<Form onSubmit={onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								name="username"
								value={usernameControl}
								onChange={(e) => setUsernameControl(e.target.value)}
								placeholder="Enter name"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={passwordControl}
								onChange={(e) => setPasswordControl(e.target.value)}
								placeholder="Password"
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
