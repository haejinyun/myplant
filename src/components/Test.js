// import axios from 'axios';
// import XMLParser from 'react-xml-parser';

// function Test() {
// 	function parseStr(dataSet) {
// 		//그냥 아무 값에서 찾아본거
// 		const dataArr = new XMLParser().parseFromString(dataSet).children;
// 		console.log(dataArr);
// 		//const firchildren = dataArr[1].children;
// 		// const grwtype = dataArr[1].children[0].children.map((number) => {
// 		// 	console.log(number.children);
// 		// });
// 	}

// 	function parseStr2(dataSet) {
// 		//속성을 주고 찾아서 검색 필터를 통해 이런 식으로 값을 찾아내면 될 것 같음.
// 		const dataArr2 = new XMLParser().parseFromString(dataSet).children;
// 		const grw = dataArr2[1].children[0].children.map((number) => {
// 			console.log(number.children);
// 			const cntntsNo = number.children[0]; //이게 콘텐츠 넘버 이걸로 상세 페이지 띄우면 된다.
// 			if (cntntsNo !== undefined) {
// 				console.log('cntntsNo: ', cntntsNo.value);
// 			} else {
// 				console.log('done');
// 				//map함수 찾아서 탈출 하기.
// 			}
// 		});
// 		//console.log(dataArr2);
// 		//const firchildren = dataArr[1].children;
// 		// const grwtype2 = dataArr2[1].children[0].children.map((number, idx) =>
// 		// 	console.log(number.children)
// 		// );
// 	}

// 	function getData() {

// 		axios
// 			.get('http://api.nongsaro.go.kr/service/garden/gardenList', {
// 				params: {
// 					apiKey: '20230130E01FOCQWRVRI8B7VGUJJZW',
// 					numOfRows: 220,
// 					grwhstleChkVal: '054001 ',
// 					lefcolrChkVal: '069002',
// 				},
// 			})
// 			.then((res) => {
// 				const dataset = res.data;
// 				//parseStr(dataset);
// 				parseStr(dataset);
// 			})
// 			.catch((err) => console.log(err));
// 	}

// 	return (
// 		<>
// 			<div>
// 				<button onClick={getData}>testtesttest</button>
// 			</div>
// 		</>
// 	);
// }

// export default Test;
