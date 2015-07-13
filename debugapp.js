(function(){
    var sDebug = 1; // esta variavel serve somente para tiver ou desativar esse debug via server em sua aplicação. coisa bem simples

    if (sDebug){
        console.error = function(_msg){
            servDebug({tipo: 'error', msg: _msg});
        };
        console.log = function(_msg){
            servDebug({tipo: 'log', msg: _msg});
        };
        console.info = function(_msg){
            servDebug({tipo: 'info', msg: _msg});
        };

        var servDebug = function(_obj){
            $.ajax({
                url: 'http://10.2.2.37:3005', // entra o ip de sua maquina, e pronto, mágica feita!
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify({debug: _obj}),
                success: function(d){
                    // recursivo! kkkk
                    //console.log(d);
                }
            });
        };
    }
})();