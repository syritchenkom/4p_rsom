import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AdvantagesSection.scss';
import DataLibSvg from '../../../assets/contentSection/Advantages/data_lib.svg';
import DIYAiSvg from '../../../assets/contentSection/Advantages/diy_ai.svg';
import SocialEnvSvg from '../../../assets/contentSection/Advantages/social_env.svg';
import IncreaseProdSvg from '../../../assets/contentSection/Advantages/increase_prod.svg';

const AdvantagesSection = () => {
	return (
		<Container fluid="auto" className="advantagesContainer">
			<div className="advantagesSection">
				<h1 className="advantagesTitle">AdvAntages of RSOM</h1>
			</div>
			<div className="advantagesText">
				Our data science platform helps mining companies source, centralize and
				analyze new and historic datasets
			</div>
			<Row xs={1} md={2} xxl={4} className="g-4 advantages">
				<Col className="advantagesCol">
					<Card className="advantagesCard">
						<Card.Img
							className="advantagesCardImg"
							variant="top"
							src={DataLibSvg}
						/>
						<Card.Body className="advantagesCardBody">
							<Card.Title className="advantagesCardBodyTitle">
								Data Library
							</Card.Title>
							<Card.Text>
								Cleaned, centralized public, paid & proprietary data. Satellite
								data provided by multipe providers. Machine data accesses
								through OEM systems. Other data sourced from various paid and
								free databases.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col className="advantagesCol">
					<Card className="advantagesCard">
						<Card.Img
							className="advantagesCardImg"
							variant="top"
							src={DIYAiSvg}
						/>
						<Card.Body className="advantagesCardBody">
							<Card.Title className="advantagesCardBodyTitle">
								Data Library
							</Card.Title>
							<Card.Text>
								Cleaned, centralized public, paid & proprietary data. Satellite
								data provided by multipe providers. Machine data accesses
								through OEM systems. Other data sourced from various paid and
								free databases.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col className="advantagesCol">
					<Card className="advantagesCard">
						<Card.Img
							className="advantagesCardImg"
							variant="top"
							src={SocialEnvSvg}
						/>
						<Card.Body className="advantagesCardBody">
							<Card.Title className="advantagesCardBodyTitle">
								Data Library
							</Card.Title>
							<Card.Text>
								Cleaned, centralized public, paid & proprietary data. Satellite
								data provided by multipe providers. Machine data accesses
								through OEM systems. Other data sourced from various paid and
								free databases.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col className="advantagesCol">
					<Card className="advantagesCard">
						<Card.Img
							className="advantagesCardImg"
							variant="top"
							src={IncreaseProdSvg}
						/>
						<Card.Body className="advantagesCardBody">
							<Card.Title className="advantagesCardBodyTitle">
								Data Library
							</Card.Title>
							<Card.Text>
								Cleaned, centralized public, paid & proprietary data. Satellite
								data provided by multipe providers. Machine data accesses
								through OEM systems. Other data sourced from various paid and
								free databases.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AdvantagesSection;
