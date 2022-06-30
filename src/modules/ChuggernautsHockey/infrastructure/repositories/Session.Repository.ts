import SessionRepositoryInterface from "@infrastructure/interfaces/Session.Repository.Interface";
import { SessionState } from "@infrastructure/store/redux/reducers/session";

import ApplicationStore from "@infrastructure/store/redux";

class SessionRepository implements SessionRepositoryInterface {
	// Logic for retrieving data and setting data goes into this layer
	// AKA How the data is retrieved
	public getSessionData(): SessionState {
		return ApplicationStore.getState().session;
	}
}

export default SessionRepository;
