import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AboutSection from '../../components/Content/AboutSection/AboutSection';
import AdvantagesSection from '../../components/Content/AdvantagesSection/AdvantagesSection';
import ChlorophyllSection from '../../components/Content/ChlorophyllSection/ChlorophyllSection';
import WaterSection from '../../components/Content/WaterSection/WaterSection';
import Header from '../../components/Header/Header';
import httpService from '../../services/httpService';
import './Home.scss';

export const urls = {
	GET_AREAS_PRIMARY: '/areas/primary',
	GET_AREAS_SECONDARY: '/areas/secondary',
	GET_AREAS_DATA: '/areas/data'
};

function Home() {
	useEffect(() => {
		httpService.get('/areas/primary');
		httpService.get('/areas/secondary');
		httpService.get('/areas/data');
	}, []);
	return (
		<Container className="homeContainer">
			{/* Import Content */}
			<Header />
			<AboutSection />
			<AdvantagesSection />
			<WaterSection />
			<ChlorophyllSection />
		</Container>
	);
}

export default Home;
