import UserRepositoryInterface from "@infrastructure/interfaces/User.Repository.Interface";

export default class UserService {
	constructor(protected userRepo: UserRepositoryInterface) {}

	public getState() {
		return this.userRepo.getState();
	}
}
