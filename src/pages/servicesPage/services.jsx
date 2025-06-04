import ServicesSection1 from './Services1';
import PitchDeckCreation from './PitchDeckCreation';
import BusinessPlan from './BusinessPlan';
import FinancialModeling from './FinancialModeling';
import FounderGrooming from './FounderGrooming';
import InvestorNetwork from './InvestorNetwork';
import VideoPitch from './VideoPitch';
import Process from './Process';
import Testimonial from './Testimonial';

export default function Services() {
    return (
        <div className="relative w-full min-h-screen">
            <div className="pt-16"> {/* Add padding top to account for the fixed navbar */}
                <ServicesSection1 />
                <PitchDeckCreation />
                <BusinessPlan />
                <FinancialModeling />
                <FounderGrooming />
                <InvestorNetwork />
                <VideoPitch />
                <Process />
                <Testimonial />
            </div>
        </div>
    )
}
