import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AboutSection from '../../components/Content/AboutSection/AboutSection';
import AdvantagesSection from '../../components/Content/AdvantagesSection/AdvantagesSection';
import ChlorophyllSection from '../../components/Content/ChlorophyllSection/ChlorophyllSection';
import WaterSection from '../../components/Content/WaterSection/WaterSection';
import Header from '../../components/Header/Header';
import './Home.scss';

function Home() {
	return (
		<Container className="homeContainer">
			{/* Import Header */}
			<Header />
			<AboutSection />
			<AdvantagesSection />
			<WaterSection />
			<ChlorophyllSection />
		</Container>
	);
}

export default Home;
