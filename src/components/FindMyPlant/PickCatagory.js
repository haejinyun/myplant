import * as S from './index.styled';
import { categoryData } from '../assets/categoryData';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filter, deleteall } from '../../redux/filtering';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

import ShowPlant from './ShowPlant';

function PickCatagory() {
	const dispatch = useDispatch();
	const checklist = useSelector((state) => state.filtering); //dispatch후 여기에다가 불러와

	const [show, setShow] = useState({ data: '' });
	const [option, setOption] = useState([]);
	const [result, setResult] = useState([]);
	console.log('test', checklist);

	const filterPlant = () => {
		axios
			.get('http://api.nongsaro.go.kr/service/garden/gardenList', {
				params: {
					//필터링한 값을 넣는 부분
					apiKey: '20230130E01FOCQWRVRI8B7VGUJJZW',
					numOfRows: 220,
					lightChkVal: checklist.light,
					grwhstleChkVal: checklist.grownType, //여기 부분이 저장한 그것을 가져와서 넣는 부분 클릭시 저장한 state를 가져다가 넣는 부분
					flclrChkVal: checklist.flClr,
					ignSeasonChkVal: checklist.flSeason,
					winterLwetChkVal: checklist.winterTem,
					waterCycleSel: checklist.waterCycle,
					numOfRows: '220', //이걸 안하면 한 페이이지에 뜨는게 적어서 이렇게 해줘서 와르를 뜸 나중에 표현 할 때 페이지를 나눠줘야할듯
				},
			})
			.then((res) => res.data)
			.then((datas) => new XMLParser().parseFromString(datas).children)
			.then((filetData) => filetData[1].children[0].children)
			.then((finallyDatas) => {
				setShow((prev) => ({ ...prev, data: finallyDatas }));
			})
			.catch((err) => console.log(err));
	};

	const optionSetting = (item) => {
		dispatch(filter({ name: item.eng, code: item.value }));
		setOption((prev) => [...prev, item.name]);

		//console.log(typeof result1);
	};

	const reset = () => {
		dispatch(deleteall(''));
		setOption([]);
	};

	useEffect(() => {
		setResult([...new Set(option)]);
		console.log('선택한 값', result);
	}, [option]);

	//이게 클릭이 되었을때 dispatch와 같이 아래 뜨는걸 해야하는데 이게 비동기 적이다 보니까 이렇네 그러면 useEffect를 써야하는데 이게 어떻게 해야하지
	// const showOptions = (item) => {

	return (
		<>
			<S.CategoryBlock>
				<div>
					{categoryData.map((data, idx) => (
						<S.CategoryLine key={idx}>
							<S.CategoryName>{data.title}</S.CategoryName>
							<S.Categoryitems>
								{data.items.map((item) => (
									<S.Item key={item.value} onClick={() => optionSetting(item)}>
										{item.name}
									</S.Item> //얘가 클릭 되었을때. item.value가 저장이 되는 것
								))}
							</S.Categoryitems>
						</S.CategoryLine>
					))}
				</div>
				<button onClick={filterPlant}>조회</button>
				<button onClick={reset}>초기화</button>
				<div>{result + ' '}</div>
			</S.CategoryBlock>
			<div>
				<ShowPlant show={show}></ShowPlant>
			</div>
		</>
	);
}

export default PickCatagory;
