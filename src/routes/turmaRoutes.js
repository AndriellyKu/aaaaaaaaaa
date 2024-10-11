const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');
const { verificarProfessor } = require('../middlewares/auth');

// Rota para criar uma nova turma, usando o middleware para verificar o professor
router.post('/criar-turma', verificarProfessor, turmaController.criarTurma);

module.exports = router;
