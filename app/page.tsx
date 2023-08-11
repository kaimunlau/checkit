import Current from '@/components/Current'
import DateLocation from '@/components/DateLocation'
import Footer from '@/components/Footer'
import Forecast from '@/components/Forecast'
import Header from '@/components/Header'
import Linkback from '@/components/Linkback'
import Search from '@/components/Search'
import WeatherAlert from '@/components/WeatherAlert'

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <main>
                <Search />
                <DateLocation />
                <Current />
                <Forecast />
                <WeatherAlert />
                <Linkback />
            </main>
            <Footer />
        </div>
    )
}
