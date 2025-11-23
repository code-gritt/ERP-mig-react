import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/features/auth/authSlice';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { LogOut, Menu, Building2, Moon, Sun } from 'lucide-react';

export default function MainLayout() {
    const { user, company, department } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    const handleLogout = () => {
        dispatch(logout());
        toast.success('See you soon!', {
            description: 'You have been securely logged out',
            duration: 3500,
        });
        navigate('/launch');
    };

    const getInitials = (name) => {
        if (!name) return '??';
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-950 dark:to-black">
            <header className="sticky top-5 z-50 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between p-3 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl shadow-xl">
                    <Link to="/dashboard" className="flex items-center gap-3 font-bold text-2xl">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl border border-orange-400/20">
                            <span className="text-white font-black text-xl">E</span>
                        </div>
                        <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                            Enterprise Portal
                        </span>
                    </Link>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-80 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl"
                        >
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-3 text-2xl">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                                        <span className="text-white font-black">E</span>
                                    </div>
                                    Portal
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-md">
                                    <span className="text-sm font-medium">Dark Mode</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={toggleTheme}
                                        className="h-9 w-9"
                                    >
                                        {isDark ? (
                                            <Sun className="h-5 w-5" />
                                        ) : (
                                            <Moon className="h-5 w-5" />
                                        )}
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-md">
                                    <Avatar className="h-14 w-14">
                                        <AvatarImage src={user?.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-xl">
                                            {getInitials(user?.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{user?.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                                <Separator />
                                <Button
                                    onClick={handleLogout}
                                    variant="destructive"
                                    className="w-full justify-start gap-3"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Log out
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="h-11 w-11 rounded-full hover:bg-accent/80 transition-all duration-300 hover:scale-110"
                            aria-label="Toggle dark mode"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-12 w-12 rounded-full ring-2 ring-transparent hover:ring-orange-500/30 transition-all group"
                                >
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={user?.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg shadow-inner">
                                            {getInitials(user?.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-80 p-5 border border-white/20 shadow-2xl bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl"
                                align="end"
                            >
                                <DropdownMenuLabel className="p-0">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-16 w-16 ring-4 ring-orange-500/10">
                                            <AvatarImage src={user?.avatar} />
                                            <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold">
                                                {getInitials(user?.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <p className="text-lg font-bold">{user?.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {user?.email}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                                                <Building2 className="w-4 h-4" />
                                                <span>
                                                    {company} • {department}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="my-4" />
                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="cursor-pointer text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-950/50"
                                >
                                    <LogOut className="mr-3 h-5 w-5" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            <main className="container max-w-7xl mx-auto p-6 md:p-10 pt-24">
                <Outlet />
            </main>
        </div>
    );
}
