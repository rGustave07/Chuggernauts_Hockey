export interface SessionState {
	tokens: {
		refreshToken: string;
		sessionToken: string;
	};
	userType: string;
}

export const INIT_STATE = {
	tokens: {
		refreshToken: "",
		sessionToken: "",
	},
	userType: "",
};

export enum SessionActions {
	SET_TOKENS = "SET_TOKENS",
	GENERAL_SET = "GENERAL_SET",
}

type SetTokensAction = {
	type: SessionActions.SET_TOKENS;
	payload: SessionState["tokens"];
};

type GeneralSetAction = {
	type: SessionActions.GENERAL_SET;
	payload: SessionState;
};

export type SessionAction = SetTokensAction | GeneralSetAction;

const sessionReducer = (
	state: SessionState = INIT_STATE,
	action: SessionAction
): SessionState => {
	switch (action.type) {
		case SessionActions.GENERAL_SET: {
			return {
				...state,
				...action.payload,
			};
		}
		case SessionActions.SET_TOKENS: {
			return {
				...state,
				tokens: {
					sessionToken: action.payload.sessionToken,
					refreshToken: action.payload.refreshToken,
				},
			};
		}
		default: {
			return state;
		}
	}
};

export default sessionReducer;
