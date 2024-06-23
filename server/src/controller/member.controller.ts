import {getAllMember, getMemberById, putOneMember} from "../services/member.service";
import {Request, Response} from "express";

export const memberController = {
    getAllMembers: async (_req: Request, res: Response) => {
        try {
            const members = await getAllMember()
            return res.status(200).json({members})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    updateProfile: async (req: Request, res: Response) => {
        try {
            const {memberId} = req.params
            const {name, YOB} = req.body
            const member = await getMemberById(memberId)
            if (!member) {
                return res.status(404).json({error: `Your profile does not exist`})
            }
            if (member.isAdmin){
                return res.status(403).json({error: `Admin must not update profile`})
            }
            if (!name || !YOB) {
                return res.status(400).json({error: `All field are required`})
            }
            const newMember = await putOneMember(memberId, req.body);
            return res.status(200).json({success: "Updated profile successfully", newMember});
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    getProfile: async (req: Request, res: Response) => {
        try {
            const {memberId} = req.params
            const member = await getMemberById(memberId)
            if (!member){
                return res.status(404).json({error: `Your profile does not exist`})
            }
            if (member.isAdmin){
                return res.status(403).json({error: "Admin must not see admin profile"})
            }
            return res.status(200).json({member})
        }catch (e) {
            return res.status(500).json({error: e.message});
        }
    }
}