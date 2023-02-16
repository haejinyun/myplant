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
    //중복만 없애주는 녀석.
    setResultImgs([...new Set(showCheckMyPlantImgs)]);
    setResultNames([...new Set(showCheckMyPlantNames)]);
  }, [showCheckMyPlantImgs, showCheckMyPlantNames]);

  // console.log('showCheckMyPlantImgs: ', showCheckMyPlantImgs);
  // console.log('showCheckMyPlantNames: ', showCheckMyPlantNames);
  // useEffect(() => {
  //   localStorage.setItem('MyPickImgs', showCheckMyPlantImgs);
  //   localStorage.setItem('MyPickNames', showCheckMyPlantNames);
  // }, [resultImgs, resultNames]);

  // console.log('SET showCheckMyPlantImgs: ', resultImgs);
  // console.log('SET showCheckMyPlantNames: ', resultNames);
  //여기 추가

  const deleteMyPlant = (img, name) => {
    setShowCheckMyPlantImgs(resultImgs.filter((item) => item !== img));
    setShowCheckMyPlantNames(resultNames.filter((item) => item !== name));
    localStorage.setItem('MyPickImgs', showCheckMyPlantImgs);
    localStorage.setItem('MyPickNames', showCheckMyPlantNames);
  };

  useEffect(() => {
    console.log('이미지 잘 지워지냐', showCheckMyPlantImgs);
    console.log('이름 잘 지워지냐', showCheckMyPlantNames);
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
//      <button onClick={storagetest}>test</button>
