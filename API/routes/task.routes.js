const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/task.controller');

router.get("/tasks", getTasks);
router.post("/tasks", authMiddleware, createTask);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;