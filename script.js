
var modal = document.querySelector('dialog');
var nota = document.getElementById('nota');
var main = document.querySelector('.main');


/* AQUI EM CIMA E AS VARIAVEIS */


/*

            <div class="anotacoes">
                <h4 id="nomenote">Estudar</h4>
                <p id="contnote">Estudar faculdade EAD e ao mesmo tempo fazer projeto pratico de JS</p>
                <button class="ex">X</button>
            </div>
*/

/* AQUI EM BAIXO E AS FUNÇÕES */




function anotar(){
    note.value.innerHTML+= `            
    <div class="anotacoes">
        <h4 id="nomenote">Estudar</h4>
        <p id="contnote">Estudar faculdade EAD e ao mesmo tempo fazer projeto pratico de JS</p>
        <button class="ex">X</button>
    </div>` 
}

function abrirNovaNote () {
    modal.showModal();
}

