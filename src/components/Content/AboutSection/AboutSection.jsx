import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './AboutSection.scss';
import SatelliteImage from '../../../assets/contentSection/About/rectangle_1.png';
import EarthImage from '../../../assets/contentSection/About/rectangle_2.png';

const AboutSection = () => {
	return (
		<Container fluid="auto" className="aboutContainer">
			<div className="about">
				<h1 className="aboutTitle">What is RSOM?</h1>
				<Row xs={1} className="g-1">
					<Col>
						{/* About Section Top */}
						<Card className="aboutCard aboutTop">
							<Card.Img
								variant="right"
								className="aboutImg aboutImgTop"
								src={SatelliteImage}
								alt="Satellite Item"
							/>
							<Card.Body className="aboutText aboutTextTop">
								<Card.Text>
									<span>Remote sensing for opencast mines (RSOM)</span> app is
									designed to analyze the productivity of a mine, its impact on
									the environment, plan new extraction and track machine
									telematics. It is addressed to mine managements, state bodies
									and consulting companies that deal with the design and
									rehabilitation of the area.
									<span className="textAskUl">
										What, among other things, can be tracked in the RSOM app?
									</span>
								</Card.Text>
								<ListGroup as="ul" className="aboutList">
									<ListGroup.Item as="li">terrain changes,</ListGroup.Item>
									<ListGroup.Item as="li">
										identification of the mine site,
									</ListGroup.Item>
									<ListGroup.Item as="li">
										which area is affected by the mine,
									</ListGroup.Item>
									<ListGroup.Item as="li">
										identification of specified areas on satellite images (water
										area, vegetation areas, buildings,large vehicles, clouds).
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>

						{/* About Section Bottom */}
						<Card className="aboutCard aboutBottom">
							<Card.Img
								variant="left"
								className="aboutImg aboutImgBottom"
								src={EarthImage}
								alt="Satellite Item"
							/>
							<Card.Body className="aboutText aboutTextBottom">
								<Card.Title className="aboutTextTitle">
									Improving the management of mines and streamlining the process
									of opencast mining through the use of satellite images.
								</Card.Title>
								<Card.Text>
									RSOM is a satellite eye that looks at the mines and their
									surrounding areas. This innovative project can track the level
									and quality of water in the vicinity of the mine, the quality
									of the afforestation, the level of humidity, pollution and
									detect the potential danger created inside the quarry.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default AboutSection;
