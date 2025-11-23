export default function BackgroundVideo() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
                poster="/poster.jpg"
            >
                <source src="/video21.mp4" type="video/mp4" />
                <div className="w-full h-full bg-gradient-to-b from-black via-slate-900 to-black" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
        </div>
    );
}
