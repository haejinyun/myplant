import Header from '../components/Header';
//import Main from '../components/Main';
import styled from 'styled-components';

const LookAroundPlantPageback = styled.div`
	width: 100%;
	background-color: rgb(221, 221, 221);
	height: 914px;
`;

function LookAroundPlantPage() {
	return (
		<LookAroundPlantPageback>
			<Header />
		</LookAroundPlantPageback>
	);
}

export default LookAroundPlantPage;
