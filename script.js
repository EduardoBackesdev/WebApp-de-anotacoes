var modal = document.querySelector('dialog');

/* --------- */

function abrirNovaNote () {
    modal.showModal();
}

/* --------- */


function anotar(){
    var nomeDaNota = document.querySelector('input[name=tituloDaNota]').value;
    var conteudoDaNota = document.querySelector('textarea[name=conteudoNota]').value;
    var background = document.querySelector(".main");
    var modal = document.querySelector('dialog');

    modal.close()


    background.innerHTML+=`                
        <div class="anotacoes">
        <h4>`+nomeDaNota+`</h4>
        <p>`+conteudoDaNota+`</p>
        <button onclick="fecharBot()" class="ex">X</button>
        </div>`
}

/* --------- */


function fecharBot(){
    var background = document.querySelector(".main");
    background.innerHTML=''    
}



















/* ZONA PARA TESTES */

/*

            <div class="anotacoes">
                <h4 id="nomenote">Estudar</h4>
                <p id="contnote">Estudar faculdade EAD e ao mesmo tempo fazer projeto pratico de JS</p>
                <button class="ex">X</button>
            </div>
*/

