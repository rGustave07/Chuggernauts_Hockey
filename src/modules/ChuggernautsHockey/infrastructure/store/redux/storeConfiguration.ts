/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserReducer from "@infrastructure/store/redux/reducers/user";
import SessionReducer from "@infrastructure/store/redux/reducers/session";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, compose } from "redux";

// Figure out how to link redux devtools
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
	}
}

const rootReducer = combineReducers({
	user: UserReducer,
	session: SessionReducer,
});

const store = configureStore({ reducer: rootReducer, devTools: {} });

export type RootState = ReturnType<typeof store.getState>;
export default store;
