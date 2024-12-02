<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Configuração do Backend
Desde já, é preciso copiar o arquivo _.env example_ e fazer uma cópia dele, renomeando a cópia para _.env_
Em seguida, é preciso instalar as bibliotecas e pacotes do sistema por meio do comando:
```
composer install
```
OBS: TUDO ISSO DEVE SER FEITO **dentro** DA PASTA FORMATADOR-BACK DO PROJETO
## Banco de dados
Após isso, é necessário configurar o banco de dados. Suas configurações devem ficar da seguinte maneira no arquivo _.env_:
```
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
DB_DATABASE=db_formatador.sqlite
# DB_USERNAME=root
# DB_PASSWORD=1234
```
Então, é necessário realizar o seguinte comando para que o arquivo .sqlite seja criado no projeto:
```
php artisan migrate
```
OBS: vale ressaltar que na maioria das vezes, após a execução desse passo, o Laravel não está conseguindo encontrar o arquivo gerado. Por isso, é necessário colocar o caminho absoluto do arquivo no _.env_ na maioria dos casos.
### Acionando o Seeder
O nosso projeto precisa começar com um modelo de documento de requisitos base já instanciado no banco de dados. Por isso, precisamos executar o comando que aciona o seeder:
```
php artisan db:seed class=ModeloSeeder
```
## Autenticação
A autenticação padrão é feita através de uma biblioteca chamada JWT. Para usá-la, no entanto, é necessário executar o seguinte comando:
```
php artisan jwt:secret
```
>>>>>>> d1fba4e6aefae9e730df9860576eb8fa95bb8bfc
