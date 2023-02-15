import styled from 'styled-components';

export const CategoryBlock = styled.div`
  //display: flex;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  background-color: rgb(238, 238, 238);
  width: 60%;
  height: 200px;
`;
export const CategoryLine = styled.div`
  display: flex;
  //justify-content: space-around;
`;
export const CategoryName = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bolder;
`;
export const Categoryitems = styled.div`
  display: flex;
  //justify-content: space-around;
`;
export const InputS = styled.input`
  appearance: none;
  text-align: left;
`;

export const Item = styled.div`
  cursor: pointer;
  margin-right: 8px;

  :hover {
    font-weight: bolder;
    border: 1px solid;
  }
`;

export const TotalPlant = styled.div`
  display: grid;
  margin: 0 auto;
  //place-items: center;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 40px;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const Items = styled.div`
  place-items: center;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.4;
  //position: relative;
`;

export const EachItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //position: relative;
`;

export const Name = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  text-align: center;
  //position: relative;
`;

export const ItemsImg = styled.img`
  width: 150px;
  //position: relative;
`;

export const Itemsbtn = styled.button`
  display: block;
  margin: 0 auto;
  //position: relative;
  /* &.active {
    background-color: black;
  } */
`;

export const Page = styled.div`
  display: flex;
  // margin: 0 auto;
  justify-content: center;
`;
