export default function BackgroundVideo() {
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="min-w-full min-h-full w-full h-full object-cover"
                    poster="/poster.jpg"
                >
                    <source src="/video21.mp4" type="video/mp4" />

                    <div className="w-full h-full bg-gradient-to-b from-black via-slate-900 to-black" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
            </div>

            <div className="relative z-10 min-h-screen"></div>
        </>
    );
}
