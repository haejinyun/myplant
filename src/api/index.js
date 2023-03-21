import axios from 'axios';

const TODAYFLOWER_KEY = process.env.REACT_APP_TODAYFLOWER_KEY;
export const getTodayFlower = () =>
  axios //api폴더 생성 후 각각 넣어서 분리
    .get(
      'http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=' +
        TODAYFLOWER_KEY +
        '&fMonth=&fDay='
    );
