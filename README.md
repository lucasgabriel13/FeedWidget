# ![Logo](https://user-images.githubusercontent.com/44211093/167265183-c4cc5dd7-7e98-4caa-959b-c71a04c4a875.png)
![FeedWidget-mockup](https://user-images.githubusercontent.com/44211093/167265050-cfdb8355-1a17-48db-adef-415a5cb8cb10.png)


## 💻 O projeto
Essa aplicação foi desenvolvida na NLW Return, promovida pela [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de cadastrar os Feedbacks dos usuários de uma aplicação web ou mobile. Durante a semana foram desenvolvidos tanto o Front-end (Web e Mobile) quanto o Back-end da aplicação.

Os Feedbacks enviados são armazenados no banco de dados da aplicação e enviados ao e-mail do responsável da aplicação através do protocolo SMTP.

No desenvolvimento do Back-end foi utilizado o princípio SOLID, visando diminuir o acoplamento entre classes e separar responsabilidades como forma de melhorar o código da aplicação desenvolvida. Outra ferramenta utilizado no desenvolvimento do Back-end foi o JEST, para a realização de testes unitários na API criada.

Já no Front-end toda a aplicação foi desenvolvida pensando em trazer uma maior **Acessibilidade** aos usuários, então foi utilizada o [HeadlessUI](https://headlessui.dev/), uma library que nos fornece componentes prontos para utilizarmos em nossa aplicação.

Você pode conferir a aplicação: [Clique aqui 🖱️](https://feedwidget.vercel.app/).

## ✨ Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

### Front-end
- [ ] Vite
- [ ] React.js
- [ ] React Native
- [ ] Typescript
- [ ] Tailwindcss
- [ ] Axios
- [ ] html2canvas
- [ ] Acessibilidade com HeadlessUI

### Back-end
- [ ] Node.js
- [ ] Prisma
- [ ] Typescript
- [ ] Express
- [ ] nodemailer
- [ ] Jest
- [ ] SOLID

## 🚀Como executar

Clone o repositório:
```bash
git clone https://github.com/lucasgabriel13/FeedWidget.git
```

### Executar o Back-end
Para executar o back-end da aplicação, siga as seguintes instruções: (DICA:  faça isso antes de executar o front-end)
```bash
# Entre na pasta server
cd server

# Instale as dependências
yarn

# Vá até a pasta prisma, abra o arquivo schema.prisma e altere o provider
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

# Apague a pasta migrations e depois execute
npx prisma migrate dev

# Execute a aplicação
yarn dev

```

### Executar o Front-end
Para executar o front-end da aplicação, siga as seguintes instruções:
```bash
# Entre na pasta web
cd web

# Instale as dependências
yarn

# Crie um .env.local e insira a URL do seu Back-end (Olhe no arquivo .env.example)
VITE_API_URL=http://localhost:3333

# Execute a aplicação
yarn dev
```
O app estará disponível no seu browser pelo endereço http://localhost:3000.

📕 Licença
Este projeto está sob a licença [MIT](https://github.com/lucasgabriel13/FeedWidget/blob/master/LICENCE).

---

<p align="center">Desenvolvido com 💜 por Lucas Gonçalves e Rocketseat</p>
