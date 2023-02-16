import MainPage from './pages/MainPage';
import FindMyPlantPage from './pages/FindMyPlantPage';
import CheckMyPlantPage from './pages/CheckMyPlantPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<FindMyPlantPage />} path='/findMyPlantPage' />
          <Route element={<CheckMyPlantPage />} path='/checkMyPlantPage' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


//    "start": "react-scripts start",