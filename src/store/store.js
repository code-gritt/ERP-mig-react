import { configureStore } from '@reduxjs/toolkit';
import authReducer, { restoreSession } from '@/features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

store.dispatch(restoreSession());
