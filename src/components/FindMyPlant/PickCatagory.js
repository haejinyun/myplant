import * as S from './index.styled';
import { categoryData } from '../assets/categoryData';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filter } from '../../redux/filtering';

function PickCatagory() {
	const dispatch = useDispatch();
	const checklist = useSelector((state) => state.filtering); //dispatch후 여기에다가 불러오는데 이게 빈 배열임.

	console.log('test ', checklist);
	// const handelCategory=()=>{
	//   dispatch(filter(item.name))
	// }
	// const [checkeds, setChecked] = useState({
	// 	//각 라디오 버튼이 눌릴때마다 값을 객체 안에다가 집어 넣어
	// 	//이거는 라디오 버튼이 눌렸나를 확인하기 위함임.
	// 	light: '',
	// 	grownType: '',
	// 	flClr: '',
	// 	flSeason: '',
	// 	winterTem: '',
	// 	waterCycle: '',
	// });
	// const handelCategory = (e) => {
	// 	setChecked((prev) => ({
	// 		...prev,
	// 		light: e.target.value,
	// 	}));
	// };
	return (
		<>
			<S.CategoryBlock>
				<div>
					{categoryData.map((data, idx) => (
						<S.CategoryLine key={idx}>
							<S.CategoryName>{data.title}</S.CategoryName>
							<S.Categoryitems>
								{data.items.map((item) => (
									<S.Item
										key={item.value}
										onClick={() => dispatch(filter({ name: item.eng, code: item.value }))}
									>
										{item.name}
									</S.Item> //얘가 클릭 되었을때. item.value가 저장이 되는 것
								))}
							</S.Categoryitems>
						</S.CategoryLine>
					))}
				</div>
			</S.CategoryBlock>
		</>
	);
}

export default PickCatagory;
