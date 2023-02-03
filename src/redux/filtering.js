import { createSlice } from '@reduxjs/toolkit';

export let filteringSlice = createSlice({
	name: 'filering', // 리듀서 이름
	initialState: {
		light: '1',
		grownType: '',
		flClr: '',
		flSeason: '',
		winterTem: '',
		waterCycle: '',
		cntN: '',
		myPick: false,
	}, //초기 값
	reducers: {
		//액션 형식 지정
		filter: (state, action) => {
			console.log(state);
			console.log(action.payload.name);
			let test = Object.keys(state).map(
				(
					title //지금 찾은 state의 key값이랑 같아 그러면 그 값의 value를 code로 바꿔줘야해
				) =>
					title === action.payload.name
						? title.filter((e) => (state.e = action.payload.code))
						: test
			);
			// 	let test2 = Object.keys(state)
			// 		.filter((e) => e === action.payload.name)
			// 		.map((e) => (e = action.payload.code));
			// 	return test2;
		},

		// myPick: (state, action) => {
		// 	//찜 여부 바꾸기.
		// 	return state.map((pick) =>
		// 		pick.cntN === action.payload ? { ...pick, mypick: !pick.myPick } : pick
		// 	);
		// },
	},
});

export default filteringSlice.reducer;
export const { filter, show, mypick } = filteringSlice.actions;

//? state.filter((item) => item = action.payload.code) : ''
