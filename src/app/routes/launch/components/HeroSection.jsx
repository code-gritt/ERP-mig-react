import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-5xl font-bold tracking-tighter text-white drop-shadow-2xl 
                   md:text-7xl lg:text-8xl xl:text-9xl 
                   bg-clip-text bg-gradient-to-b from-white to-white/70"
            >
                ERP APPLICATION
            </motion.h1>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LayoutTextFlip
                    text="Reinventing"
                    words={[
                        'Enterprise Workflow',
                        'Business Automation',
                        'Digital Transformation',
                        'Operational Excellence',
                        'The Future of ERP',
                    ]}
                    duration={3500}
                />
            </div>

            <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                className="mt-12 text-4xl font-light tracking-wide text-white/90 
                   md:text-6xl lg:text-7xl"
            >
                Launching Soon
            </motion.p>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '8rem' }}
                transition={{ delay: 1, duration: 1.2 }}
                className="mt-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-12 max-w-3xl text-lg font-light text-white/70 
                   md:text-xl lg:text-2xl leading-relaxed"
            >
                The most powerful, beautiful, and intelligent enterprise platform ever built.
                <br className="hidden md:block" />
                <span className="text-primary font-semibold">Get ready.</span>
            </motion.p>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M12 19v-7m0 0V5m0 7l-5-5m5 5l5-5"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
