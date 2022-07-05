import {
	UserAction,
	UserState,
} from "@infrastructure/store/redux/reducers/user";

interface UserRepositoryInterface {
	userDispatch: (action: UserAction) => void;
	getState: () => UserState;
}

export default UserRepositoryInterface;
