import BackgroundVideo from './components/BackgroundVideo';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';

export default function LaunchPage() {
    return (
        <div className="relative text-white">
            <BackgroundVideo />

            <div className="relative z-20">
                <section className="min-h-screen flex items-center justify-center px-6">
                    <HeroSection />
                </section>

                <section className="bg-black/40 backdrop-blur-sm">
                    <ContactSection />
                </section>
            </div>
        </div>
    );
}
