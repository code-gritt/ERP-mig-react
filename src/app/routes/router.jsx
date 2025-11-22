import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from '@/app/layout/main-layout.jsx';
import AuthLayout from '@/app/layout/auth-layout.jsx';
import Login from '@/app/routes/login/login.jsx';
import Dashboard from '@/app/routes/dashboard/dashboard.jsx';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<AuthLayout />}>
                <Route
                    path="login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
            </Route>

            <Route
                element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="dashboard" element={<Dashboard />} />
                <Route index element={<Navigate to="/dashboard" replace />} />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
    )
);
