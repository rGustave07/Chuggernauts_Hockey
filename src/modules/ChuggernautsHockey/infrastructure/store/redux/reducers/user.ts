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

export enum UserActions {
	GENERAL_SET = "GENERAL_SET",
	SET_PLAYER_METADATA = "SET_PLAYER_METADATA",
}

type GeneralSetAction = {
	type: UserActions.GENERAL_SET;
	payload: UserState;
};

type SetPlayerMeta = {
	type: UserActions.SET_PLAYER_METADATA;
	payload: UserState["playerMetaData"];
};

export type UserAction = GeneralSetAction | SetPlayerMeta;

const userReducer = (
	state: UserState = INIT_STATE,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActions.GENERAL_SET:
			return { ...state, ...action.payload };
		case UserActions.SET_PLAYER_METADATA:
			return { ...state, playerMetaData: { ...action.payload } };
		default:
			return state;
	}
};

export default userReducer;
