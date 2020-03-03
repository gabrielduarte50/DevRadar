import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//importamos o REACT -- ao inves de require
//todo arquivo HTML precisamos importar o React --- sempre que tiver</> precismamos de REACT
//reactDom-- ARVORE DE ELEMENTOS ( DOM é o que vemos ao inspecionar a pagina)
//reactDom varia para o projt--mobile, app, televisao...

ReactDOM.render(<App />, document.getElementById("root"));
//a gente pega o ReactDom e renderizamos(desenhando) o APP(arquivo que cria o HTML) e renderizamos dentro da div com o getEle..('root')
//JSX---javascript + html </> indica que estamos trabalhando com isso
