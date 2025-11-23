'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '@/features/auth/authSlice';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SignupLabel } from './ui/signup_label';
import { SignupInput } from './ui/signup_input';

const step1Schema = z.object({
    username: z.string().min(3, 'Username too short'),
    password: z.string().min(6, 'Password too weak'),
});

const COMPANIES = {
    'Acme Corp': ['Finance', 'HR', 'Sales', 'IT'],
    'Stark Industries': ['R&D', 'Defense', 'Energy', 'AI'],
    'Wayne Enterprises': ['Gotham', 'Security', 'Philanthropy'],
    Oscorp: ['Bio', 'Chemicals', 'Genetics'],
};

// Import mockUsers directly from slice
import { mockUsers } from '@/features/auth/authSlice';

export default function LoginStepper() {
    const [step, setStep] = useState(1);
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [usernameInput, setUsernameInput] = useState(''); // Track input value

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(step1Schema),
        mode: 'onChange',
    });

    const departments = company ? COMPANIES[company] || [] : [];

    const onStep1 = handleSubmit((data) => {
        setUsernameInput(data.username);
        setStep(2);
    });

    const onLogin = () => {
        if (!company || !department) return;

        const input = usernameInput.trim().toLowerCase();

        let foundUser = null;
        for (const email in mockUsers) {
            const user = mockUsers[email];
            if (
                user.email.toLowerCase() === input ||
                user.name.toLowerCase() === input ||
                user.email.split('@')[0].toLowerCase() === input
            ) {
                foundUser = user;
                break;
            }
        }

        if (foundUser) {
            dispatch(loginSuccess(foundUser.email));
            navigate('/dashboard');
        } else {
            alert(
                'User not found. Try:\n• admin@erp.com\n• Admin User\n• sales@erp.com\n• hr@erp.com'
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="w-full max-w-md bg-white dark:bg-black rounded-3xl p-8 shadow-2xl border border-gray-200/40 dark:border-white/10">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    Enterprise Login
                </h2>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300 text-sm">
                    Secure access to your workspace
                </p>

                <div className="flex justify-center gap-6 mt-6 mb-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center">
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                                    step >= i
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                                }`}
                            >
                                {i}
                            </div>
                            {i === 1 && (
                                <div className="w-20 h-px bg-gray-300 dark:bg-gray-700 mx-4" />
                            )}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-6"
                    >
                        {step === 1 ? (
                            <form onSubmit={onStep1}>
                                <div className="space-y-6">
                                    <div>
                                        <SignupLabel>Username</SignupLabel>
                                        <SignupInput
                                            {...register('username')}
                                            placeholder="admin@erp.com or Admin User"
                                            onChange={(e) => setUsernameInput(e.target.value)}
                                        />
                                        {errors.username && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.username.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <SignupLabel>Password</SignupLabel>
                                        <SignupInput
                                            {...register('password')}
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                        {errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="group relative mt-8 block h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                                >
                                    Continue
                                    <BottomGradient />
                                </button>
                            </form>
                        ) : (
                            <>
                                <div className="space-y-6">
                                    <div>
                                        <SignupLabel>Company</SignupLabel>
                                        <Select onValueChange={setCompany} value={company}>
                                            <SelectTrigger className="w-full h-12 shadow-input bg-gray-50 dark:bg-zinc-800">
                                                <SelectValue placeholder="Select company" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.keys(COMPANIES).map((c) => (
                                                    <SelectItem key={c} value={c}>
                                                        {c}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <SignupLabel>Department</SignupLabel>
                                        <Select
                                            onValueChange={setDepartment}
                                            value={department}
                                            disabled={!company}
                                        >
                                            <SelectTrigger className="w-full h-12 shadow-input bg-gray-50 dark:bg-zinc-800">
                                                <SelectValue
                                                    placeholder={
                                                        company
                                                            ? 'Select department'
                                                            : 'First select company'
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {departments.map((d) => (
                                                    <SelectItem key={d} value={d}>
                                                        {d}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-1 h-12 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={onLogin}
                                        disabled={!company || !department}
                                        className="group relative flex-1 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
                                    >
                                        Sign In
                                        <BottomGradient />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
    </>
);
