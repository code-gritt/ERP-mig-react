import { Toaster as Sonner } from 'sonner';
import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
} from 'lucide-react';

const Toaster = () => {
    return (
        <Sonner
            position="top-right"
            closeButton
            richColors
            duration={4000}
            toastOptions={{
                classNames: {
                    toast: `
            group font-medium text-base
            border shadow-lg
            data-[type=success]:bg-emerald-500/10 data-[type=success]:text-emerald-700 dark:data-[type=success]:text-emerald-400
            data-[type=error]:bg-red-500/10 data-[type=error]:text-red-700 dark:data-[type=error]:text-red-400
            data-[type=info]:bg-blue-500/10 data-[type=info]:text-blue-700 dark:data-[type=info]:text-blue-400
            data-[type=warning]:bg-amber-500/10 data-[type=warning]:text-amber-700 dark:data-[type=warning]:text-amber-400
            data-[type=loading]:bg-orange-500/10 data-[type=loading]:text-orange-700 dark:data-[type=loading]:text-orange-400
          `,
                    title: 'font-semibold',
                    description: 'text-sm opacity-90 mt-1',
                    actionButton:
                        'bg-white dark:bg-zinc-800 text-foreground font-medium hover:opacity-90',
                    cancelButton: 'bg-muted hover:bg-muted/80',
                    closeButton: `
            hover:bg-white/20 dark:hover:bg-white/10
            text-foreground/60 hover:text-foreground
          `,
                    icon: 'shrink-0',
                    content: 'flex items-start gap-3',
                },
            }}
            icons={{
                success: <CircleCheckIcon className="size-5 mt-0.5" />,
                info: <InfoIcon className="size-5 mt-0.5" />,
                warning: <TriangleAlertIcon className="size-5 mt-0.5" />,
                error: <OctagonXIcon className="size-5 mt-0.5" />,
                loading: <Loader2Icon className="size-5 mt-0.5 animate-spin" />,
            }}
        />
    );
};

export { Toaster };
