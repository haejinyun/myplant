import * as S from './index.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { checkCntnsNo, myPick } from '../../redux/filtering';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

import Modal from './Modal';

function ShowPlant({ show }) {
	const dispatch = useDispatch();
	const checklist = useSelector((state) => state.filtering); //dispatch후 여기에다가 불러와

	const totalDatas = show.data;

	const [modalOpen, setModalOpen] = useState(false);
	const [detail, setDetail] = useState({ detailData: '' });

	const [btnText, setBtnText] = useState('myPick');

	const test = (data) => {
		//클릭을 했을때 모달을 ㅅ띄워 모달 안에 들어가야 하는 내용은 state에 담아서 props로 념겨줘
		dispatch(checkCntnsNo(data));
		console.log('check:' + checklist.cntN);
		//api를 불러서 팝업으로 띄우게 해야지.
		axios
			.get('http://api.nongsaro.go.kr/service/garden/gardenDtl', {
				params: {
					//필터링한 값을 넣는 부분
					apiKey: '20230130E01FOCQWRVRI8B7VGUJJZW',
					cntntsNo: checklist.cntN,
				},
			})
			.then((res) => res.data)
			.then((datas) => new XMLParser().parseFromString(datas).children[1].children[0].children) //갹체로 나온 값들
			.then((test) => console.log(test))
			.then((test2) => {
				setDetail((prev) => ({ ...prev, detailData: test2 }));
			})
			.catch((err) => console.log(err));

		setModalOpen(true);
		// {
		// 	modalOpen === true ? <Modal setModalOpen={setModalOpen} detail={detail} /> : null;
		// }
		//modalOpen === true ? <Modal setModalOpen={setModalOpen} detail={detail} /> : null;
	};

	const cntsNDatas = Object.keys(totalDatas).map((data2, idx) => {
		return totalDatas[data2].value === '' ? (
			<S.Items key={idx}>
				<S.EachItem>
					<S.ItemsImg
						src={
							'http://www.nongsaro.go.kr/cms_contents/301/' +
							totalDatas[data2].children[9].value.split('|')[0]
						}
						alt='missing'
						onClick={() => test(totalDatas[data2].children[0].value.slice(0, -1))} //이걸 따로 함수로 빼서
					/>
					<div>
						<S.Name>{totalDatas[data2].children[0].value.slice(0, -1)}</S.Name>
						<S.Name>{totalDatas[data2].children[1].value.slice(0, -1)}</S.Name>
						<S.Itemsbtn onClick={() => dispatch(myPick(!checklist.myPickValue))}>
							{btnText}
						</S.Itemsbtn>
					</div>
				</S.EachItem>
			</S.Items>
		) : null;
	});

	return (
		<>
			<S.TotalPlant>{typeof totalDatas === 'object' ? cntsNDatas : null}</S.TotalPlant>
		</>
	);
}

export default ShowPlant;
