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

export type SessionAction = { type: "SET"; payload: SessionState };

const sessionReducer = (
	state: SessionState = INIT_STATE,
	action: SessionAction
): SessionState => {
	switch (action.type) {
		case "SET": {
			return {
				...state,
				...action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default sessionReducer;
