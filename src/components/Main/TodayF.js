import * as S from './index.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import kakaoImg from '../../components/assets/kakaoLogo.png';

function TodatF() {
	const [today, setToday] = useState({
		img: '',
		name: '',
		flang: '',
		fcontent: '',
	});

	const kakaoButton = () => {
		if (window.Kakao) {
			const kakao = window.Kakao;

			if (!kakao.isInitialized()) {
				kakao.init('be0af23d4d6e4c082e4698b4f3ae5bf1');
			}

			kakao.Link.sendScrap({
				requestUrl: 'http://localhost:3000/', // 페이지 url
				templateId: 89769, // 메시지템플릿 번호
				templateArgs: {
					PLANT: today.img, // 꽃 사진
					TodayF: today.name, //오늘의 꽃 이름
					TodayFStory: today.flang, // 꽃말 ${THUMB}
					PROFILE: today.img, // 프로필 이미지 주소 ${PROFILE}
				},
			});
		}
	};

	const TodayFlower = () => {
		axios
			.get(
				'http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=F2tl5d%2FWnzODJeNwAy%2BpHFW5WgA57X7fcaTNPse%2FrEUfd1StDJWqJglkWMjT04qOa%2BYCyp0plNd%2BrEJCFgFsFw%3D%3D&fMonth=&fDay='
			)
			.then((res) => {
				const dataset = res.data;
				const filterData = new XMLParser().parseFromString(dataset).children;
				console.log(filterData[0].children[3]);
				setToday((prev) => ({
					...prev,
					img: filterData[0].children[3].children[16].value.slice(0, -1),
					name: filterData[0].children[3].children[3].value,
					flang: filterData[0].children[3].children[6].value,
					fcontent: filterData[0].children[3].children[7].value.slice(0, -1),
				}));
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		TodayFlower();
	}, []);
	return (
		<>
			<S.TodayFlower>
				<S.Title>TODAY'S FLOWER</S.Title>
				<S.FlowerImg src={today.img} alt='' />
				<S.FlowerName>{today.name}</S.FlowerName>
				<S.Flowerbox>
					<S.Flowerlang>{today.flang}</S.Flowerlang>
					<S.FlowerContent>{today.fcontent}</S.FlowerContent>
				</S.Flowerbox>
				{/* Include Kakao sdk */}
				<S.kakaoBtn id='kakaotalk-sharing-btn' onClick={kakaoButton}>
					<S.kakaoImg src={kakaoImg} alt='kakaoImg' />
				</S.kakaoBtn>
			</S.TodayFlower>
		</>
	);
}
export default TodatF;
