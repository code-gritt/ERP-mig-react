import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12">
            <Outlet />
        </div>
    );
}
