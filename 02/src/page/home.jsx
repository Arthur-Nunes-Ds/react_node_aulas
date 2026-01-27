//importa metetodo para usar no react
import { Link } from 'react-router-dom'; 

import { Helmet } from 'react-helmet';

import '../style/app.css';
import '../style/home.css'

function Home() {
  return(
    <div className='conternair_cenrte'>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h1 className='name_page'>Home</h1>
      <Link to='/criar_conta' className='lick_button'>Criar Conta</Link>
      <Link to='/login' className='lick_button'>Logar Conta</Link>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default Home;