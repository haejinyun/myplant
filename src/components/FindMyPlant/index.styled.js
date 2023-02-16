import styled from 'styled-components';

export const CategoryBlock = styled.div`
  //display: flex;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  background-color: rgb(238, 238, 238);
  width: 60%;
  height: 230px;
`;
export const CategoryLine = styled.div`
  display: flex;
  justify-content: center;
`;
export const CategoryName = styled.div`
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 8px;
  font-weight: bolder;
`;
export const Categoryitems = styled.div`
  display: flex;
  margin-top: 8px;
  //justify-content: space-around;
`;
export const InputS = styled.input`
  appearance: none;
  text-align: left;
`;

export const Result = styled.div`
  margin-top: 8px;
  margin-left: 40px;
  //justify-content: space-around;
`;
export const Btnpart = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
`;
export const Btn = styled.button`
  display: block;
  width: 50px;
  height: 25px;
  border: none;
  margin-right: 10px;
  font-weight: bolder;
  background-color: rgb(101, 136, 100);
  border-radius: 6px;
  cursor: pointer;
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

export const ClickPart = styled.div``;

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
  border: none;
  //font-weight: bolder;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageNum = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

export const Pagebtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
