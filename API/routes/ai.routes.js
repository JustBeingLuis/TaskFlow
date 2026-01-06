const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');
const authMiddleware = require('../middlewares/auth');

// POST /ai/parse-tasks - Parsear tareas desde texto natural
// Requiere autenticación
router.post('/parse-tasks', authMiddleware, aiController.parseTasks);

module.exports = router;