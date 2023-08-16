import { useEffect, useState } from 'react'
import cookies from 'browser-cookies'

export const useUserIp = () => {
    const [ip, setIp] = useState<string>('')
    
    useEffect(() => {
        const userIp = cookies.get('user-ip') ?? ''
        setIp(userIp)
    }, [])

    return ip
}