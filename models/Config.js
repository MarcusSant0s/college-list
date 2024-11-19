const mongoose = require('mongoose');

// Definindo o esquema para os dados de uma faculdade
const FaculdadeSchema = new mongoose.Schema({
  Ano: Number,
  "Código da Área": Number,
  "Área de Avaliação": String,
  "Grau Acadêmico": String,
  "Código da IES": Number,
  "Organização Acadêmica": String,
  "Categoria Administrativa": String,
  "Código do Curso": Number,
  "Modalidade de Ensino": String,
  "Nº de Concluintes Inscritos": Number,
  "Nº de Concluintes Participantes": Number,
  "Nota Bruta - FG": String,
  "Nota Padronizada - FG": String,
  "Nota Bruta - CE": String,
  "Nota Padronizada - CE": String,
  "Conceito Enade (Contínuo)": String,
  "Conceito Enade (Faixa)": Number,
  Observação: String,
  "Nome da IES": String,
  "Sigla da IES": String,
  "Sigla da UF": String,
  "Código do Município": Number,
  "Município do Curso": String,
});

// Especificando explicitamente o nome da coleção como "Faculdades"
module.exports = mongoose.model('Faculdade', FaculdadeSchema, 'Faculdades');