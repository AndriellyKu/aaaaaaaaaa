import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import AlunoHome from './pages/Home/AlunoHome.jsx';
import ProfessorHome from './pages/Home/ProfessorHome.jsx';
import Maker from './pages/Maker/Maker.jsx';
import SalaProfessor from './pages/Sala/SalaProfessor.jsx';
import PrivateRoute from './components/PrivateRoute'; // Importando o componente PrivateRoute

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/cadastro", 
        element: <Cadastro/>
    },
    {
        path: "/alunoHome",
        element: (
            <PrivateRoute>
                <AlunoHome/>
            </PrivateRoute>
        ) // Protegendo a rota AlunoHome
    },
    {
        path: "/professorHome",
        element: (
            <PrivateRoute>
                <ProfessorHome/>
            </PrivateRoute>
        ) // Protegendo a rota ProfessorHome
    },
    {
        path: "/maker",
        element: (
            <PrivateRoute>
                <Maker/>
            </PrivateRoute>
        ) // Protegendo a rota Maker
    },
    {
        path: "/salaprofessor",
        element: (
            <PrivateRoute>
                <SalaProfessor/>
            </PrivateRoute>
        ) // Protegendo a rota SalaProfessor
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
