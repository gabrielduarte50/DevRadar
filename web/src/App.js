import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";

import DevItem from "./components/DevItem/";
import DevForm from "./components/DevForm/";

/*****OS 3 CONCEITOS CHAVES DE REACT****/

/*****Componente*****/
//É uma funçao que retorna um conteudo(HTML, CSS OU JS PARA INTERFACE)
// Criar um component novo: quandoisolamos um pedaço da applicaçao, dentro de algo que nao inflija no resto dos outros componentes
// No facebook: imeline seria um componetne que nao afeta o cabeçalho,posts, o rodapé, menu lateral..
//O App é um componente e poderia ser usadso dentro de outro(se existir o Header, pode ser chamado dentro do App)
//sempre bom usar modulado(um componente por arquivo)

/*****Estado*****/
//info que o componente vai manipluar
//o estado é uma informaçao que vai ser mantida pelo ocmponenete alem de ser imutável na funçao
// a descomponentização {useState} é para isso

/*****Propriedade*****/
//São como os atributos do HTML, tipo um title dentro da tag
// em Header, poderiamos ter title='' e passamos o nome da pagina especifica
//no arquivo Header tem infos
//Informaçoes que o compoente PAI passa para o FILHO

//React nao atualiza por exemplo o counter, ele usa o setCounter para criar um novo

//onChange={e => setLatitude(e.target.value)} é a forma de pegar um evento e setar o estado
//

function App() {
  const [devs, setDevs] = useState([]); //array vazio que ira pegar os devs e armazanear

  useEffect(() => {
    // para aparecer a lista de devs uma uica vez na page
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data); // fechamos depois que executar
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    //dispara qunado o submit é clicado
    const response = await api.post("/devs", data); //comunicando com o back e enviando dados
    console.log(response.data);

    setDevs([...devs, response.data]); //setamos os novos devs adicionanaod no final do veotr(... indica add e copiando os anteriores)
  }

  return (
    //tudo aqui dentro é renderizado na tela || <></> funcioancomo div, pois os componentens precisam estar em um corpo de tag(div funcioan tb)
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((
            dev //percorrer o devs com o map(percorre o array e retorna toao conteudo DevIem
          ) => (
            <DevItem key={dev._id} dev={dev} /> //key é a cahve que pega o dev com algo unnico
          ))}
        </ul>
      </main>
    </div>
  );
}
//aside: conteudo lateral de navbar
//main conteudo principal -- listagem

export default App;
