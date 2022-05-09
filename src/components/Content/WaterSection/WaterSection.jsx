import React, { useState } from 'react';
import { Card, Container, Dropdown } from 'react-bootstrap';
import './WaterSection.scss';
import SatelliteViewPng from '../../../assets/contentSection/Water/satelliteView.png';
import WaterLinePng from '../../../assets/contentSection/Water/waterLine.png';

export const Images = {
	satellite: {
		id: 1,
		img: SatelliteViewPng,
		alt: 'Satellite View'
	},
	waterline: {
		id: 2,
		img: WaterLinePng,
		alt: 'Waterline'
	}
};

const WaterSection = () => {
	const [selectedImg, setSelectedImg] = useState(Images.satellite);
	return (
		<Container fluid="auto" className="waterContainer">
			<div className="waterSection">
				<h1 className="waterTitle">Water Area Detection</h1>
			</div>
			<Dropdown className="waterDropdown btn-group">
				<Dropdown.Toggle
					variant="transparent"
					id="dropdown-basic"
					className="dropdownToggle">
					{selectedImg.alt}
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdownMenu">
					{selectedImg.id === 1 ? (
						<Dropdown.Item
							eventKey="2"
							onClick={() => setSelectedImg(Images.waterline)}>
							Waterline
						</Dropdown.Item>
					) : (
						<Dropdown.Item
							selected
							eventKey="1"
							onClick={() => setSelectedImg(Images.satellite)}>
							Satellite view
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>
			<Card className="waterImg">
				{selectedImg ? (
					<Card.Img src={selectedImg.img} alt={selectedImg.alt} />
				) : null}
			</Card>
		</Container>
	);
};

export default WaterSection;
