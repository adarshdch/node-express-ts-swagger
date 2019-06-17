import request from "request-promise";
import dotenv from "dotenv";

dotenv.config();

export const getUsers = async () => {
    const response = [{userId: 'ABC1234'}];
    return response;
};