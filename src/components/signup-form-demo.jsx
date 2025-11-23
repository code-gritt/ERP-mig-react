'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '@/features/auth/authSlice';
import { SignupLabel } from './ui/signup_label';
import { SignupInput } from './ui/signup_input';

const COMPANIES = {
    'Acme Corp': ['Finance', 'HR', 'Sales', 'IT'],
    'Stark Industries': ['R&D', 'Defense', 'Energy', 'AI'],
    'Wayne Enterprises': ['Gotham', 'Security', 'Philanthropy'],
    Oscorp: ['Bio', 'Chemicals', 'Genetics'],
};

export default function LoginStepper() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        username: '',
        password: '',
        company: '',
        department: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const next = () => setStep(2);
    const back = () => setStep(1);
    const departments = data.company ? COMPANIES[data.company] || [] : [];

    const handleLogin = () => {
        dispatch(loginSuccess(data.username));
        navigate('/dashboard');
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="shadow-input mx-auto w-full rounded-2xl bg-white p-6 md:p-8 dark:bg-black border border-gray-200/40 dark:border-white/10">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    Enterprise Login
                </h2>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300 text-sm">
                    Secure access to your workspace
                </p>

                {/* Step Indicator */}
                <div className="flex justify-center gap-6 mt-6 mb-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center">
                            <div
                                className={cn(
                                    'w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all',
                                    step >= i
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                                )}
                            >
                                {i}
                            </div>
                            {i === 1 && (
                                <div className="w-14 sm:w-20 h-px bg-gray-300 dark:bg-gray-700 mx-3 sm:mx-4" />
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
                            <>
                                <LabelInputContainer>
                                    <SignupLabel>Username</SignupLabel>
                                    <SignupInput
                                        placeholder="john.doe"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData({ ...data, username: e.target.value })
                                        }
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <SignupLabel>Password</SignupLabel>
                                    <SignupInput
                                        type="password"
                                        placeholder="••••••••"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData({ ...data, password: e.target.value })
                                        }
                                    />
                                </LabelInputContainer>

                                <button
                                    onClick={next}
                                    className="group relative block h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:scale-[1.02] transition-all"
                                >
                                    Continue →
                                    <BottomGradient />
                                </button>
                            </>
                        ) : (
                            <>
                                <LabelInputContainer>
                                    <SignupLabel>Company</SignupLabel>
                                    <select
                                        className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] disabled:cursor-not-allowed disabled:opacity-50"
                                        value={data.company}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                company: e.target.value,
                                                department: '',
                                            })
                                        }
                                    >
                                        <option value="">Select company</option>
                                        {Object.keys(COMPANIES).map((c) => (
                                            <option key={c} value={c}>
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <SignupLabel>Department</SignupLabel>
                                    <select
                                        className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] disabled:cursor-not-allowed disabled:opacity-50"
                                        value={data.department}
                                        onChange={(e) =>
                                            setData({ ...data, department: e.target.value })
                                        }
                                        disabled={!data.company}
                                    >
                                        <option value="">
                                            {data.company
                                                ? 'Select department'
                                                : 'First select company'}
                                        </option>
                                        {departments.map((d) => (
                                            <option key={d} value={d}>
                                                {d}
                                            </option>
                                        ))}
                                    </select>
                                </LabelInputContainer>

                                <div className="flex gap-4 pt-2">
                                    <button
                                        onClick={back}
                                        className="flex-1 h-12 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
                                    >
                                        ← Back
                                    </button>
                                    <button
                                        onClick={handleLogin}
                                        disabled={!data.company || !data.department}
                                        className="flex-1 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative"
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

// Gradient bottom animation
const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
    </>
);

// Container for label + input
const LabelInputContainer = ({ children, className }) => (
    <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
);
