# API de Faculdades

API RESTful para consulta de dados de faculdades brasileiras, incluindo informações do ENADE e detalhes institucionais.

## Requisitos

- Node.js (versão 12 ou superior)
- MongoDB (versão 4.0 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone [url-do-repositorio]
cd [nome-do-diretorio]
```

2. Instale as dependências
```bash
npm install
```

3. Configure o banco de dados
- Certifique-se de que o MongoDB está rodando
- A conexão padrão está configurada para: `mongodb://127.0.0.1:27017/config`
- A coleção deve se chamar `Faculdades`

4. Inicie o servidor
```bash
npm start
```

O servidor iniciará na porta 3000 por padrão.

## Endpoints

### Listar Faculdades
```
GET /api/faculdades
```

#### Parâmetros de Query
| Parâmetro | Tipo    | Descrição                                    | Exemplo          |
|-----------|---------|----------------------------------------------|------------------|
| page      | Number  | Número da página (padrão: 1)                 | ?page=2          |
| limit     | Number  | Itens por página (padrão: 100, max: 100)     | ?limit=50        |
| estado    | String  | Sigla do estado                              | ?estado=SP       |
| cidade    | String  | Nome da cidade                               | ?cidade=São Paulo|
| siglaIES  | String  | Sigla da instituição                         | ?siglaIES=USP    |

#### Exemplo de Resposta
```json
{
    "faculdades": [...],
    "currentPage": 1,
    "totalPages": 50,
    "totalItems": 5000,
    "itemsPerPage": 100
}
```

### Buscar Faculdade por ID
```
GET /api/faculdades/:id
```

#### Parâmetros de URL
| Parâmetro | Tipo    | Descrição          |
|-----------|---------|-------------------|
| id        | String  | ID da faculdade   |

#### Exemplo de Resposta
```json
{
    "Ano": 2022,
    "Código da Área": 123,
    "Área de Avaliação": "Computação",
    "Nome da IES": "Universidade Example",
    "Sigla da IES": "UEX",
    ...
}
```

## Exemplos de Uso

### Listar primeiras 100 faculdades
```bash
curl http://localhost:3000/api/faculdades
```

### Filtrar faculdades de São Paulo com paginação
```bash
curl http://localhost:3000/api/faculdades?estado=SP&page=1&limit=50
```

### Buscar faculdades de uma IES específica
```bash
curl http://localhost:3000/api/faculdades?siglaIES=USP
```

### Combinar múltiplos filtros
```bash
curl http://localhost:3000/api/faculdades?estado=SP&cidade=São Paulo&siglaIES=USP&page=1&limit=50
```

## Tratamento de Erros

A API retorna os seguintes códigos de status:

- 200: Sucesso
- 404: Recurso não encontrado
- 500: Erro interno do servidor

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request
