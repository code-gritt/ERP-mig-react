import { createSlice } from '@reduxjs/toolkit';

const mockUsers = {
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

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const email = action.payload;
            state.user = mockUsers[email] || null;
            state.isAuthenticated = true;
            state.token = 'mock-jwt-token-123';
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
