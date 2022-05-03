import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './ChlorophyllSection.scss';
import ChlorophyllImg from '../../../assets/contentSection/Chlorophyll/Chlorophyll.png';

const ChlorophyllSection = () => {
	return (
		<Container fluid="auto" className="chlorophyllContainer">
			<div className="chlorophyllSection">
				<h1 className="chlorophyllTitle">ChlorophYll</h1>
			</div>
			<Card className="chlorophyllImg">
				{/* Take HeaderImage.png */}
				<Card.Img src={ChlorophyllImg} alt="Header Image" />
			</Card>
		</Container>
	);
};

export default ChlorophyllSection;
