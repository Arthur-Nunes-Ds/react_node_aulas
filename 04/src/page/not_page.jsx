import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../style/App.css';

function NotFound(){
    return(
        <div className='centro'>
            <Helmet>
                <title>Pagina nao encontrada</title>
            </Helmet>

            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link to='/' className='lick_button'>Ir para Pagina principal.</Link>
        </div>
    );
}

export default NotFound