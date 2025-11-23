import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const { user, company, department } = useSelector((state) => state.auth);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Welcome back, {user?.name.split(' ')[0]}!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    You are logged in as{' '}
                    <strong className="capitalize">{user?.role.replace('_', ' ')}</strong>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        Company
                    </p>
                    <p className="text-2xl font-bold mt-2">{company || '—'}</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Department
                    </p>
                    <p className="text-2xl font-bold mt-2">{department || '—'}</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Role</p>
                    <p className="text-2xl font-bold mt-2 capitalize">
                        {user?.role.replace('_manager', '').replace('_', ' ')}
                    </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">Status</p>
                    <p className="text-2xl font-bold mt-2">Active Session</p>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border p-8">
                <h2 className="text-2xl font-semibold mb-6">Session Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <span className="text-gray-500 dark:text-gray-400">Full Name</span>
                        <p className="font-medium mt-1">{user?.name}</p>
                    </div>
                    <div>
                        <span className="text-gray-500 dark:text-gray-400">Email</span>
                        <p className="font-medium mt-1">{user?.email}</p>
                    </div>
                    <div>
                        <span className="text-gray-500 dark:text-gray-400">Company</span>
                        <p className="font-medium mt-1">{company}</p>
                    </div>
                    <div>
                        <span className="text-gray-500 dark:text-gray-400">Department</span>
                        <p className="font-medium mt-1">{department}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
