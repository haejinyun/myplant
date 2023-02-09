import { createSlice } from '@reduxjs/toolkit';

export let filteringSlice = createSlice({
	name: 'filering', // 리듀서 이름
	initialState: {
		light: '',
		grownType: '',
		flClr: '',
		flSeason: '',
		winterTem: '',
		waterCycle: '',
		cntN: '',
		myPickValue: false,
	}, //초기 값
	reducers: {
		//액션 형식 지정
		filter: (state, action) => {
			state[action.payload.name] = action.payload.code;
		},
		checkCntnsNo: (state, action) => {
			state.cntN = action.payload;
		},
		deleteall: (state, action) => {
			Object.keys(state).map((item) => {
				return (state[item] = action.payload);
			});
		},
		myPick: (state, action) => {
			return (state.myPickValue = action.payload);
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
export const { filter, checkCntnsNo, myPick, deleteall } = filteringSlice.actions;

//? state.filter((item) => item = action.payload.code) : ''
