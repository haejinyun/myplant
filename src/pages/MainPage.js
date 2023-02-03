import Header from '../components/Header';
//import Main from '../components/Main';
//import Test from '../components/Test';
import styled from 'styled-components';
import Main from '../components/Main';

const MainPageback = styled.div`
	width: 100%;
	background-color: rgb(221, 221, 221);
	height: 914px;
`;

function MainPage() {
	return (
		<MainPageback>
			<Header />
			<Main />
		</MainPageback>
	);
}

export default MainPage;
// /<Test />
