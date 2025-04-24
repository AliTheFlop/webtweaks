import HeroSection from '@/components/sections/Hero';
import NavigationBar from '@/components/sections/Navigation';
import Services from '@/components/sections/Services';
import OurWork from '@/components/sections/OurWork';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <NavigationBar />
            <Services />
            <OurWork />
        </div>
    );
}
