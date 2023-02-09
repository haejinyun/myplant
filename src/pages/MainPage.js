import Header from '../components/Header';

import styled from 'styled-components';
import Main from '../components/Main';

const MainPageback = styled.div`
	width: 100%;
	background-color: rgb(221, 221, 221);
	height: 100vh;
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
