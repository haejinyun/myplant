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
  },
});

export default filteringSlice.reducer;
export const { filter, checkCntnsNo, deleteall } = filteringSlice.actions;
