import HomeSection1 from './Home1';
import HomeSection2 from './Home2';
import HomeSection3 from './Home3';
import HomeSection4 from './Home4';
import HomeSection5 from './Home5';
import HomeSection6 from './Home6';
import HomeSection7 from './Home7';
import HomeSection8 from './Home8';
import Particles from '../../components/ParticlesBackground';

export default function Home() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Particles background with fixed position and lower z-index */}
            <div className="fixed inset-0 z-0">
                <Particles
                    particleColors={['#6366f1', '#818cf8', '#a5b4fc']} 
                    particleCount={350}
                    particleSpread={15}
                    speed={0.2}
                    particleBaseSize={200}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                    cameraDistance={15}
                    sizeRandomness={2}
                />
            </div>
        
            {/* Content with higher z-index to appear above particles */}
            <div className="relative z-10 pt-16 backdrop-blur-[1px]"> 
                <HomeSection1 />
                <HomeSection2 />
                <HomeSection3 />
                <HomeSection4 />
                <HomeSection5 />
                <HomeSection6 />
                <HomeSection7 />
                <HomeSection8 />
            </div>
        </div>
    )
}
