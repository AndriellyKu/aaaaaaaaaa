const Turma = require('../models/Turma');
const User = require('../models/User');

// Função para criar uma nova turma
exports.criarTurma = async (req, res) => {
    const { nome, turma, professorId, background } = req.body;

    try {
        // Verifica se o professor existe
        const professor = await User.findById(professorId);
        if (!professor || professor.userType !== 'professor') {
            return res.status(400).json({ message: 'Professor inválido.' });
        }

        // Cria a nova turma
        const novaTurma = new Turma({
            nome,
            turma,
            professor: professorId,
            background,
        });

        // Salva a turma no banco de dados
        await novaTurma.save();
        res.status(201).json(novaTurma);
    } catch (error) {
        console.error('Erro ao criar turma:', error);
        res.status(500).json({ message: 'Erro ao criar turma.' });
    }
};
