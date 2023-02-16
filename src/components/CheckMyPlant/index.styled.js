import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: bolder;
  font-size: 45px;
`;

export const TotalPlant = styled.div`
  display: grid;
  margin: 0 auto;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 40px;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const EachItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //position: relative;
`;

export const Name = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const ItemsImg = styled.img`
  width: 150px;
`;

export const Itemsbtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  border: none;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
`;
