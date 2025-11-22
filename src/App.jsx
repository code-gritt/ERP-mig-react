import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Toaster } from '@/components/ui/sonner';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes/router';
import '@/index.css';

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <Toaster position="top-right" richColors />
        </Provider>
    );
}

export default App;
