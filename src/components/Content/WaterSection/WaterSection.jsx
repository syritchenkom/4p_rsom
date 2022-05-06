import React, { useState } from 'react';
import { Card, Container, Dropdown } from 'react-bootstrap';
import './WaterSection.scss';
import SatelliteViewPng from '../../../assets/contentSection/Water/satelliteView.png';
import WaterLinePng from '../../../assets/contentSection/Water/waterLine.png';

export const Images = {
	satellite: {
		img: SatelliteViewPng,
		alt: 'Satellite View Image'
	},
	waterLine: {
		img: WaterLinePng,
		alt: 'Water Line Image'
	}
};

const WaterSection = () => {
	const [selectedImg, setSelectedImg] = useState();
	return (
		<Container fluid="auto" className="waterContainer">
			<div className="waterSection">
				<h1 className="waterTitle">Water Area Detection</h1>
			</div>
			<Dropdown className="waterDropdown">
				<Dropdown.Toggle
					variant="transparent"
					id="dropdown-basic"
					className="dropdownToggle"></Dropdown.Toggle>
				<Dropdown.Menu className="dropdownMenu">
					<Dropdown.Item
						eventKey="1"
						active
						onClick={() => setSelectedImg(Images.satellite)}>
						Satellite view
					</Dropdown.Item>
					<Dropdown.Item
						eventKey="2"
						onClick={() => setSelectedImg(Images.waterLine)}>
						Waterline
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			{/* Take HeaderImage.png */}

			<Card className="waterImg">
				{selectedImg ? (
					<Card.Img src={selectedImg.img} alt={selectedImg.alt} />
				) : null}
			</Card>
		</Container>
	);
};

export default WaterSection;
