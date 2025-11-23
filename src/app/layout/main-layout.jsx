import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-6">
                    <Outlet />
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
                <div className="px-4 py-3 text-xs text-muted-foreground text-center sm:px-6">
                    ERP Shell v1.0 • {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
}
