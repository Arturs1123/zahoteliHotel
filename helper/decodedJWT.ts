import { jwtDecode } from "jwt-decode"

export type JwtPayload = {
    name: string
    mail: string
}

export type DecodedJWTType = {
    isAuthenticated: boolean, token?: string, name?: string, mail?: string
}

export default function decodedJWT(): DecodedJWTType {

    const token = localStorage.getItem('hotel-owner-token')
    if (token) {
        const { name, mail } = jwtDecode(token) as JwtPayload
        return {
            isAuthenticated: true,
            token,
            name,
            mail
        }
    } else {
        return {
            isAuthenticated: false,
        }
    }
}