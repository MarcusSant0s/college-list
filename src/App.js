import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './components/UserList';
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const faculdadeRoutes = require('./routes/faculdadeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao MongoDB
connectDB();

// Middleware para permitir requisições CORS e interpretar JSON
app.use(cors());
app.use(express.json());

// Rotas para consulta de faculdades
app.use('/api', faculdadeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
