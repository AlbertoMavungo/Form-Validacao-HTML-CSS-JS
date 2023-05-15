const forms = document.querySelector('.formulario')
  forms.addEventListener('submit', (e)=>{
  e.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
  const botaoClicado = document.getElementById('botao');

  botaoClicado.addEventListener('click', () => {
    let campos = document.querySelectorAll(".elemento");

    campos.forEach(campo => {
      campo.addEventListener('change', () => {
        if (campo.value !== "") {
          campo.classList.add("campo-preenchido");
          campo.classList.remove("campo-nao-preenchido");
          removeMensagemErro(campo); 
        } else {
          campo.classList.add("campo-nao-preenchido");
          campo.classList.remove("campo-preenchido");
          exibirMensagemErro(campo, "Campo obrigatório"); 
        }
      });
    });
  });
});

function exibirMensagemErro(campo, mensagem) {
  let mensagemErro = campo.parentElement.querySelector('.mensagem-erro');
  
  if (!mensagemErro) {
    mensagemErro = document.createElement('span');
    mensagemErro.classList.add('mensagem-erro');
    campo.parentElement.appendChild(mensagemErro);
  }
  
  mensagemErro.textContent = mensagem;
}

function removeMensagemErro(campo) {
  let mensagemErro = campo.parentElement.querySelector('.mensagem-erro');
  
  if (mensagemErro) {
    mensagemErro.remove();
  }
}