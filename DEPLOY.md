# 🚀 Deploy na Vercel

## Passo a Passo

### 1. Criar repositório no GitHub

```bash
# Inicializar o git
git init

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Initial commit - Portfolio QA Engineer"

# Criar branch main
git branch -M main

# Adicionar remote (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/portifolio.git

# Enviar para o GitHub
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse **https://vercel.com**
2. Faça login com sua conta do **GitHub**
3. Clique em **"Add New Project"**
4. Selecione o repositório do seu portfólio
5. Clique em **"Deploy"**

### 3. Configurar domínio (opcional)

- Na Vercel, vá em **Settings > Domains**
- Adicione seu domínio personalizado (ex: `rafaelfelipe.com`)

---

## ✅ Pronto!

Seu portfólio estará disponível em:
- `https://seu-projeto.vercel.app`

## 🔄 Atualizações automáticas

A cada `git push`, a Vercel fará o deploy automaticamente!

---

## 📊 Variáveis de Ambiente (se necessário)

Se precisar adicionar variáveis de ambiente:
1. Vercel > Project > Settings > Environment Variables
2. Adicione as variáveis necessárias

---

## 🎯 Comandos úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Start em produção (local)
npm start

# Lint
npm run lint
```
