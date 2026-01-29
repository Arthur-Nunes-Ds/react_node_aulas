import { jwtDecode } from "jwt-decode";

function Title(frase){
  if (frase !== ""){
    return frase
    //quebra a frase em arry
    .split(" ")
    /*
      map => pecorre cada elemento de uma lista é já vai aplicando o efeito para cada 
      elemento
      palavra => namespace do index(for _ in ...; o _ é o namespace do index)
      palavra.charAt(0) => pega a 1° letra de cada palavra
      .toUpperCase() => deixa o caracter maisculo
      palavra.slice(1) => pega o resto do índece em uma plavra
    */
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    //separa todos os index do arry e junta tudo com um espaço
    .join(" ");
  }
}

function is_valido(list) {
  let _list_retono = [];
  //const i of arry -> server para ele pega os elemntos da lista e apenas
  for (const i of list){
    if (i !== ""){
      //trim -> strip ; push -> append só que só na ultima posição
      _list_retono.push(i.trim());
    }
    else{
      return [false, list];
    }
  }
  return [true ,_list_retono];
}

async function login_dados(_setCorFedeback, _setVauleFedeback, _email, 
_senha, _mudar_para) { 

  const args = is_valido([_email,_senha]);

  if (args[0]){
      [_email, _senha] = args[1];

      //formulario
      const dados = new URLSearchParams();
      dados.append("username", _email);
      dados.append("password", _senha);

      try{
        const quey = await fetch('https://2dsmoca.tech/public/logar_usuario/',{
          //fala como os dados sera enviado mas toke caso tenha
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          //method que eu tó requesitando
          method: 'POST',
          //o que eu tó enviando de fato por server
          body: dados.toString()
        });

        switch (quey.status) {
          case 200:
            _setCorFedeback("#00ff00");
            _setVauleFedeback("Login feito com sucesso.");

            const resultado = await quey.json();
            const token = resultado.access_token;
            const decoded = jwtDecode(token);

            localStorage.setItem("token", token);
            localStorage.setItem("role", decoded.role);
            
            _mudar_para('/menu_user');
        
            break;
          
          case 404:
              _setCorFedeback("#ff0000");
              _setVauleFedeback("_Email não cadastrado/encontrado.");
            break;
          
          case 401:
            _setCorFedeback("#ff0000");
            _setVauleFedeback("Credenciais invalida.");
            break;

          default:
            _setCorFedeback("#eeff00");
            _setVauleFedeback(`Erro interno tente mas tarde.`);
        }

      } catch (error) {}
  }
  else{
    _setCorFedeback("#ff0000");
    _setVauleFedeback("informe o campo de email, senha .");
  }
}

async function criar_user(_setCorFedeback, _setVauleFedeback, _email, 
  _senha,_nome , _mudar_para, _set_user_exite) { 
  
  const args = is_valido([_email,_senha,_nome]);

  if(args[0]){
      [_email,_senha,_nome] = args[1];
      _nome = Title(_nome);

      //json
      const dados = {
                      "nome": _nome,
                      "senha": _senha,
                      "email": _email
                    };

      try{
        const quey = await fetch('https://2dsmoca.tech/public/criar_cliente',{
          //fala como os dados sera enviado mas toke caso tenha
          headers: {"Content-Type": "application/json"},
          //method que eu tó requesitando
          method: 'POST',
          //o que eu tó enviando de fato por server
          body: JSON.stringify(dados)
        });

        console.log(quey.status);

        switch (quey.status) {
          case 200:
            _setCorFedeback("#00ff00");
            _setVauleFedeback("Login feito com sucesso.");
            _set_user_exite(false);

            login_dados(_setCorFedeback,_setVauleFedeback,_email,_senha,_mudar_para);
        
            break;
          
          case 409:
            _setCorFedeback("#ff0000");
            _setVauleFedeback("Email já cadastrado");
            _set_user_exite(true);
            break;

          case 401:
            _setCorFedeback("#ff0000");
            _setVauleFedeback("Credenciais invalida.");
            _set_user_exite(false);
            break;

          default:
            _setCorFedeback("#eeff00");
            _setVauleFedeback(`Erro interno tente mas tarde.`);
            _set_user_exite(false);
        }

      } catch (error) {
        //erro de rede
        _setCorFedeback("#eeff00");
        _setVauleFedeback(`Erro de conexão: ${error.message}`);
        _set_user_exite(false);
      }
    }
    else{
      _setCorFedeback("#ff0000");
      _setVauleFedeback("informe o campo de email, senha e nome");
    }
}

export default { login_dados, criar_user };