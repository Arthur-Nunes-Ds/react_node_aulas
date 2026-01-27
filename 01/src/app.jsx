//importa metetodo para usar no react
import { useState } from 'react';
import { Helmet } from 'react-helmet';
//importação de arquivo
import './style/app.css';
//renomeando para favicon
import favicon from'./assets/favicon.png';

function App() {
  
  //aqui eu posso mudar o valor e o react já o rediriza
  const [a, SetA] = useState(0);

  function button_logic(){
    SetA(a+1);
  };

  function zera_button(){
    SetA(0);
  };

  return (
    //codigo html body
    //className para o css
    <div className='conternair_cenrte'>
      {/*código head*/}
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      {/*códidog body*/}

      <h1>Hello World</h1>
      <br />
      <button onClick={button_logic}>
        test cliques { a } 
      </button>

      <button onClick={zera_button}>
        zeera o campo butoon
      </button>
    </div>
  );
}

//fala o que vai pode ser importado para os outros códigos
export default App