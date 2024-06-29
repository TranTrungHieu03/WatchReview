import {NextFunction, Request, Response} from "express";
import {getMemberByMemberName, postMember} from "../services/member.service";
import {comparePassword, generateToken} from "../utils/jwt";

export const authController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {name, membername, password, YOB} = req.body;
            if (!name || !membername || !password || !YOB) {
                return res.status(400).send({message: 'Missing required fields'});
            }
            const accountExisting = await getMemberByMemberName(membername);
            if (accountExisting) {
                return res.status(400).send({message: 'Account already exists'})
            }
            const account = await postMember(req.body)
            return res.status(201).json({message: "Sign up successfully"})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {membername, password} = req.body;
            if (!membername || !password) {
                return res.status(400).send({message: 'Missing required fields'});
            }
            const account = await getMemberByMemberName(membername);
            if (!account) {
                return res.status(400).send({message: 'Membername is wrong'});
            }
            const isValid = await comparePassword(password, account.password);
            if (!isValid) {
                return res.status(400).send({message: 'Password is wrong'});
            }
            const token = await generateToken({
                membername: account.membername,
                isAdmin: account.isAdmin,
                id: account._id
            });
            // res.cookie("accessToken", token, {
            //     httpOnly: true,
            //     // secure: false,
            //     maxAge: 1000 * 60 * 60,
            //     // sameSite: "strict"
            // });
            return res.status(200).json({
                message: "Sign in successfully",
                token: token
            })
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    logout: async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie("accessToken");
            return res.status(200).json({message: "Sign out successfully"})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }
}