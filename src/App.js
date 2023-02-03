import MainPage from './pages/MainPage';
import LookAroundPlantPage from './pages/LookAroundPlantPage';
import FindMyPlantPage from './pages/FindMyPlantPage';
import CheckMyPlantPage from './pages/CheckMyPlantPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainPage />} path='/' />
					<Route element={<FindMyPlantPage />} path='/FindMyPlantPage' />
					<Route element={<LookAroundPlantPage />} path='/LookAroundPlantPage' />
					<Route element={<CheckMyPlantPage />} path='/CheckMyPlantPage' />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
