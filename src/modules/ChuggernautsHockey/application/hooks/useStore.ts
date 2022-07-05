import SessionService from "@domain/services/SessionService";
import UserService from "@domain/services/UserService";

import sessionRepo from "@infrastructure/store/repositories/Session.Repository";
import userRepo from "@infrastructure/store/repositories/User.Repository";
import { RootState } from "@infrastructure/store/redux/storeConfiguration";

const sessionService = new SessionService(sessionRepo);
const userService = new UserService(userRepo);

interface StoreControls {
	getState: () => RootState;
}

const useStore = (): StoreControls => {
	const getState = (): RootState => {
		return {
			user: userService.getState(),
			session: sessionService.getState(),
		};
	};

	return {
		getState,
	};
};

export default useStore;
