const supabase = require('../bd-conection');
const { createClient } = require('@supabase/supabase-js');

// Obtener todas las tareas
async function getTasks(req, res) {
  const { data, error } = await supabase.from("tasks").select("*");
  if (error)
    return res.status(400).json({ success: false, error: error.message, data: null });
  res.status(200).json({ success: true, data, error: null });
}

// Crear una tarea
async function createTask(req, res) {
  const { title, completed } = req.body;
  const user_id = req.user.id;
  const token = req.headers['authorization'].split(' ')[1];

  // Crea un cliente Supabase con el JWT del usuario
  const userSupabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ success: false, error: 'El campo "title" es obligatorio y debe ser un texto.', data: null });
  }
  if (typeof completed !== "boolean") {
    return res.status(400).json({ success: false, error: 'El campo "completed" es obligatorio y debe ser booleano.', data: null });
  }
  const normalizedTitle = title.toLowerCase();
  const { data, error } = await userSupabase
    .from("tasks")
    .insert([{ title: normalizedTitle, completed, user_id }])
    .select();
  if (error) return res.status(400).json({ success: false, error: error.message, data: null });
  res.status(201).json({ success: true, data, error: null });
}

// Actualizar una tarea
async function updateTask(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const token = req.headers['authorization'].split(' ')[1];

  // Crea un cliente Supabase con el JWT del usuario
  const userSupabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ success: false, error: 'El campo "title" es obligatorio y debe ser un texto.', data: null });
  }
  if (typeof completed !== "boolean") {
    return res.status(400).json({ success: false, error: 'El campo "completed" es obligatorio y debe ser booleano.', data: null });
  }
  const { data, error } = await userSupabase
    .from("tasks")
    .update({ title, completed })
    .eq("id", id)
    .select();
  if (error) return res.status(400).json({ success: false, error: error.message, data: null });
  res.status(200).json({ success: true, data, error: null });
}

// Eliminar una tarea
async function deleteTask(req, res) {

  const token = req.headers['authorization'].split(' ')[1];

  // Crea un cliente Supabase con el JWT del usuario
  const userSupabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );

  const { id } = req.params;
  const { data, error } = await userSupabase.from("tasks").delete().eq("id", id);
  if (error) return res.status(400).json({ success: false, error: error.message, data: null });
  res.status(200).json({ success: true, data, error: null });
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};