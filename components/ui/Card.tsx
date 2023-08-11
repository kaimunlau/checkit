import { cn } from '@/lib/utils'

interface Props {
    children: React.ReactNode,
    className?: String | undefined
}

const Card = ({ children, className }: Props) => {
    return <div className={cn('border rounded-xl m-4 p-2', className!)}>{children}</div>
}

export default Card