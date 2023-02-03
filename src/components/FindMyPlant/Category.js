import * as S from './index.styled';
import React, { useState } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

import {
	lightCategory,
	grownTypeCategory,
	flClrCategory,
	flSeasonCategory,
	winterTemCategory,
	waterCycleCategory,
} from '../assets/categoryData';

function Category() {
	//let useData = null;
	const [checkeds, setChecked] = useState({
		//각 라디오 버튼이 눌릴때마다 값을 객체 안에다가 집어 넣어
		//이거는 라디오 버튼이 눌렸나를 확인하기 위함임.
		light: '',
		grownType: '',
		flClr: '',
		flSeason: '',
		winterTem: '',
		waterCycle: '',
	});
	//const [api, setApi] = useState({});

	const handelLClickRBtn = (e) => {
		//각각 만드는 것이 아니라 e.target.className이런식으로 해서 재사용은 힘드려나..
		setChecked((prev) => ({
			...prev,
			light: e.target.value,
		}));
	};
	const handelGClickRBtn = (e) => {
		setChecked((prev) => ({
			...prev,
			grownType: e.target.value,
		}));
	};
	const handelFCClickRBtn = (e) => {
		setChecked((prev) => ({
			...prev,
			flClr: e.target.value,
		}));
	};
	const handelFSClickRBtn = (e) => {
		setChecked((prev) => ({
			...prev,
			flSeason: e.target.value,
		}));
	};
	const handelWTClickRBtn = (e) => {
		setChecked((prev) => ({
			...prev,
			winterTem: e.target.value,
		}));
	};
	const handelWCClickRBtn = (e) => {
		setChecked((prev) => ({
			...prev,
			waterCycle: e.target.value,
		}));
	};

	/////////////

	// function parseStr(dataSet) {
	// 	const dataArr = new XMLParser().parseFromString(dataSet).children; //내부에서 test라는 변수로 지정
	// 	dataArr[1].children[0].children.map((number) => {
	// 		const data = number.children;
	// 		console.log(data); //해당 식물에 관련된 값들이 들어있는 객체 => 여기서 꺼내서 사진으로 테이블을 만들고 하면 된다. 이름 이랑.
	// 		//console.log(data[0].value); //이게 콘텐츠 넘버 이걸 넘겨줘서 상세 페이지를 띄우면 된다.
	// 		//useData = data;
	// 		//showImg(data);
	// 		//showName(data);
	// 	});
	// }

	function showImg(data) {
		//이걸 다른 커포넌트로 빼고싶은데... 값을 어떻게 넘겨주는 것이 좋을랑가..
		const contentsN = data[0].value;
		const imgFile = data[9].value.split('|');
		const plantName = data[1].value;
		let imgLink = 'http://www.nongsaro.go.kr/cms_contents/301/' + imgFile[0];
		//console.log('http://www.nongsaro.go.kr/cms_contents/301/' + imgFile[0]);  //이걸로 사진 경로 찾아낼 수 있다. 앞에 'http://www.nongsaro.go.kr/cms_contents/301/'~~.jpg(찾은거)하면 사진 나옴.
		//여기서 태그를 넣자
		<li key={contentsN}>
			<img src={imgLink} alt='error' width='40%'>
				<div>{plantName}</div>
			</img>
		</li>;
		//console.log(data[9].value);
	}

	// function showName(data) {
	// 	const plantName = data[1].value;
	// 	console.log('name' + plantName); //이걸로 사진 경로 찾아낼 수 있다. 앞에 http://www.nongsaro.go.kr/cms_contents/301/~~.jpg(찾은거)하면 사진 나옴.
	// 	//console.log(data[9].value);
	// }
	//api가져오는 부분
	const filterPlants = () => {
		axios
			.get('http://api.nongsaro.go.kr/service/garden/gardenList', {
				params: {
					//필터링한 값을 넣는 부분
					apiKey: '20230130E01FOCQWRVRI8B7VGUJJZW',
					numOfRows: 220,
					lightChkVal: checkeds.light,
					grwhstleChkVal: checkeds.grownType, //여기 부분이 저장한 그것을 가져와서 넣는 부분 클릭시 저장한 state를 가져다가 넣는 부분
					flclrChkVal: checkeds.flClr,
					ignSeasonChkVal: checkeds.flSeason,
					winterLwetChkVal: checkeds.winterTem,
					waterCycleSel: checkeds.waterCycle,
					numOfRows: '220', //이걸 안하면 한 페이이지에 뜨는게 적어서 이렇게 해줘서 와르를 뜸 나중에 표현 할 때 페이지를 나눠줘야할듯
				},
			})
			.then((res) => {
				const dataset = res.data;
				//console.log(dataset);
				const filterData = new XMLParser().parseFromString(dataset).children;
				//setApi(filterData);
				console.log(filterData[1].children[0].children); // object
				//parseStr(dataset);
				//const test = new XMLParser().parseFromString(dataset).children;
			})
			.catch((err) => console.log(err));
	};
	const reset = () => {
		setChecked({
			//초기화 버튼 눌리면 내용 초기화.
			light: '',
			grownType: '',
			flClr: '',
			flSeason: '',
			winterTem: '',
			waterCycle: '',
		});
	};

	//console.log('test' + api);
	return (
		<>
			<S.CategoryBlock>
				<div>Click on your plant!</div>
				<S.CategoryLine>
					<S.CategoryName>조도</S.CategoryName>
					<S.Categorys>
						{lightCategory.map((idx) => (
							<S.LableS key={idx.value}>
								<S.InputS //라벨 부분은 디자인적 보안 필요.. 코드도 더 줄일 방법 찾아봐야함.
									className={idx.name}
									type='radio'
									//id={idx.name}
									value={idx.value} //코드 키 값
									checked={checkeds.light === `${idx.value}`}
									onChange={handelLClickRBtn}
								/>
								{idx.name}
							</S.LableS>
						))}
					</S.Categorys>
				</S.CategoryLine>
				<S.CategoryLine>
					<S.CategoryName>생육형태</S.CategoryName>
					{grownTypeCategory.map((idx) => (
						<S.LableS key={idx.value}>
							<S.InputS
								className={idx.name}
								type='radio'
								value={idx.value} //코드 키 값
								checked={checkeds.light === `${idx.value}`}
								onChange={handelGClickRBtn}
							/>
							{idx.name}
						</S.LableS>
					))}
				</S.CategoryLine>
				<S.CategoryLine>
					<S.CategoryName>꽃 색</S.CategoryName>
					{flClrCategory.map((idx) => (
						<S.LableS key={idx.value}>
							<S.InputS
								className={idx.name}
								type='radio'
								value={idx.value} //코드 키 값
								checked={checkeds.light === `${idx.value}`}
								onChange={handelFCClickRBtn}
							/>
							{idx.name}
						</S.LableS>
					))}
				</S.CategoryLine>
				<S.CategoryLine>
					<S.CategoryName>개화계절</S.CategoryName>
					{flSeasonCategory.map((idx) => (
						<S.LableS key={idx.value}>
							<S.InputS
								className={idx.name}
								type='radio'
								value={idx.value} //코드 키 값
								checked={checkeds.light === `${idx.value}`}
								onChange={handelFSClickRBtn}
							/>
							{idx.name}
						</S.LableS>
					))}
				</S.CategoryLine>
				<S.CategoryLine>
					<S.CategoryName>월동온도</S.CategoryName>
					{winterTemCategory.map((idx) => (
						<S.LableS key={idx.value}>
							<S.InputS
								className={idx.name}
								type='radio'
								value={idx.value} //코드 키 값
								checked={checkeds.light === `${idx.value}`}
								onChange={handelWTClickRBtn}
							/>
							{idx.name}
						</S.LableS>
					))}
				</S.CategoryLine>
				<S.CategoryLine>
					<S.CategoryName>물주기</S.CategoryName>
					{waterCycleCategory.map((idx) => (
						<S.LableS key={idx.value}>
							<S.InputS
								className={idx.name}
								type='radio'
								value={idx.value} //코드 키 값
								checked={checkeds.light === `${idx.value}`}
								onChange={handelWCClickRBtn}
							/>
							{idx.name}
						</S.LableS>
					))}
				</S.CategoryLine>
				<button onClick={filterPlants}>검색</button>
				<button onClick={reset}>초기화</button>
			</S.CategoryBlock>
			<div>
				-test 값-
				<br />
				조도: {checkeds.light}
				<br />
				생육타입:{checkeds.grownType}
				<br />
				꽃색:{checkeds.flClr}
				<br />
				꽃피는계절:{checkeds.flSeason}
				<br />
				월동온도:{checkeds.winterTem}
				<br />
				물주기:{checkeds.waterCycle}
			</div>
		</>
	);
}

export default Category;

//api를 불러와서  보여지는 부분은 카테고리와 같은 곳에 두는 것은 이상한 것 같아서 분리했는데
//
