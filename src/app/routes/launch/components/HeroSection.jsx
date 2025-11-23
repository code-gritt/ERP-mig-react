export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:tex t-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
                HELLO SOFTWARE
            </h1>

            <p className="mt-8 text-3xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-wide">
                Launching Soon
            </p>

            <div className="mt-12 w-32 h-px bg-white/30 mx-auto" />

            <p className="mt-10 text-lg md:text-xl text-white/70 font-light max-w-2xl">
                The future of enterprise solutions is being crafted. Get ready.
            </p>
        </div>
    );
}
