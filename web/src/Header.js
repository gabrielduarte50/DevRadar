import React from 'react';


//basicamente entender que as props buscam as propriedades que sao passadas nas tags
//criadas em uma page, assim podemos tratar cada um
//como o componente é replicável, podemos usar varias vezes e funciona normal


function Header(props){             //parametro padrao que pega as propriedades
    return <h1>{props.title}</h1>   //as chaves indicam uma variavel ou conteudo JS
  }
  
export default Header;