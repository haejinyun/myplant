import * as S from './index.styled';
import React, { useEffect, useState } from 'react';

function ShowPlant({ show }) {
  const totalDatas = show.data;

  const [myPickImgs, setMyPickImgs] = useState(
    localStorage.getItem('MyPickImgs') === null ? [] : localStorage.getItem('MyPickImgs').split(',')
  );

  const [myPickNames, setMyPickNames] = useState(
    localStorage.getItem('MyPickNames') === null
      ? []
      : localStorage.getItem('MyPickNames').split(',')
  );

  const storageMyPick = (img, name) => {
    setMyPickImgs((prev) => [...prev, img]);
    setMyPickNames((prev) => [...prev, name]);
  };

  useEffect(() => {
    localStorage.setItem('MyPickImgs', myPickImgs);
    localStorage.setItem('MyPickNames', myPickNames);
  }, [myPickImgs, myPickNames]);

  const bringCntsNDatas = Object.keys(totalDatas).map((data2, idx) => {
    return totalDatas[data2].value === '' ? (
      <S.Items key={idx}>
        <S.EachItem>
          <S.ItemsImg
            src={
              'http://www.nongsaro.go.kr/cms_contents/301/' +
              totalDatas[data2].children[9].value.split('|')[0]
            }
            alt='error'
          />
          <div>
            <S.Name>{totalDatas[data2].children[0].value.slice(0, -1)}</S.Name>
            <S.Name>{totalDatas[data2].children[1].value.slice(0, -1)}</S.Name>
            <S.Itemsbtn
              onClick={() =>
                storageMyPick(
                  'http://www.nongsaro.go.kr/cms_contents/301/' +
                    totalDatas[data2].children[9].value.split('|')[0],
                  totalDatas[data2].children[1].value.slice(0, -1)
                )
              }
            >
              MyPick
            </S.Itemsbtn>
          </div>
        </S.EachItem>
      </S.Items>
    ) : null;
  });

  return (
    <>
      <S.TotalPlant>{typeof totalDatas === 'object' ? bringCntsNDatas : 'null'}</S.TotalPlant>
    </>
  );
}

export default ShowPlant;
