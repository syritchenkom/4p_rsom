import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {
	const [emailAdress, setEmailAdress] = useState('');
	const [password, setPasword] = useState('');

	useEffect(() => {
		const getData = async () => {};
		getData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
				Login Please
			</h1>
			<Row className="mt-5">
				<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>User Name</Form.Label>
							<Form.Control type="name" placeholder="Enter name" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
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
