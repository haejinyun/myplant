import Header from '../components/Header';
import styled from 'styled-components';
import FindPlant from '../components/FindMyPlant';
const FindMyPlantPageback = styled.div`
  width: 100%;
  background-color: rgb(221, 221, 221);
  height: 100vh;
`;

function FindMyPlantPage() {
  return (
    <>
      <FindMyPlantPageback>
        <Header />
        <FindPlant />
      </FindMyPlantPageback>
    </>
  );
}

export default FindMyPlantPage;
