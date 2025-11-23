// src/pages/Dashboard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// FocusCards — 5 columns on lg+
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={`rounded-3xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 w-full transition-all duration-300 ease-out ${
            hovered !== null && hovered !== index ? 'blur-sm scale-[0.98]' : ''
        }`}
    >
        <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 w-full h-full"
        />
        <div
            className={`absolute inset-0 bg-black/60 flex items-end py-10 px-8 transition-opacity duration-300 ${
                hovered === index ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 drop-shadow-lg">
                {card.title}
            </div>
        </div>
        <Link to={card.url} className="absolute inset-0 z-10" aria-label={`Open ${card.title}`} />
    </div>
));

Card.displayName = 'Card';

export function FocusCards({ cards }) {
    const [hovered, setHovered] = React.useState(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto w-full px-4">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}

// All ERP Modules
const erpModuleCards = [
    {
        title: 'Sales',
        src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format',
        url: '/modules/sales',
    },
    {
        title: 'Inventory',
        src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format',
        url: '/modules/inventory',
    },
    {
        title: 'Finance',
        src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format',
        url: '/modules/finance',
    },
    {
        title: 'HR',
        src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format',
        url: '/modules/hr',
    },
    {
        title: 'Procurement',
        src: 'https://images.unsplash.com/photo-1586528116023-1a9f5e6d39c4?q=80&w=2940&auto=format',
        url: '/modules/procurement',
    },
    {
        title: 'CRM',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format',
        url: '/modules/crm',
    },
    {
        title: 'Analytics',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format',
        url: '/modules/analytics',
    },
    {
        title: 'Projects',
        src: 'https://images.unsplash.com/photo-1519389951296-5a9e63c8e4f7?q=80&w=2940&auto=format',
        url: '/modules/projects',
    },
    {
        title: 'Support',
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format',
        url: '/modules/support',
    },
    {
        title: 'Manufacturing',
        src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf9dc?q=80&w=2940&auto=format',
        url: '/modules/manufacturing',
    },
];

export default function Dashboard() {
    const { user, company, department } = useSelector((state) => state.auth);
    const userRole = user?.role || '';

    const allowedModules = erpModuleCards.filter((card) => {
        if (userRole === 'admin') return true;
        if (userRole === 'sales_manager') return ['Sales', 'CRM'].includes(card.title);
        if (userRole === 'hr_manager') return card.title === 'HR';
        return false;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
            {/* Greeting */}
            <div className="text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                    Welcome back, {user?.name.split(' ')[0]}!
                </h1>
                <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
                    Managing{' '}
                    <strong className="text-orange-600 dark:text-orange-400">{company}</strong> •{' '}
                    {department}
                </p>
            </div>

            {/* Single Row: Stats + Session Details */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/* Company */}
                <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        Company
                    </p>
                    <p className="text-xl font-bold mt-1">{company || '—'}</p>
                </div>

                {/* Department */}
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Department
                    </p>
                    <p className="text-xl font-bold mt-1">{department || '—'}</p>
                </div>

                {/* Role */}
                <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Role</p>
                    <p className="text-xl font-bold mt-1 capitalize">
                        {user?.role.replace('_manager', '').replace('_', ' ')}
                    </p>
                </div>

                {/* Status */}
                <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">Status</p>
                    <p className="text-xl font-bold mt-1">Active Session</p>
                </div>

                {/* Session Details — merged into the row */}
                <div className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Session Details
                    </p>
                    <div className="mt-2 space-y-1 text-sm">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Your Modules Title */}
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                Your Modules
            </h2>

            {/* FocusCards — 5 per row, fits perfectly */}
            {allowedModules.length > 0 ? (
                <FocusCards cards={allowedModules} />
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                        No modules assigned to your role.
                    </p>
                </div>
            )}
        </div>
    );
}
