import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome back, {user?.name.split(' ')[0]}!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                You are logged in as <strong>{user?.role.replace('_', ' ')}</strong>
            </p>

            <div className="mt-10 p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border">
                <h2 className="text-2xl font-semibold mb-4">Your Access</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                        <p className="text-sm text-orange-600 dark:text-orange-400">Role</p>
                        <p className="text-xl font-bold">{user?.role.replace('_manager', '')}</p>
                    </div>
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <p className="text-sm text-blue-600 dark:text-blue-400">Email</p>
                        <p className="text-xl font-bold">{user?.email}</p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                        <p className="text-sm text-green-600 dark:text-green-400">Status</p>
                        <p className="text-xl font-bold">Active Session</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-sm text-gray-500">
                Check DevTools → Application → Local Storage → <code>loginLogs</code> to see all
                login history
            </div>
        </div>
    );
}
