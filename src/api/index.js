import axios from 'axios';

const TODAYFLOWER_KEY = process.env.REACT_APP_TODAYFLOWER_KEY;
export const getTodayFlower = () =>
  axios //api폴더 생성 후 각각 넣어서 분리
    .get(
      'http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=' +
        TODAYFLOWER_KEY +
        '&fMonth=&fDay='
    );

// export const getFilterDate = () => {
// 	axios
// 	.get('http://api.nongsaro.go.kr/service/garden/gardenList', {
// 		//env파일 알아보고 거기에 key넣기
// 		params: {
// 			//필터링한 값을 넣는 부분
// 			apiKey: '20230130E01FOCQWRVRI8B7VGUJJZW',
// 			numOfRows: 220,
// 			lightChkVal: checklist.light,
// 			grwhstleChkVal: checklist.grownType, //여기 부분이 저장한 그것을 가져와서 넣는 부분 클릭시 저장한 state를 가져다가 넣는 부분
// 			flclrChkVal: checklist.flClr,
// 			ignSeasonChkVal: checklist.flSeason,
// 			winterLwetChkVal: checklist.winterTem,
// 			waterCycleSel: checklist.waterCycle,
// 			numOfRows: '220', //이걸 안하면 한 페이이지에 뜨는게 적어서 이렇게 해줘서 와르를 뜸 나중에 표현 할 때 페이지를 나눠줘야할듯
// 		},
// 	})
// }
