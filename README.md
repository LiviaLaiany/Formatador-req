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
