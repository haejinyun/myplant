import Header from '../components/Header';
//import Main from '../components/Main';
import styled from 'styled-components';

const CheckMyPlantPageback = styled.div`
	width: 100%;
	background-color: rgb(221, 221, 221);
	height: 914px;
`;

function CheckMyPlantPage() {
	return (
		<>
			<CheckMyPlantPageback>
				<Header />
			</CheckMyPlantPageback>
		</>
	);
}

export default CheckMyPlantPage;
