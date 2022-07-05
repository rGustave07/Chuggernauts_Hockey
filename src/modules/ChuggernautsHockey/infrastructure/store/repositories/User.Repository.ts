import UserRepositoryInterface from "@infrastructure/store/interfaces/User.Repository.Interface";
import ApplicationStore from "@infrastructure/store/redux";
import {
	UserAction,
	UserState,
} from "@infrastructure/store/redux/reducers/user";

// Refer to SessionRepository for information on this implementation
class UserRepository implements UserRepositoryInterface {
	public userDispatch(action: UserAction) {
		ApplicationStore.dispatch(action);
	}

	public getState(): UserState {
		return ApplicationStore.getState().user;
	}
}

export default new UserRepository();
