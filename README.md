# 🏥 Medical Clinic API

API REST para gerenciamento de clínica médica desenvolvida em Node.js, Express e MongoDB.

## 🚀 Funcionalidades

- **👨‍⚕️ Médicos**: CRUD completo com autenticação e criptografia de senha
- **👥 Pacientes**: Gerenciamento de dados pessoais e médicos
- **📅 Consultas**: Agendamento e controle de status das consultas
- **💊 Receitas**: Prescrição de medicamentos com instruções detalhadas
- **📚 Swagger**: Documentação interativa da API

## 🛠️ Tecnologias

- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Documentação**: Swagger/OpenAPI
- **Autenticação**: bcrypt para senhas
- **Containerização**: Docker + Docker Compose

## 📋 Pré-requisitos

- Node.js 16+
- Docker e Docker Compose
- MongoDB (via Docker)

## 🚀 Como Executar

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd express
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o MongoDB
```bash
docker-compose up -d
```

### 4. Execute a aplicação
```bash
npm start
```

### 5. Acesse a documentação
```
http://localhost:3000/api-docs
```

## 📡 Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/health` | Status da API |
| `GET/POST` | `/api/doctors` | Gerenciar médicos |
| `GET/POST` | `/api/pacients` | Gerenciar pacientes |
| `GET/POST` | `/api/appointments` | Gerenciar consultas |
| `GET/POST` | `/api/prescriptions` | Gerenciar receitas |

## 🗄️ Estrutura do Projeto

```
src/
├── database/          # Conexão MongoDB
├── models/            # Schemas Mongoose
├── routes/            # Controllers das rotas
├── services/          # Lógica de negócio
├── swagger/           # Documentação da API
└── index.ts           # Servidor principal
```

## 🔐 Autenticação

- Senhas são criptografadas com bcrypt
- Login único para médicos
- CRM único por médico

## 📊 Banco de Dados

- **MongoDB** rodando na porta 27018
- **Usuário**: admin
- **Senha**: admin123
- **Database**: meubanco

## 🧪 Testando a API

1. **Swagger UI**: Interface interativa em `/api-docs`
2. **Postman**: Importe as rotas da documentação
3. **Insomnia**: Teste via interface gráfica

## 📝 Exemplo de Uso

### Criar um Médico
```bash
curl -X POST http://localhost:3000/api/doctors \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. João Silva",
    "login": "joao.silva",
    "password": "senha123",
    "specialty": "Cardiologia",
    "crm": "12345-SP",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999"
  }'
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

- **Documentação**: Acesse `/api-docs` na aplicação rodando


