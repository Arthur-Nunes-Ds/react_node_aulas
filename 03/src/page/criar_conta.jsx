//importa metetodo para usar no react
import { Link } from 'react-router-dom'; 

import { Helmet } from 'react-helmet';

import '../style/app.css';
import '../style/home.css'

function Criar_conta() {
  return(
    <div className='conternair_cenrte'>
        {/*alteração do titulo*/}
        <Helmet>
            <title>Criar Conta</title>
        </Helmet>

        <h1 className='name_page'>Criar conta</h1>
        <Link to='/' className='lick_button'>Voltar</Link>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default Criar_conta;