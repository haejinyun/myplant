import Header from '../components/Header';
import styled from 'styled-components';
import CheckMyPlant from '../components/CheckMyPlant';
const CheckMyPlantPageback = styled.div`
  width: 100%;
  background-color: rgb(221, 221, 221);
  height: 100vh;
`;

function CheckMyPlantPage() {
  return (
    <>
      <CheckMyPlantPageback>
        <Header />
        <CheckMyPlant />
      </CheckMyPlantPageback>
    </>
  );
}

export default CheckMyPlantPage;
