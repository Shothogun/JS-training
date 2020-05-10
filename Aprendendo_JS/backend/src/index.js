const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');
// Aplicacao em execucao
const app = express();

// Funcionalidade que ocorrera
// para toda requisicao
app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(request, response, next){
  const {method, url} = request;

  const logLabel = `[${method.toUpperCase()} ${url}]`;

  console.log(logLabel);

  return next();
}

function validateProjectId(request, response, next){
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({error: 'Invalid Project ID'});
  }

  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

// Criação de um método para retornar algo na página
app.get('/projects', (request, response) => {
  // Parametros query de requisicao
  const {title, month} = request.query;

  const results = title 
    ? projects.filter(projects => projects.title.includes(title))
    : projects


  // Retornar mensagem
  // return response.send('Hello World');

  // Retornar Jsons
  return response.json(results);
})

// Possiveis metodos na aplicacao
app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = {id: uuid(), title, owner};

  projects.push(project);

  return response.json(project);
})

app.put('/projects/:id', (request, response) => {
  // Parametros de rota de requisicao
  const { id } = request.params;
  const {title, owner} = request.body;

  // Busca
  const projectIndex = projects.findIndex(project => project.id === id);

  // Verificacao de existencia
  if(projectIndex < 0){
    return response.status(400).json({ error: 'Project not found'});
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  // Busca
  const projectIndex = projects.findIndex(project => project.id === id);

  // Verificacao de existencia
  if(projectIndex < 0){
    return response.status(400).json({ error: 'Project not found'});
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
})

// Acessar aplicacao pela rota 3333
// E função automatica executada quando 
// sobe o servidor
app.listen(3333, () => {
  console.log('🦙 Back-end started! 🦙');
});
