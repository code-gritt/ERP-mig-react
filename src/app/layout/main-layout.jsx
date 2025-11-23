import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/features/auth/authSlice';
import { toast } from 'sonner';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Building2 } from 'lucide-react';

export default function MainLayout() {
    const { user, company, department } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <header className="border-b border-gray-200/60 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 sticky top-0 z-40">
                <div className="flex items-center justify-between h-16 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                            <span className="text-white font-black text-lg">E</span>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                            Enterprise Portal
                        </h1>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="relative h-11 w-11 rounded-full ring-2 ring-transparent hover:ring-orange-500/30 transition-all duration-300 group"
                            >
                                <Avatar className="h-11 w-11">
                                    <AvatarImage src={user?.avatar} />
                                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg shadow-inner">
                                        {getInitials(user?.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            className="w-72 p-4 border border-gray-200/50 dark:border-white/10 shadow-2xl"
                            align="end"
                            sideOffset={8}
                        >
                            {/* User Info */}
                            <DropdownMenuLabel className="p-0">
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-14 w-14">
                                        <AvatarImage src={user?.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xl font-bold">
                                            {getInitials(user?.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <p className="text-base font-semibold text-foreground">
                                            {user?.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {user?.email}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 font-medium">
                                            <Building2 className="w-3.5 h-3.5" />
                                            <span>
                                                {company} • {department}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuLabel>

                            <DropdownMenuSeparator className="my-3" />

                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="cursor-pointer text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors group"
                            >
                                <LogOut className="mr-3 h-4 w-4" />
                                <span>Log out</span>
                                <kbd className="ml-auto text-xs opacity-60">Esc</kbd>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            <main className="container max-w-7xl mx-auto p-6 md:p-10">
                <Outlet />
            </main>
        </div>
    );
}
