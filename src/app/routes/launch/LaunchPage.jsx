import BackgroundVideo from './components/BackgroundVideo';
import HeroSection from './components/HeroSection';

export default function LaunchPage() {
    return (
        <>
            <BackgroundVideo />

            <main className="relative z-20 text-white">
                <section className="h-screen flex items-center justify-center px-6">
                    <HeroSection />
                </section>
            </main>
        </>
    );
}
