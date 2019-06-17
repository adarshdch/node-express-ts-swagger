import { Request, Response } from "express";
import { getAllUsers } from "./UserController";
import { checkSearchParams } from "../../middleware/checks";

export default [
    {
        path: "/api/v1/users",
        method: "get",
        handler: [
            checkSearchParams, // <-- this line
            async ({ query }: Request, res: Response) => {
                const result = await getAllUsers();
                res.status(200).send(result);
            }
        ]
    }
];