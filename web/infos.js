//Aboradgem tradicional-- appp sem framework, so html csss e JS
// o browser faz uma requisiçao ao back end
// ex: me de uma listagem de usuer
// ai o browser vai ao banco e monta um html (template engine -- NODEJS USA POR EXEMPLO HANDEELBARS)
//O back end retorna até a parte visual ao browser
//LOGO BACK É CABULOSO, POIS É O RESPONSAVEL POR TODOS
//TRADICIONALMENTE: A REQ RETORNA TUDO ESTRUTURAL E VISUAL--HTML, MAS ISSO DELIMITA
//POR EXEMPLO RETORNAR UM MOBILE QUE É DIFERNETE

//2012 COMEÇOU OS FRAMEWORKS MAIS FAMOSSOS COMO ANGULAR E REACT
//Abordagem de SPA(aplicaçoes em uma unica pagina)
//O HTML, CSSS E JS DE INTERFACE FICA DO LADO DO BROWONSER
//O BACAK END N TEM RESPOSABILIDADE PELO FRONT
//O NODEJS/BACK RETORNA UM JSON Á UMA REQUISIÇAO
//entao numa listagem, recebemos um vetor com  os usuarios
//ai o react pega a lista e joga na tela com o visual
//melhroa a perfomance-- o REACT cria o HTML e isso é feito do lado CLIENTE
// AS ROTAS SÃO CONTROLADAS ATE PELO REACT, ENTAO NAO PRECISMA FAZER REQ AO BACK END
//NO REACT NAO PRECISAMO TODA VEZ FAZER ESSA REQUISIÇAO
//Por isso podemos usar em varios Fronts ends(mobile, APS,WEB)

//nas dependencias (package.json)temos o REACT-DOM QUE É COMO O HTML DA PAGINA
//react-scripts-- para rodar o projeto(como se fosse uma ferramente tipo o nodemon) é uma future

//rsc-- todo o codigo desenvolvido
//public -- arquivos de forma public--favicon(aba), primerio arquivo(index.html), logos ..
//PWA(tem no blog)

/**********************************************/

import React, { useState } from "react";

/*****OS 3 CONCEITOS CHAVES DE REACT****/

/*****Componente*****/
//É uma funçao que retorna um conteudo(HTML, CSS OU JS PARA INTERFACE)
// Criar um component novo: quandoisolamos um pedaço da applicaçao, dentro de algo que nao inflija no resto dos outros componentes
// No facebook: imeline seria um componetne que nao afeta o cabeçalho,posts, o rodapé, menu lateral..
//O App é um componente e poderia ser usadso dentro de outro(se existir o Header, pode ser chamado dentro do App)
//sempre bom usar modulado(um componente por arquivo)

/*****Estado*****/
//info que o componente vai manipluar
//o estado é uma informaçao que vai ser mantida pelo ocmponenete
// a descomponentização {useState} é para isso

/*****Propriedade*****/
//São como os atributos do HTML, tipo um title dentro da tag
// em Header, poderiamos ter title='' e passamos o nome da pagina especifica
//no arquivo Header tem infos
//Informaçoes que o compoente PAI passa para o FILHO

//React nao atualiza por exemplo o counter, ele usa o setCounter para criar um novo

//import Header from './Header';

//function App() {                                  //JSX-- tratando HTML dentro do JS
//const [counter, setCounter] = useState(0)       //criamos um estado que é um vetor (desestruturando com o [],temos 2 componenest--a variavel e uma funçao que atualiza ela)                                      //dentro da function do Componente, declaramos as sua funçoes tb

// let counter = 0;

//function incrementCounter(){
//setCounter(counter + 1);                     //logica que funciona
//counter ++;                                 //nao funciona pq o React olha estado e nao alteraçao das variaveis
// alert('Helllo')
//}                                               //funciona a mesma ideia de functions em JS

//return (                                       //tudo aqui dentro é renderizado na tela || <></> funcioancomo div, pois os componentens precisam estar em um corpo de tag(div funcioan tb)
//<>
//    <h1>Contador: 0</h1>                      //nao altera na dom
//    <h1>Contador: {counter}</h1>              //altera ao vivasso
//    <button onClick={incrementCounter}>Incrementar</button>
//</>
//);
//}
