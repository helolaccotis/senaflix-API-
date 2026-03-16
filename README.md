# API senaflix - node.js + Express
API REST aimples para gerenciar filmes e series
 
## Pré-requisitos
- Node.js Instalado
 
## Como rodar
 
### Instalar dependências
```bash
npm
```
 
### Iniciar o servidor
```bash
node index.js
```
 
### Acessar 
Abra o navegador em: `https://localhost:3000`
 
 
## Endpoints
 
### filmes
 
| Métodos | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específico |
| POST | `/filmes` | Cria um novo filme |

 
### series
 
| Métodos | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/serie` | Lista todos as series |
| GET | `/serie` | Busca uma serie especifica|
| POST | `/serie` | Cria uma nova series |

 
## Tecnologias
- Node.js
- Express
 
## Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
