//importa metetodo para usar no react
import { Link, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

import '../style/app.css';
import '../style/home.css';
import '../style/login.css';

import api from '../api/public.jsx';

function Criar_conta() {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [showsenha, setShowsenha] = useState(false);
  const [user_exite, setUserExite] = useState(false);
  const [fedeback_vaule, setVauleFedeback] = useState("");
  const [fedeback_cor, setCorFedeback] = useState("");
  const mudar_para = useNavigate();

  return(
    <div className='conternair_cenrte'>
      <Helmet>
        <title>Criar Conta</title>
      </Helmet>

      <h1 className='name_page'>Criar Conta</h1>
      <label> Email
        <input
          type='email'
          value={email}
          placeholder='test@email.com'
          onChange={(e) => setEmail(e.target.value)}
          style={{width: "190px"}}
        /> 
      </label>

      <label>Nome
        <input type="text"
          value={nome}
          placeholder='nome'
          onChange={(e) => setNome(e.target.value)}
          style={{width: "190px"}}
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

      {user_exite ? <Link to='/login' className='lick_button' >Ir para Login</Link> : null}

      {/* style= {} e´um "css" */}
      <p style={{ color: fedeback_cor}} className="fedeback">{fedeback_vaule}</p>
      <div className='button_menu'>
        <Link to='/' className='lick_button'>Voltar</Link>
        <buntton onClick={() => api.criar_user(
          setCorFedeback, setVauleFedeback, email, senha, nome , mudar_para, setUserExite
        )} className="logarbnt">Criar Conta</buntton>
      </div>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default Criar_conta;