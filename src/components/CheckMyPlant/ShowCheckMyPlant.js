import * as S from './index.styled';

import { useEffect, useState } from 'react';

function ShowCheckMyPlant() {
  const [showCheckMyPlantImgs, setShowCheckMyPlantImgs] = useState([]);
  const [showCheckMyPlantNames, setShowCheckMyPlantNames] = useState([]);
  const [resultImgs, setResultImgs] = useState([]);
  const [resultNames, setResultNames] = useState([]);

  useEffect(() => {
    setShowCheckMyPlantImgs(
      localStorage
        .getItem('MyPickImgs')
        .split(',')
        .filter((item) => item.length > 1)
    );

    setShowCheckMyPlantNames(
      localStorage
        .getItem('MyPickNames')
        .split(',')
        .filter((item) => item.length > 1)
    );
  }, []);

  useEffect(() => {
    setResultImgs([...new Set(showCheckMyPlantImgs)]);
    setResultNames([...new Set(showCheckMyPlantNames)]);
  }, [showCheckMyPlantImgs, showCheckMyPlantNames]);

  const deleteMyPlant = (img, name) => {
    const updatedImgs = resultImgs.filter((item) => item !== img);
    const updatedNames = resultNames.filter((item) => item !== name);
    setShowCheckMyPlantImgs(updatedImgs);
    setShowCheckMyPlantNames(updatedNames);
    localStorage.setItem('MyPickImgs', updatedImgs);
    localStorage.setItem('MyPickNames', updatedNames);
  };

  useEffect(() => {
    console.log('이미지 잘 지워지냐', resultImgs);
    console.log('이름 잘 지워지냐', resultNames);
  });

  const bringMyPlant = resultImgs.map((imgitem, idx) => {
    return (
      <S.EachItem key={imgitem}>
        <S.ItemsImg src={imgitem} alt='error'></S.ItemsImg>
        <S.Name>{resultNames[idx]}</S.Name>
        <S.Itemsbtn onClick={() => deleteMyPlant(imgitem, resultNames[idx])}>Delete</S.Itemsbtn>
      </S.EachItem>
    );
  });
  return (
    <>
      <S.Title>MY PLANTS!</S.Title>
      <S.TotalPlant>{bringMyPlant}</S.TotalPlant>
    </>
  );
}

export default ShowCheckMyPlant;
