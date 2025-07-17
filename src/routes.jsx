
import React from "react";
import { DashboardPage } from "./pages/dashboardPage/DashboardPage.jsx";
import { HomePage } from "./pages/homePage/HomePage.jsx";
import LoginForm from "./pages/auth/loginForm.jsx";

export const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/home', element: <HomePage/>},
    
    {path: '/auth/login', element: <LoginForm/>},
    {path: '*', element: <HomePage/>}, // Fallback para rutas no encontradas
]; 
