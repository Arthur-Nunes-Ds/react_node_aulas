//import o react e o nessario para fazer manipulação no html
import React from 'react';
import ReactDOM from 'react-dom/client';
//importa a função do app.jsx
import App from "./app.jsx";

/*ReactDOM.createRoot -> criar a raiz do react
document.getElementById('root') -> procura o documento com id = 'root'
.render -> fala para o react carrega a pagina

<App /> -> meu componente
<React.StrictMode> -> fala qual componente ser rederizado
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)