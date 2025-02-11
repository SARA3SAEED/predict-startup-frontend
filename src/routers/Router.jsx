import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // ✅ استيراد المفقود
import Home from '../pages/Home';

export default function Router() {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> } 
    ]);

    return <RouterProvider router={router} />;
}
