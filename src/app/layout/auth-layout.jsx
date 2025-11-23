import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">E</span>
                    </div>
                </div>

                <div className="bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                    <div className="p-8 sm:p-10">
                        <Outlet />
                    </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    © 2025 Your Company. All rights reserved.
                </div>
            </div>
        </div>
    );
}
