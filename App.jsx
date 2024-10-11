import React from 'react';
import React, { useState, useEffect } from 'react';
import HeaderH from './components/headerH'; // Certifique-se de que o caminho está correto
import jwt from 'jsonwebtoken';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Decodifique o token para obter as informações do usuário
            const decoded = jwt.decode(token);
            setUser(decoded); // Armazena as informações do usuário
        }
    }, []);

    return (
        <div>
            <HeaderH 
                profilePic={user?.profilePic} // Passe a URL da imagem do perfil
                username={user?.username} // Passe o nome do usuário
            />
            {/* Outros componentes ou rotas */}
        </div>
    );
};

export default App;
