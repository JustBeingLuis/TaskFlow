const { GoogleGenerativeAI } = require("@google/generative-ai");

// Inicializar Gemini con la API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Controlador para parsear tareas desde texto natural
exports.parseTasks = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Text is required" });
    }

    // Obtener el modelo Gemini Pro
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    // Crear el prompt para la IA
    const prompt = `
Analiza el siguiente texto y extrae TODAS las tareas mencionadas.
Devuelve SOLO un array JSON válido, sin texto adicional.

Formato exacto: [{"title": "tarea 1", "completed": false}, {"title": "tarea 2", "completed": false}]

Texto del usuario: "${text}"

Reglas:
- Cada tarea debe tener "title" (string) y "completed" (boolean, siempre false)
- NO agregues introducción ni explicación
- NO uses markdown
- SOLO el array JSON
`;

    // Generar respuesta
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();

    // Limpiar la respuesta (a veces la IA agrega markdown)
    let cleanedResponse = responseText
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    // Parsear el JSON
    const tasks = JSON.parse(cleanedResponse);

    // Validar que sea un array
    if (!Array.isArray(tasks)) {
      throw new Error("Invalid response format");
    }

    // Validar estructura de cada tarea
    const validTasks = tasks.filter(
      (task) =>
        task.title &&
        typeof task.title === "string" &&
        typeof task.completed === "boolean"
    );

    res.json({
      success: true,
      tasks: validTasks,
      count: validTasks.length,
    });
  } catch (error) {
    console.error("Error parsing tasks with AI:", error);
    res.status(500).json({
      error: "Failed to parse tasks",
      details: error.message,
    });
  }
};
