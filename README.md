#Debugador Phonegap com NodeJs

Este é um simples debugador para Phonegap feito em NodeJS

Com esse degub, você consegue printar facilmente no console do seu computador, os logs de erro gerados por sua aplicação, pode também marcar alguns pontos do seu código usando um console simples `console.log('algum texto no meio do meu app');` e pode inclusive printar objetos complexos como

    console.log('pessoa',
        {nome: 'fulano',
        sobrenome: 'de tal',
        parentes: [
			{nome: 'theo', tipo: 'filho'},
			{nome: 'natalia', tipo: 'esposa'}
		]}
    );
que o console do Node imprime tudo, inclusive identado. Nativamente!

## Instalação

* Basta clonar o repositório numa pasta 'nodejs' em seu projeto *(ou qualquer pasta que quiser, inclusive fora do projeto, não importa)*.
* Em seguida copie o arquivo *debugapp.js* para seu aplicativo e chame-o na inicialização.

Esse arquivo *debugapp.js* usa o **jQuery** para fazer requisições **AJAX**, mas basta edita-lo para fazer a requisição *do jeito que você quiser, usando a biblioteca que quiser*. Ele serve apenas para interceptar as funções **log**, **error**, **info** e **warning** do **console** e enviar para o servidor Node.

Feito isso você só precisa rodar o aquivo *debugsrv.js* com o node para ter seu servidor pronto.

    $ nodejs debugsrv.js

ou

    $ node debugsrv.js

E lembre-se de colocar o IP do servidor lá no seu arquivo *debugapp.js*!