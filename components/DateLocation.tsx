'use client'

import { useUserIp } from '@/hooks/useUserIp'
import Card from './ui/Card'

const Today = () => {
    const today: String = new Date().toDateString()
    return <p>{today}</p>
}

const Location = () => {
    const ip = useUserIp()
    return <p>{ip}</p>
}

const DateLocation = () => {
    return (
        <Card className='flex justify-around'>
            <Today />
            <Location />
        </Card>
    )
}

export default DateLocation