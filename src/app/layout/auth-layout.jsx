import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div
            className="min-h-screen  bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900
                    flex items-center justify-center px-6 py-12"
        >
            <div className="w-full max-w-lg">
                <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12">
                    <Outlet />
                </div>

                <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2025 Your Company. All rights reserved.
                </div>
            </div>
        </div>
    );
}
