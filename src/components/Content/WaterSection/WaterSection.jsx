import React from 'react';
import { Card, Container, Dropdown } from 'react-bootstrap';
import './WaterSection.scss';
import WaterPng from '../../../assets/contentSection/Water/water.png';

const WaterSection = () => {
	// const []
	return (
		<Container fluid="auto" className="waterContainer">
			<div className="waterSection">
				<h1 className="waterTitle">Water Area Detection</h1>
			</div>
			<Dropdown className="waterDropdown">
				<Dropdown.Toggle
					// variant="transparent"
					id="dropdown-basic"
					className="dropdownToggle">
					Satellite view
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdownMenu">
					<Dropdown.Item href="#/action-1">Satellite view</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Waterline </Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Card className="waterImg">
				{/* Take HeaderImage.png */}
				<Card.Img src={WaterPng} alt="Water Image" />
			</Card>
		</Container>
	);
};

export default WaterSection;
