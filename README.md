# Luna - Backend

Backend do projeto **Luna**, um sistema de suporte emergencial para mulheres. Desenvolvido com **Node.js**, **Express** e **MongoDB**, estruturado para fácil integração com aplicativos móveis em Flutter ou React Native.

## ✅ Funcionalidades

- Cadastro e autenticação de usuárias com JWT
- Gerenciamento de contatos de emergência
- Envio e histórico de alertas com localização
- Banco de dados MongoDB

---

## 🗂 Estrutura de Diretórios

```
luna-backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env
├── .env.example
├── index.js
├── package.json
```

---

## 🔐 Autenticação

### POST `/auth/register`

**Descrição:** Cadastra uma nova usuária.

**Body:**
```json
{
  "name": "Paulo Ygor",
  "email": "pauloygor@email.com",
  "password": "senha123"
}
```

**Retorno:**
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "user_id",
    "name": "Paulo Ygor",
    "email": "pauloygor@email.com"
  }
}
```

---

### POST `/auth/login`

**Descrição:** Faz login da usuária e retorna token JWT.

**Body:**
```json
{
  "email": "pauloygor@email.com",
  "password": "senha123"
}
```

**Retorno:**
```json
{
  "token": "JWT_TOKEN"
}
```

---

### GET `/auth/me`

**Descrição:** Retorna dados da usuária autenticada.  
**Header:** `Authorization: Bearer JWT_TOKEN`

**Retorno:**
```json
{
  "id": "user_id",
  "name": "Paulo Ygor",
  "email": "pauloygor@email.com"
}
```

---

## 📞 Contatos de Emergência

### POST `/contacts`

**Descrição:** Adiciona novo contato.

**Body:**
```json
{
  "name": "Mãe",
  "phone": "+5599999999999"
}
```

**Retorno:**
```json
{
  "_id": "contact_id",
  "name": "Mãe",
  "phone": "+5599999999999",
  "favorite": false,
  "user": "user_id"
}
```

---

### GET `/contacts`

**Descrição:** Lista todos os contatos da usuária autenticada.  
**Header:** `Authorization: Bearer JWT_TOKEN`

**Retorno:**
```json
[
  {
    "_id": "contact_id",
    "name": "Mãe",
    "phone": "+5599999999999",
    "favorite": true
  },
  ...
]
```

---

### PATCH `/contacts/:id/favorite`

**Descrição:** Alterna o status de favorito (`true` ou `false`) do contato especificado pelo ID.  
**Header:** `Authorization: Bearer JWT_TOKEN`

**Retorno:**
```json
{
  "message": "Contato marcado como favorito"
}

ou

{
  "message": "Contato removido dos favoritos!"
}
```

---

### DELETE `/contacts/:id`

**Descrição:** Deleta um contato.

**Retorno:**
```json
{
  "message": "Contato deletado com sucesso"
}
```

---

## 🚨 Alertas de Emergência

### POST `/alert`

**Descrição:** Envia um alerta com localização.  
**Header:** `Authorization: Bearer JWT_TOKEN`

**Body:**
```json
{
  "location": {
    "lat": -23.5505,
    "lng": -46.6333
  }
}
```

**Retorno:**
```json
{
  "_id": "alert_id",
  "location": {
    "lat": -23.5505,
    "lng": -46.6333
  },
  "timestamp": "2025-05-10T15:30:00Z",
  "user": "user_id"
}
```

---

### GET `/alert/history`

**Descrição:** Lista histórico de alertas da usuária autenticada.  
**Header:** `Authorization: Bearer JWT_TOKEN`

**Retorno:**
```json
[
  {
    "_id": "alert_id",
    "location": {
      "lat": -23.5505,
      "lng": -46.6333
    },
    "timestamp": "2025-05-10T15:30:00Z"
  },
  ...
]
```

---

## 🧪 Testes com Postman

- Configure variáveis globais para `{{base_url}}` e `{{token}}`
- Envie o token como `Bearer {{token}}` no header para rotas protegidas

---

## 📦 Instalação

```bash
git clone https://github.com/pauloygor7/Luna-backend.git
cd luna-backend
npm install
npm run dev
```

Crie um arquivo `.env` com:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=sua_chave_secreta
```

---

## ✅ Tecnologias

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticação
- Postman para testes

---
