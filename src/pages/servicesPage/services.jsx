import ServicesSection1 from './services1';
import ServicesSection2 from './services2';
import ServicesSection3 from './services3';
import ServicesSection4 from './services4';
import ServicesSection5 from './services5';
import ServicesSection6 from './services6';
import ServicesSection7 from './services7';
import ServicesSection8 from './services8';
import ServicesSection9 from './services9';

export default function Services() {
    return (
        <div className="pt-16"> {/* Add padding top to account for the fixed navbar */}
            <ServicesSection1 />
            <ServicesSection2 />
            <ServicesSection3 />
            <ServicesSection4 />
            <ServicesSection5 />
            <ServicesSection6 />
            <ServicesSection7 />
            <ServicesSection8 />
            <ServicesSection9 />
        </div>
    )
}
