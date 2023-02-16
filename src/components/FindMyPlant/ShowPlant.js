import * as S from './index.styled';
import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';

function ShowPlant({ show }) {
  const totalDatas = show.data;

  const [modalOpen, setModalOpen] = useState(false);

  // const [myPickImgs, setMyPickImgs] = useState(localStorage.getItem('MyPickImgs').split(',') || []);

  // const [myPickNames, setMyPickNames] = useState(
  //   localStorage.getItem('MyPickNames').split(',') || []
  // );

  const [myPickImgs, setMyPickImgs] = useState(
    localStorage.getItem('MyPickImgs') === null ? [] : localStorage.getItem('MyPickImgs').split(',')
  );

  const [myPickNames, setMyPickNames] = useState(
    localStorage.getItem('MyPickNames') === null
      ? []
      : localStorage.getItem('MyPickNames').split(',')
  );

  const changeModalOpen = () => {
    setModalOpen((curent) => !curent);
  };

  const storageMyPick = (img, name) => {
    setMyPickImgs((prev) => [...prev, img]);
    setMyPickNames((prev) => [...prev, name]);
    console.log(localStorage.getItem('MyPickImgs'));
    console.log(localStorage.getItem('MyPickNames'));
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
            //onClick={() => bringPlantDetail(totalDatas[data2].children[0].value.slice(0, -1))} //이걸 따로 함수로 빼서
          />
          <div>
            <S.Name>{totalDatas[data2].children[0].value.slice(0, -1)}</S.Name>
            <S.Name>{totalDatas[data2].children[1].value.slice(0, -1)}</S.Name>

            <S.Itemsbtn
              //className={'btn' + (idx === btnActive ? ' active' : '')}
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

  //console.log('데이터원본', detail.detailData[36]);
  return (
    <>
      <S.TotalPlant>{typeof totalDatas === 'object' ? bringCntsNDatas : 'null'}</S.TotalPlant>

      <Modal isOpen={modalOpen} onRequestClose={() => changeModalOpen()}>
        <button onClick={changeModalOpen}>x</button>

        <p>상세 페이지</p>
      </Modal>
    </>
  );
}

export default ShowPlant;

//95번째 삼항 연산자 부분에서 가 불러오는게 안맞음 그래서 api를 부르는 순간을 다르게 생각햅봐야할듯

// <S.Itemsbtn
// onClick={() =>
// 	storageMyPick(
// 		'http://www.nongsaro.go.kr/cms_contents/301/' +
// 			totalDatas[data2].children[9].value.split('|')[0],
// 		totalDatas[data2].children[1].value.slice(0, -1)
// 	)
// }
// >
// MyPick
// </S.Itemsbtn>
