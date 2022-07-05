import {
	SessionAction,
	SessionState,
} from "@infrastructure/store/redux/reducers/session";

interface SessionRepositoryInterface {
	getState: () => SessionState;
	sessionDispatch: (action: SessionAction) => void;
}

export default SessionRepositoryInterface;
