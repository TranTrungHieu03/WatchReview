import bcrypt from "bcrypt"
import jwt, {SignOptions} from "jsonwebtoken"
import Config from "../config/config";

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
export const comparePassword = async (
    password: string,
    memberPassword: string,
) => {
    return bcrypt.compare(password, memberPassword);
};
export const generateToken = async (payload: {
    membername: string,
    isAdmin: boolean,
    id: string
}, option?: SignOptions & {
    secret?: string
}): Promise<string> => {
    const {secret = Config.server.SECRET_KEY_ACCESS_TOKEN, ...opts} = option || {}
    return jwt.sign(payload, secret, {
        expiresIn: "2d",
        ...opts
    });
}

export const verifyToken = async (token: string, secret?: string): Promise<{
    valid: boolean,
    expired: boolean,
    decoded: jwt.JwtPayload & { membername: string, isAdmin: boolean, id: string } | null
}> => {
    try {
        const decoded = jwt.verify(token, secret || Config.server.SECRET_KEY_ACCESS_TOKEN) as jwt.JwtPayload & {
            membername: string,
            isAdmin: boolean,
            id: string
        };
        return {valid: true, expired: false, decoded};
    } catch (error) {
        return {valid: false, expired: error.name === 'TokenExpiredError', decoded: null};
    }
}