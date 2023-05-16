 <h2>API em Node.js usando Express</h2>
 <hr>
Esta é uma documentação básica para uma API em Node.js usando o framework Express. 
<hr>

<h2>Configuração do servidor</h2>

O servidor é configurado usando o Express. Ele cria uma instância do aplicativo Express e define a porta em que o servidor será iniciado.

```Javascript
const app = express();

app.listen(3333, () => {
  console.log("Backend started at http://localhost:3333");
});
```

<h2>Roteamento</h2>

O roteamento é definido usando o objeto routes criado com express.Router(). As rotas são definidas usando diferentes métodos HTTP, como GET, POST, PUT e PATCH.

```Javascript
const routes = express.Router();
```

Quando essa rota é acessada, a função de retorno de chamada é executada e envia a resposta "Hello World".

<h3>Uso das rotas</h3>
As rotas definidas no objeto routes são usadas no aplicativo Express com o método app.use().

``` Javascript
app.use(routes)
```
Isso garante que as rotas definidas em routes sejam aplicadas a todas as solicitações recebidas pelo servidor.

<h2>Uso da API</h2>
Após iniciar o servidor, você pode interagir com a API usando as rotas definidas.
<hr>
<h2>Rota raiz ("/")</h2>
Método: GET
Descrição: Retorna a mensagem "Hello World"
URL: http://localhost:3333/
Você pode fazer uma solicitação GET para essa rota usando uma ferramenta como cURL ou Postman.
<hr>
Exemplo de solicitação cURL:

```
curl http://localhost:3333/
```