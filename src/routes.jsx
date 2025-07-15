import React from "react";
// Importacion del componente dashboarPage
import { DashboardPage } from "./pages/dashboardPage/DashboardPage.jsx";
import { HomePage } from "./pages/homePage/HomePage.jsx";

export const routes = [
    {path: '/', element: <HomePage/>},
    {path: '/home', element: <HomePage/>},
    {path: '/dashboard/*', element: <DashboardPage/>},
    {path: '*', element: <HomePage/>}, // Fallback para rutas no encontradas
]; 
