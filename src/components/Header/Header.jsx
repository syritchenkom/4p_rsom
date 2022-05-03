import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import LogoItem from '../../assets/header/logo.svg';
import LogoBigItem from '../../assets/header/logo_big.png';
import HeaderImage from '../../assets/header/header.png';
import './Header.scss';

const Header = () => {
	return (
		<Container fluid="auto" className="header">
			<Navbar className="headerTop">
				{/* Take LogoItem.svg */}
				<Navbar.Brand href="#home">
					<img
						src={LogoItem}
						width="42"
						height="45"
						alt="4p-rsom logo"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
			</Navbar>
			<Card className="headerBack">
				{/* Take HeaderImage.png */}
				<Card.Img src={HeaderImage} alt="Header Image" />
				<Card.ImgOverlay className="headerContent">
					<Card.Img
						className="headerBigLogo"
						src={LogoBigItem}
						alt="Big Logo"
					/>
					<Card.Text className="headerText">
						Helping mining professionals make smarter decisions with data,
						satellite imaging and analytics
					</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</Container>
	);
};

export default Header;
