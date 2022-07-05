import SessionRepositoryInterface from "@infrastructure/store/interfaces/Session.Repository.Interface";
import {
	SessionState,
	SessionAction,
} from "@infrastructure/store/redux/reducers/session";

import ApplicationStore from "@infrastructure/store/redux";

// This is a data repository, the application store is exposed to it
// and from the application store it takes its specific domain of information
// IE: session and exposes that further down to the services
// No business logic should live here but repository specific actions can
// this should be a simple disconnect point for example if we were to switch
// state management tools we can easily plug and unplug here

class SessionRepository implements SessionRepositoryInterface {
	public getState(): SessionState {
		return ApplicationStore.getState().session;
	}

	public sessionDispatch(action: SessionAction): void {
		ApplicationStore.dispatch(action);
	}
}

export default new SessionRepository();
