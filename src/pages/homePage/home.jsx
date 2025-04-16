import HomeSection1 from './home1';
import HomeSection2 from './home2';
import HomeSection3 from './home3';
import HomeSection4 from './home4';
import HomeSection5 from './home5';
import HomeSection6 from './home6';
import HomeSection7 from './home7';
import HomeSection8 from './home8';
import HomeSection9 from './home9';

export default function Home() {
    return (
        <div className="pt-16"> {/* Add padding top to account for the fixed navbar */}
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />
            <HomeSection8 />
            <HomeSection9 />
        </div>
    )
}
