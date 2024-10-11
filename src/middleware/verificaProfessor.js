// Middleware para verificar se o usuário é professor
const verificarProfessor = (req, res, next) => {
    if (req.user.userType !== 'professor') {
        return res.status(403).json({ message: 'Acesso negado. Apenas professores podem realizar essa ação.' });
    }
    next();
};

module.exports = verificarProfessor;
