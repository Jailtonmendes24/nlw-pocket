# 📍 Nearby

Aplicativo desenvolvido durante o evento **NLW Pocket** da [Rocketseat](https://www.rocketseat.com.br/), com o objetivo de listar restaurantes próximos, exibir suas localizações no mapa e permitir o escaneamento de QR Codes para resgatar cupons ou acessar informações exclusivas.

---

## 🧩 Funcionalidades

- Mapa interativo com localização dos restaurantes
- Filtros por tipo de estabelecimento
- Leitor de QR Code integrado
- Exibição das informações após a leitura do código

---

## 🖼️ Preview

<div align="center">
  <img src="mobile/assets/screenshots/screen1.png" width="150" />
  <img src="mobile/assets/screenshots/screen2.png" width="150" />
  <img src="mobile/assets/screenshots/screen3.png" width="150" />
  <img src="mobile/assets/screenshots/screen4.png" width="150" />
</div>

---

## 🚀 Como executar o projeto

Esse repositório contém dois diretórios:

- `mobile`: Aplicativo desenvolvido em **React Native com Expo**
- `api`: Backend desenvolvido em **Node.js**

### ▶️ Executando o frontend
 📱 Mobile (React Native)

```bash
# Clone o repositório
git clone https://github.com/Jailtonmendes24/nlw-pocket

# Acesse a pasta do projeto
cd mobile

# Instale as dependências
npm install

# Inicie o app com o Expo
npx expo start
````
💡 É recomendado utilizar o aplicativo Expo Go no celular para escanear o QR Code e visualizar o app.

### ▶️ Executando API (Backend)


```bash
# Acesse a pasta da API
cd api

# Instale as dependências
npm install

# Inicie o servidor
npm start 
```
## 🔧 Configurações
- Após iniciar o backend, atualize a URL da API no arquivo <br> "mobile/src/services/api.ts" com o endereço local da sua máquina, por exemplo:
```bash
export const api = axios.create({
  baseURL: 'http://192.168.0.X:3333',
});
```

## 🛠️ Tecnologias utilizadas

### 📱 Mobile

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Axios](https://axios-http.com/)

### 🖥️ Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)



### Feito com 💜 durante a NLW Pocket da Rocketseat 🚀
