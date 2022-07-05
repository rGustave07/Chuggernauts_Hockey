import reduxStore from "./storeConfiguration";
import { SessionAction } from "./reducers/session";
import { UserAction } from "./reducers/user";

// This store level implementation is the initiation of our
// Redux implementation it exposes the redux state and dispatch to our
// interfaces

type StoreActions = SessionAction | UserAction;

class ApplicationStore {
	public getState() {
		return reduxStore.getState();
	}

	public dispatch(action: StoreActions) {
		reduxStore.dispatch(action);
	}
}

export default new ApplicationStore();
