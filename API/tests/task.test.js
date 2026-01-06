const request = require('supertest');
const app = require('../index');

describe('GET /tasks', () => {
  it('debe responder con un array de tareas', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe('POST /tasks', () => {
  it('debe crear una nueva tarea', async () => {
    const nuevaTarea = {
      title: 'Tarea de prueba',
      completed: false
    };
    const res = await request(app).post('/tasks').send(nuevaTarea);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data[0]).toHaveProperty('title', nuevaTarea.title.toLowerCase());
    expect(res.body.data[0]).toHaveProperty('completed', false);

    // Guarda el id para las siguientes pruebas
    global.tareaId = res.body.data[0].id;
  });
});

describe('POST /tasks sin titulo', () => {
    it('debe devolver error si el título está vacío', async () => {
    const res = await request(app).post('/tasks').send({ title: '', completed: false });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('error');
    }); 
});

describe('POST /tasks sin completed', () => {
    it('debe devolver error si el campo completed está vacío', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Tarea sin completed' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('error');
    }); 
});

describe('PUT /tasks/:id', () => {
  it('debe actualizar una tarea existente', async () => {
    const actualizacion = {
      title: 'Tarea actualizada',
      completed: true
    };
    const res = await request(app).put(`/tasks/${global.tareaId}`).send(actualizacion);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data[0]).toHaveProperty('title', actualizacion.title);
    expect(res.body.data[0]).toHaveProperty('completed', true);
  });
});

describe('PUT /tasks sin titulo', () => {
    it('debe devolver error si el título está vacío', async () => {
    const res = await request(app).put(`/tasks/${global.tareaId}`).send({ title: '', completed: false });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('error');
    }); 
});

describe('PUT /tasks sin completed', () => {
    it('debe devolver error si el campo completed está vacío', async () => {
    const res = await request(app).put(`/tasks/${global.tareaId}`).send({ title: 'Tarea sin completed' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('error');
    }); 
});

describe('DELETE /tasks/:id', () => {
  it('debe eliminar una tarea existente', async () => {
    const res = await request(app).delete(`/tasks/${global.tareaId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
  });
});