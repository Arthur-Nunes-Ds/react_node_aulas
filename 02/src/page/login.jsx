//importa metetodo para usar no react
import { Link } from 'react-router-dom'; 

import { Helmet } from 'react-helmet';

import '../style/app.css';
import '../style/home.css';

function Login() {
  return(
    <div className='conternair_cenrte'>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <h1 className='name_page'>Logar</h1>
      <Link to='/' className='lick_button'>Voltar</Link>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default Login;