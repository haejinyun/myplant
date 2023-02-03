import { configureStore } from '@reduxjs/toolkit';
import filteringSlice from './filtering';
export default configureStore({
	reducer: {
		filtering: filteringSlice,
	},
	//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
