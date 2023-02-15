import * as S from './index.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { checkCntnsNo, myPick } from '../../redux/filtering';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

import Modal from 'react-modal';

const FILTERFLOWER_KEY = process.env.REACT_APP_FILTERFLOWER_KEY;

function ShowPlant({ show }) {
  const dispatch = useDispatch();
  const checklist = useSelector((state) => state.filtering); //dispatch후 여기에다가 불러와

  const totalDatas = show.data;

  const [modalOpen, setModalOpen] = useState(false);

  const [myPickImgs, setMyPickImgs] = useState(localStorage.getItem('MyPickImgs') || []);
  const [myPickNames, setMyPickNames] = useState(localStorage.getItem('MyPickNames') || []);

  //const bringPickImgs = JSON.parse(localStorage.getItem('MyPickImgs'));
  // console.log(bringPickImgs);
  // const bringPickNames = JSON.parse(localStorage.getItem('MyPickNames'));
  // console.log(bringPickNames);

  //const [detailValue, setDetailValue] = useState([]);

  //let [btnActive, setBtnActive] = useState('');

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return e.target.value;
  //   });
  // };

  const changeModalOpen = () => {
    setModalOpen((curent) => !curent);
  };

  //const [detail, setDetail] = useState({ detailData: '' });

  // const bringPlantDetail = (data) => {
  //   //클릭을 했을때 모달을 ㅅ띄워 모달 안에 들어가야 하는 내용은 state에 담아서 props로 념겨줘
  //   dispatch(checkCntnsNo(data)); //클릭된 녀석의 콘텐츠 넘버를 리덕스에 저장해줘.
  //   //api를 불러서 팝업으로 띄우게 해야지.
  //   axios
  //     .get('http://api.nongsaro.go.kr/service/garden/gardenDtl', {
  //       params: {
  //         //필터링한 값을 넣는 부분
  //         apiKey: FILTERFLOWER_KEY,
  //         cntntsNo: checklist.cntN, //디테일을 부를 식물의 콘텐트 키
  //       },
  //     })
  //     .then((res) => res.data)
  //     .then((datas) => new XMLParser().parseFromString(datas).children[1].children[0].children) //갹체로 나온 값들
  //     .then((datas2) => {
  //       setDetail((prev) => ({ ...prev, detailData: datas2 }));
  //     })
  //     .catch((err) => console.log(err));
  //   //console.log('check:' + checklist.cntN);
  //   if (typeof detail.detailData === 'object') {
  //     changeModalOpen();
  //   }
  // };

  //console.log('test야: ', typeof detail.detailData); //잘 들어가짐. //얘가 stirng이 아니라 object일때만.
  //console.log('거를것들', detail.detailData[0].value); //=> 이게 처음부터 진행이 되면 안된다.

  const storageMyPick = (img, name) => {
    setMyPickImgs((prev) => [...prev, img]);
    setMyPickNames((prev) => [...prev, name]);
  };

  useEffect(() => {
    console.log(myPickImgs);
    console.log(myPickNames);
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
