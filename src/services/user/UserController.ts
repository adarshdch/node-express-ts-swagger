import { getUsers } from "./providers/UserDataProvider";

export const getAllUsers = async () => {
    return await getUsers();
};