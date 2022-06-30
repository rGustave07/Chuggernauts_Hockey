export interface UserState {
	userId: number;
	userMetaData: {
		firstName: string;
		lastName: string;
	};
	playerMetaData: {
		number: number;
		handedness: string;
	};
}

export const INIT_STATE = {
	userId: 0,
	userMetaData: {
		firstName: "",
		lastName: "",
	},
	playerMetaData: {
		number: 0,
		handedness: "",
	},
};

export type UserAction = { type: "SET"; payload: UserState };

const userReducer = (
	state: UserState = INIT_STATE,
	action: UserAction
): UserState => {
	switch (action.type) {
		case "SET":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default userReducer;
