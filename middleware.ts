import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
    const res = NextResponse.next()
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(',').at(0) ?? 'Unkwown' 
    }
    if (ip) {
        res.cookies.set('user-ip', ip, { httpOnly: false })
    }
    return res
}