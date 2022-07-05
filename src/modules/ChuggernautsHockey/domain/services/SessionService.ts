import SessionRepositoryInterface from "@infrastructure/interfaces/Session.Repository.Interface";

// Services are fully separated from store/repository level implementations
// Business logic should live here to avoid being tightly coupled to a
// state management tool like redux, mobx, or even localstorage
export default class SessionService {
	constructor(protected sessionRepo: SessionRepositoryInterface) {}

	public getState() {
		return this.sessionRepo.getState();
	}
}
