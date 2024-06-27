import {IMember} from "../interfaces/member.interface";
import Member from "../models/member.model";

export const getAllMember = async (): Promise<IMember[]> => {
    try {
        return await Member.find({isAdmin: false}).sort({createdAt: -1}).exec()
    } catch (e) {
        throw new Error("Failed to find members: " + e);
    }
}
export const getMemberById = async (id: string): Promise<IMember> => {
    try {
        return await Member.findById(id).exec()
    } catch (e) {
        throw new Error("Failed to find a member: " + e);
    }
}
export const putOneMember = async (id: string, data: Partial<IMember>): Promise<IMember> => {
    try {
        return await Member.findByIdAndUpdate(id, data).exec()
    } catch (e) {
        throw new Error("Failed to update profile: " + e);
    }
}
export const getMemberByMemberName = async (membername: string): Promise<IMember> => {
    try {
        return await Member.findOne({membername: membername}).exec()
    } catch (e) {
        throw new Error("Failed to get member: " + e);
    }
}
export const postMember = async (data: IMember): Promise<IMember> => {
    try {
        const newData: IMember = new Member(data)
        return await newData.save()
    } catch (e) {
        throw new Error("Failed to insert account: " + e);
    }
}