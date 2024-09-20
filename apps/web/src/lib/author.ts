import { IUserLogin, IUserReg } from "@/type/author"

const base_url = process.env.BASE_URL_API || "http://localhost:8000/api"

export const regUser = async (data: IUserReg) => {
    const res = await fetch(`${base_url}/user`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const result = await res.json()
    return { result, ok: res.ok }
}

export const loginUser = async (data: IUserLogin) => {
    const res = await fetch(`${base_url}/user/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const result = await res.json()
    return { result, ok: res.ok }
}

export const verifyUser = async (token: string) => {
    const res = await fetch(`${base_url}/user/verify`, {
        method: "PATCH",
        headers: {
            "Userization": `Bearer ${token}`
        }
    })
    const result = await res.json()
    return { result, ok: res.ok }
}