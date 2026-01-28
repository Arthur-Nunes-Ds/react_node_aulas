//arquivo que vai gerencia todas rotas(paginas)

/*nessario para fazer manipulação das paginas 
    com se fosse no fastapi*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//renomeando para favicon
import favicon from'./assets/favicon.png';

//importação de arquivo
import './style/app.css';

import { Helmet } from 'react-helmet';

//rotas
import Home from './page/home.jsx';
import Login from './page/login.jsx';
import Criar_conta from './page/criar_conta.jsx';
import Menus_user from './page/menus_user.jsx';
import NotFound from './page/not_page.jsx';


function App() {
  return (
    //gerenciador de rotas
    <BrowserRouter>
        {/*logo do site*/}
        <Helmet>
            <link rel="shortcut icon" href={favicon}/>
        </Helmet>
        {/* criardor das rota */}
        <Routes>
            {/* rota que nem no fastapi */}
            <Route path='/' element={<Home />} />

            <Route path='/login' element={<Login />} />

            <Route path='/criar_conta' element={<Criar_conta />} />
            
            <Route path='/menu_user' element={<Menus_user />}/>

            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default App