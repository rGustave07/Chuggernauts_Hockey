import { UserState } from "@infrastructure/store/redux/reducers/user";

interface UserRepositoryInterface {
	getUserMetaData: () => UserState["playerMetaData"];
}

export default UserRepositoryInterface;
