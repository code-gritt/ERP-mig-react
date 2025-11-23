import { Button } from '@/components/ui/button';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();

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
                animate={{ width: '16rem' }}
                transition={{ delay: 1, duration: 1.4 }}
                className="mt-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="mt-16"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 max-w-3xl text-lg font-light text-white/70 
                   md:text-xl lg:text-2xl leading-relaxed"
                >
                    The most powerful, beautiful, and intelligent enterprise platform ever built.
                    <br className="hidden md:block" />
                    <Button
                        onClick={() => navigate('/login')}
                        size="lg"
                        className="h-14 mt-5 px-12 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 
                     hover:from-orange-600 hover:to-orange-700 text-white shadow-xl 
                     hover:shadow-orange-500/40 transition-all duration-300"
                    >
                        Try now
                    </Button>
                </motion.p>
            </motion.div>

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <svg
                    className="h-7 w-7 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
