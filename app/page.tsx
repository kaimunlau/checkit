import Card from '@/components/ui/Card'

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='border-b p-2'>
                <h1>Check.it</h1>
            </header>
            <main>
                <Card className='my-8'>Search for location</Card>
                <Card className='flex justify-around'>
                    <p>Mon. 10 June</p>
                    <p>Lyon</p>
                </Card>
                <Card className='flex justify-around'>
                    <p>icon</p>
                    <p>28.5ºc</p>
                </Card>
                <Card className='flex justify-around'>
                    <div>
                        <p>date</p>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>date</p>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>date</p>
                        <p>icon</p>
                    </div>
                </Card>
                <Card>Weather alert!</Card>
                <Card className='my-8'>Data provided by WeatherAPI</Card>
            </main>
            <footer></footer>
        </div>
    )
}
