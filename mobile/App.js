import React from "react";
import { StatusBar } from "react-native"; //componente basico do sistema
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

// idem ao react, mas tem tags especificas
//DIferenças: Reacjs usa tags de html
//React Native nao é assim, n tem signficado semantico nem styles
//nos temos algo generico. Nao há classes nem id nos componentes, usamos apenas style
//style é o atributo que recebemso, recebe um objto
//nao há ifen (-) temos objtos em JS
//não há herança de estilização entre as views

//babel-- é para converter js recente para as que o cogido precisa
//asses sao as imagens de icones por exemplo.abs
//
