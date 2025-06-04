import HeroSection from './HeroSection';
import SharkTank from './SharkTank';
import ServiceCards from './ServiceCards';
import Metrics from './Metrics';
import Clients from './Clients';
import SuccessStories from './SuccessStories';
import Partners from './Partners';
import ManBehind from './ManBehind';
import Media from './Media';
import BeforeAfterSlides from './BeforeAfterSlides';
import StartupShowcase from './StartupShowcase';

export default function Home() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Content with higher z-index to appear above particles */}
            <div className="relative z-10 pt-16 backdrop-blur-[1px]"> 
                <HeroSection />
                <SharkTank />
                <StartupShowcase />
                <ServiceCards />
                <BeforeAfterSlides />
                <Metrics />
                <Clients />
                <SuccessStories />
                <Partners />
                <ManBehind />
                <Media />
            </div>
        </div>
    )
}