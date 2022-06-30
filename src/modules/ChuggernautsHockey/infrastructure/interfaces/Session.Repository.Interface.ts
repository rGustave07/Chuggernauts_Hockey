import { SessionState } from "@infrastructure/store/redux/reducers/session";

interface SessionRepositoryInterface {
	getSessionData: () => SessionState;
}

export default SessionRepositoryInterface;
