import { createSlice } from '@reduxjs/toolkit';

export const mockUsers = {
    'admin@erp.com': {
        id: 1,
        name: 'Admin User',
        email: 'admin@erp.com',
        role: 'admin',
        permissions: ['*'],
        avatar: 'AU',
    },
    'sales@erp.com': {
        id: 2,
        name: 'Sarah Connor',
        email: 'sales@erp.com',
        role: 'sales_manager',
        permissions: ['sales:*', 'dashboard:read'],
        avatar: 'SC',
    },
    'hr@erp.com': {
        id: 3,
        name: 'John Doe',
        email: 'hr@erp.com',
        role: 'hr_manager',
        permissions: ['hr:*', 'dashboard:read'],
        avatar: 'JD',
    },
};

const loadState = () => {
    try {
        const saved = localStorage.getItem('authState');
        return saved ? JSON.parse(saved) : { user: null, isAuthenticated: false, token: null };
    } catch {
        return { user: null, isAuthenticated: false, token: null };
    }
};

const saveState = (state) => {
    try {
        localStorage.setItem('authState', JSON.stringify(state));
    } catch (err) {
        console.error('Could not save auth state', err);
    }
};

const logLogin = (user) => {
    const logs = JSON.parse(localStorage.getItem('loginLogs') || '[]');
    logs.push({
        user: user.name,
        email: user.email,
        role: user.role,
        timestamp: new Date().toISOString(),
        ip: 'localhost',
    });
    localStorage.setItem('loginLogs', JSON.stringify(logs.slice(-50)));
};

const initialState = loadState();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const email = action.payload;
            const user = mockUsers[email];

            if (!user) {
                return state;
            }

            state.user = user;
            state.isAuthenticated = true;
            state.token = 'mock-jwt-' + Date.now();

            saveState(state);
            logLogin(user);
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
            saveState(state);
        },
        restoreSession(state) {
            return loadState();
        },
    },
});

export const { loginSuccess, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
