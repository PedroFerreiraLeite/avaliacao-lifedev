# 📚 Avaliação DW3 - MiniDevBlog

## 🏛️ Sobre o Projeto

Este projeto doi desenvolvido como parte de uma avaliação da disciplina **Desenvolvimento Web 3**. A proposta era criar um blog funcional e moderno com **React.js** e **Firebase**, permitindo autenticação segura, criação de postagens e uma navegação fluida e responsiva.

---

## 🔑 Funcionalidades
- ✅ Cadastro de novos usuários
- ✅ Login com e-mail e senha
- ✅ Autenticação com Google (OAuth)
- ✅ Validação de senha com mensagens de erro claras
- ✅ Logout seguro
- ✅ Enterface responsiva com **CSS Modules**
- ✅ Estrutura de código organizada com hooks personalizados
- ✅ Publicação automática com Firebase Hosting

---

### 🔐 Detalhes da Autenticação

A autenticação de usuários é feita com o Firebase, utilizando os seguintes métodos:

- 📩 **Cadastro:** `createUserWithEmailAndPassword`
- ✏️ **Atualização de perfil:** `updateProfile`
- 🔐 **Login tradicional:** `signInWithEmailAndPassword`
- 🌐 **Login via Google:** `signInWithPopup` + `GoogleAuthProvider`

---

### 🎨 Estilização

- Estilização feita com **CSS Modules** para encapsulamento e reutilização de estilos
- Layout responsivo adaptado para mobile e desktop
- Feedback visual em botões

---

### 📦 Deploy no Firebase Hosting

Para publicar a aplicação, foram utilizados os seguintes comandos:

---

# Instalar dependências
npm install

# Gerar build de produção
npm run build

# Login no Firebase CLI
firebase login

# Inicializar projeto Firebase (responder com "dist" como pasta pública)
firebase init

# Realizar o deploy
firebase deploy

---

### 👨‍💻 Informações do Aluno
Nome: Pedro Ferreira Leite
GitHub: PedroFerreiraLeite
Curso: Desenvolvimento de Software Multiplataforma
Professor: Victor Icoma

---

testes concluídos:
![Captura de tela 2025-05-09 233749](https://github.com/user-attachments/assets/0585f6b6-11e9-4af6-86e1-8d032d153c2f)
