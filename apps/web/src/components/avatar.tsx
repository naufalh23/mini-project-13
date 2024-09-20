'use client'

import { deleteToken, getToken } from "@/lib/server"
import { useAppSelector } from "@/redux/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function AvatarComp() {
  const [token, setToken] = useState('')
    const getData = async () => {
        const res = await getToken()
        setToken(res || '')
    }
    const user = useAppSelector((state) => state.author)
    const onLogout = async () => {
        await deleteToken()
        setToken('')
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                token ? 
                // <div onClick={onLogout} className="cursor-pointer">Log Out</div> 
                <div className="flex gap-2 cursor-pointer" onClick={onLogout}>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div className="text-[14px]">{user.email}</div>
                    </div>
                </div>
                    :
                <div className="flex gap-4 items-center">
                    <Link href={'/login'} className="text-black">Login</Link>
                    <Link href={'/signup'} className="text-white btn btn-active btn-primary bg-secondary font-normal">Sign Up</Link>
                </div> 
        }
        </div>
    )
}