import reduxStore from "./storeConfiguration";

class ApplicationStore {
	// Store level implementation

	public getState() {
		return reduxStore.getState();
	}
}

export default new ApplicationStore();
