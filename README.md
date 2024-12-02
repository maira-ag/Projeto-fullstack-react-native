# Echo - Sistema de Streaming de Músicas

Bem-vindo ao **Echo**! Este é um projeto fullstack simples de um sistema de streaming de músicas, com um aplicativo mobile e um servidor backend. Siga as instruções abaixo para configurar e rodar o projeto.

---

## 📦 Instalação

### 1. **Instalar as dependências**
Primeiro, instale as dependências do projeto tanto para o **mobile** quanto para o **server**.

Abra o terminal e navegue até as pastas do projeto:

```bash
# Dentro da pasta 'mobile'
cd mobile
npm install

# Dentro da pasta 'server'
cd ../server
npm install
```

## 🛠️ Configuração do Banco de Dados

### 2. Criar a Database

No **pgAdmin**, crie uma nova database com o nome `echo`:

1. Acesse o pgAdmin.
2. Clique com o botão direito sobre "Databases" e selecione "Create" > "Database".
3. No campo "Database", insira `echo` e clique em "Save".

## ⚙️ Configuração do Servidor

### 3. Descomentar a função `criarTabelas`

No arquivo `server/index.js`, descomente a linha que contém a função `criarTabelas` para que o banco de dados seja configurado corretamente na primeira execução. O código se parecerá com isso:

```javascript
// Descomente a linha abaixo para criar as tabelas no banco de dados
criarTabelas();  
```

### 4. Rodando o Servidor

No terminal, dentro da pasta **server**, execute o comando abaixo para iniciar o servidor:

```bash
npm run dev
```
### 5. Comentar a função `criarTabelas`

Após rodar o servidor pela primeira vez, comente novamente a função `criarTabelas` no arquivo `index.js` para evitar que as tabelas sejam recriadas a cada reinicialização do servidor:

```javascript
// Comente novamente a linha abaixo
// criarTabelas();
```

## 📱 Rodando o App Mobile

Agora, você pode executar o aplicativo mobile utilizando o Expo:

```bash
# Dentro da pasta 'mobile'
npx expo start
```

---

**Feito com 💻 e ❤ por maira]**  
[GitHub Profile](https://github.com/maira-ag)
