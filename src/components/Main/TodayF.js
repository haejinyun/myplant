import * as S from './index.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';

function TodatF() {
	const [today, setToday] = useState({
		img: '',
		name: '',
		flang: '',
		fcontent: '',
	});

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
				<S.Title>TODAY FLOWER</S.Title>
				<S.FlowerImg src={today.img} alt='' />
				<S.FlowerName>{today.name}</S.FlowerName>
				<S.Flowerbox>
					<S.Flowerlang>{today.flang}</S.Flowerlang>
					<S.FlowerContent>{today.fcontent}</S.FlowerContent>
				</S.Flowerbox>
			</S.TodayFlower>
		</>
	);
}
export default TodatF;
