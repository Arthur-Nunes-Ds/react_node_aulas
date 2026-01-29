//importa metetodo para usar no react
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { Helmet } from 'react-helmet';

//incones do react -> https://react-icons.github.io/
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

import '../style/app.css';
import '../style/home.css';
import '../style/login.css';

import api from '../api/public.jsx';

function Login() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [showsenha, setShowsenha] = useState(false);
  const [fedeback_vaule, setVauleFedeback] = useState("");
  const [fedeback_cor, setCorFedeback] = useState("");
  const mudar_para = useNavigate();

  return(
    <div className='conternair_cenrte'>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <h1 className='name_page'>Logar</h1>
      <label> Email
        <input
          type='text'
          value={email}
          placeholder='test@email.com'
          onChange={(e) => setEmail(e.target.value)}
          style={{width: "190px"}}
          name="email"
        /> 
      </label>

      <label> Senha
        <div className='button_menu'>
          <input
            /*tipo dela
                var_bolean ? ação1 : ação2
                é o mesmo de if interado
              */
            type={showsenha ? 'text' : 'password'}
            //valor do input
            value={senha}
            //o que vem escrido por padrão
            placeholder='senha'
            /*para mostra que o user estar digitando
                (e) é o enven que ativa ele
                => é como se fosse uma lambada em python*/
            onChange={(e) => setSenha(e.target.value)}
          />
            <button onClick={(e) => setShowsenha(!showsenha)} 
          className='showsenha'>
          {showsenha ? <FaRegEyeSlash/> : <IoEyeOutline/>}
            </button>
        </div>
      </label>

      {/* style= {} e´um "css" */}
      <p style={{ color: fedeback_cor}} className="fedeback">{fedeback_vaule}</p>
      <div className='button_menu'>
        <Link to='/' className='lick_button'>Voltar</Link>
        <buntton onClick={() => 
          api.login_dados(setCorFedeback, setVauleFedeback, email, senha, mudar_para)} 
          className="logarbnt">
            Logar
          </buntton>
      </div>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default Login;