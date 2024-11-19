const express = require('express');
const mongoose = require('mongoose');
const faculdadesRoutes = require('./routes/api');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/config', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

// Middlewares
app.use(express.json());
app.use('/api', faculdadesRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
