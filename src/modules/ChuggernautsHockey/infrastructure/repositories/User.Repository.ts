import UserRepositoryInterface from "@infrastructure/interfaces/User.Repository.Interface";
import ApplicationStore from "@infrastructure/store/redux";

class UserRepository implements UserRepositoryInterface {
	// Logic for retrieving data and setting data goes into this layer
	// AKA How the data is retrieved
	public getUserMetaData() {
		return ApplicationStore.getState().user.playerMetaData;
	}
}

export default UserRepository;
