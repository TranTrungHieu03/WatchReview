import {getAllMember, getMemberById, getMemberByMemberName, putOneMember} from "../services/member.service";
import {Request, Response} from "express";

export const memberController = {
    getAllMembers: async (_req: Request, res: Response) => {
        try {
            const members = await getAllMember();
            return res.status(200).json({members});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    },
    updateProfile: async (req: Request, res: Response) => {
        try {
            const {memberId} = req.params;
            const {name, YOB} = req.body;
            const member = await getMemberById(memberId);
            if (!name || !YOB) {
                return res.status(400).json({message: `All fields are required`});
            }
            if (!member) {
                return res.status(404).json({message: `Your profile does not exist`});
            }
            if (member.isAdmin) {
                return res.status(403).json({message: `Admin must not update profile`});
            }


            const newMember = await putOneMember(memberId, req.body);
            res.status(200).json({message: "Updated profile successfully", newMember});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    },
    getProfile: async (req: Request, res: Response) => {
        try {
            const {memberId} = req.params;
            const member = await getMemberById(memberId);

            if (!member) {
                return res.status(404).json({message: `Your profile does not exist`});
            }
            if (member.isAdmin) {
                return res.status(403).json({message: "Admin must not see admin profile"});
            }

            res.status(200).json({member});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    },
    getProfileByMembername: async (req: Request, res: Response) => {
        try {
            const {membername} = req.params;
            const member = await getMemberByMemberName(membername)

            if (!member) {
                return res.status(404).json({message: `Your profile does not exist`});
            }
            if (member.isAdmin) {
                return res.status(403).json({message: "Admin must not see admin profile"});
            }

            res.status(200).json({member});
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
};
